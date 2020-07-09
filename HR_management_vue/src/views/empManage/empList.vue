<template>
	<div class="empManage">
		<el-container  >
			 <el-header style="height: 130px; ">
				 
					  <div>
						<el-input
						  placeholder="请输入员工名称或编号"
						  size="small"
						  style="width: 250px"
						  v-model="searchParams.title"
						  clearable
						></el-input>
						<el-button type="success"  size="small" round=""
						  >查询</el-button
						>
						<el-button type="warning"  size="small" round=""
						  >重置</el-button
						>
					  </div>
			 				 		 		
			 				
			 </el-header>
			<el-container  >			
			
					<el-main style="height: 720px;">							
						<ToolBar>
							<div class="main-top">
								 
									<el-breadcrumb-item>员工信息表</el-breadcrumb-item>			   
							</div> 
							<div>	
							  <el-button type="primary" size="small" @click="addemp" round="">添加员工</el-button>
							  <el-button type="info" size="small" @click="exportTable" round="">本地导出表格</el-button>
							</div>
						</ToolBar>						
						<div>
							<el-table
								
								:data="tableData"
								
								style="width: 100%"
								>									
								
										
										<el-table-column label="员工编号" align="center" >
											 <template slot-scope="scope">{{ scope.row.id }}</template>
										</el-table-column>
										<el-table-column label="员工姓名" align="center">
											 <template slot-scope="scope">{{ scope.row.name }}</template>
										</el-table-column>
										<el-table-column label="所在部门" align="center">
											 <template slot-scope="scope">{{ scope.row.departmentname}}</template>
										</el-table-column>
									   <el-table-column label="所属岗位" align="center">
										 <template slot-scope="scope">{{ scope.row.stationname }}</template>
									   </el-table-column>
									   <el-table-column label="是否在职" align="center">										
										 <template slot-scope="scope">{{ scope.row.tag | tag }}</template>
									   </el-table-column>
									   
									   
									   <el-table-column label="入职时间" align="center">
										 <template slot-scope="scope">{{ scope.row.employdate |formatTimeToStr }}</template>
									   </el-table-column>
									   
										 										<el-table-column label="查询" align="center">
										 <template slot-scope="scope">
											 
										   <el-button size="mini" type="warning" @click="modifyEmpInfo(scope.row.id)" round="">修改</el-button>
										   <el-button size="mini" type="success" @click="empDetailInfo(scope.row.id)" round="">详情信息</el-button>										  
										 </template>
									   </el-table-column>
							</el-table>	
									<ToolBar>
											<div >
												<!-- 分页 -->
												<el-pagination
												  background
												  layout="prev, pager, next"
												  :page-size="pageSize"
												  :total="total"
												  @current-change="changePage">
												</el-pagination>
										   </div>
										   <div class="delete-con" >
										   		<a class="cart-delete-seleced link">
										   		<!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button> -->
										   		<!-- <el-button type="danger" @click="toggleSelection()" size="small">取消选择</el-button> -->
										   		<!-- <el-button type="danger" @click="dels" size="small">辞退</el-button> -->
										   		 </a> 
										   </div> 
									   </ToolBar>
						</div>	
					</el-main>					
				</el-container>		  
		<Edit :showEditDialog="showEditDialog" @close="showEditDialog = false"  @success="refresh()" />		
		</el-container  >
	</div>
</template>

<script>
	import Edit from "./Edit.vue";
	import {selectAllEmployee/* ,queryEmpInfoById */} from  "@/api/empManage";
	import {formatTimeToStr} from "@/config/date"; 
	import {tag} from "@/config/tag"; 
	//导出列表
	import { exportCvsTable } from "@/utils/cvs";
	 export default {	 
		 filters:{
		         formatTimeToStr:function(time){
		 
		             return formatTimeToStr(time);
		         },
				 tag:function(id){
					 return tag(id);
				 }
		  },
	    data() {
	      return {
		
			//模糊查询
			searchParams: {
			  department: "",
			  empNo: "",
			  empName: ""
			},
			
			//之后从后台获取到的数据
			tableData: [],
			
			//每页显示条数
			pageSize:7,
			//默认总条数
			total: null,
			//默认初始页号
			pageNo:1,
			
			id:'',
			tags:'',
			showEditDialog: false,

	      }
	    },
		
		created(){
			
			this.initAllEmp()
			
		},
		
		
		methods:{
			initAllEmp(){
				
				selectAllEmployee({pageNo:this.pageNo,pageSize:this.pageSize})
				.then(r=>{
					//获取到从后台传入的员工列表
					this.tableData = r.list
					this.total=r.total
				})
				.catch(()=>{});	
				
			},
			
			//编辑按钮
			modifyEmpInfo(id) {
				
				this.id = id;
				this.showEditDialog=true;
				/* queryEmpInfoById({id:id})
				.then(r=>{					
					this.tags = r.tag
					console.log(tag)	
					this.
				})
				.catch(()=>{}); */		 
			},			
			/* selectTag(id){
				if(tag = 1){
					this.id = id;
					this.showEditDialog=true;
				}
				else{
					alert(11)
				}
			}, */
			
			
			//改变页面当前页
			changePage(val){
					  this.pageNo=val
					  //根据新的页面选取分页数据
					    this.initAllEmp()
			},
			
			//跳转到员工详情页
			empDetailInfo(id){
				
				this.id=id;
				 //this.showEditDialog=true;				
				
				this.$router.push({path:'/empInfo',query:{empId:id}})
			},
			
			//确定按钮，用来刷新页面
			refresh() {
			   this.initAllEmp();
			     this.showEditDialog=false;
			},
			
			dels(){
				
			},
			
			//导出列表
			exportTable() {
				//员工列表
			  exportCvsTable(
				[
				  { title: "员工编号", field: "id" },
				  { title: "员工姓名", field: "name" },
				  { title: "所在部门", field: "departmentname" },
				  { title: "所属岗位", field: "stationname" },
				  { title: "是否在职", field: "tag" },
				  { title: "入职时间", field: "employdate" }
				],
				//导出的表名
				this.tableData,
				"员工列表"
			  );
			},
			toggleSelection(rows) {
				if (rows) {
				  rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				  });
				} else {
				  this.$refs.multipleTable.clearSelection();
				}
			},
			addemp(){
				this.$router.push({name:'addemp'})
			}
   
		},	
		computed:{
		    
		},
		
		components: { Edit }	
		
	};

</script>

<style>
	.el-header {
	    background-color: #025532;
	    color: #ffffff;
	    text-align: center;
	    line-height: 140px;
		
	  }
	   .el-main {
	      background-color: #E9EEF3;
	      color: #333;
	      text-align: center;
	      line-height: 160px;
	    }
	.el-footer {
	    
	    color: #ffff00;
	    text-align: center;
	    line-height:70px;
		
	  }	
	  
	  .cart-footer .select-con{
	      float: right;
	      padding-right: 20px;
	  }
	  .cart-footer .delete-con{
	      float: right;
		  padding-right: 40px;
		 margin-top: -5px;
	     
	  }
</style>
