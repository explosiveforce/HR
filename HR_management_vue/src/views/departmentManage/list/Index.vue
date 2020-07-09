<template>
	<div class="List">
		<el-container  >
			 <el-header style="height: 100px;">			  				  
				  <div>
						   					
				  </div>
			 </el-header>
			<el-container>			
				<el-container >
					<el-main style="height: 720px;">							
						<ToolBar>
							<div class="main-top">
								 
									<el-breadcrumb-item>部门信息</el-breadcrumb-item>			   
							</div> 
							<div>		
							  <el-button round type="primary" size="small" @click="showEditDialog = true">新建部门</el-button>
							  <el-button  round type="info" size="small" @click="exportTable">本地导出表格</el-button>							  
							</div>
						</ToolBar>						
						<div>
							<el-table
								ref="multipleTable"
								:data="tableData"
								tooltip-effect="dark"
								style="width: 100%"
								>									
									   <el-table-column label="部门编号" width="150" align="center">
										 <template slot-scope="scope">{{ scope.row.id }}</template>
									   </el-table-column>
									    <el-table-column label="部门名称" width="150" align="center">
										 <template slot-scope="scope">{{ scope.row.name }}</template>
									   </el-table-column>
									   
									    <el-table-column label="部门电话" width="200" align="center">
										 <template slot-scope="scope">{{ scope.row.telephone }}</template>
									   </el-table-column>
									   <el-table-column label="部门传真" align="center" >										
										 <template slot-scope="scope">{{ scope.row.fax }}</template>
									   </el-table-column>
									  
									   <el-table-column label="成立日期" align="center">
									   		 <template slot-scope="scope">{{ scope.row.date | formatTimeToStr}}</template>
									   </el-table-column>
									   <el-table-column label="上级部门" align="center">
									   		<template slot-scope="scope">{{ scope.row.predepartment }}</template>
									   </el-table-column>
									   
									   <el-table-column label="备注" align="center">									 
										  <template slot-scope="scope">{{ scope.row.description }}</template>										
									   </el-table-column>									   
									   <el-table-column label="操作" align="center" width="220px">
											<div slot-scope="s">
												<!--通过作用域将部门id传入后台获取部门下员工数据  -->
												<el-button type="success" size="mini" round @click="queryEmpInDepartment(s.row.id)" >查询</el-button>
												<el-button type="warning" size="mini" round @click="editItem(s.row.id)" >修改</el-button>
												<el-button type="danger" size="mini" round @click="deleteforid(s.row.id,1)">删除</el-button>
												
											</div>
											
									   </el-table-column>									  
							</el-table>																													
						</div>	
												
					</el-main>					
				</el-container>		  
			</el-container>	
			
			
			<Edit :showEditDialog="showEditDialog" @close="showEditDialog = false"  @success="refresh()" />	
		</el-container  >
			
	</div>
</template>

<script>
import Edit from "./Edit.vue";
//获取部门列表departmentList
import {departmentList,Delectepartment} from  "@/api/departmentManage";
import {formatTimeToStr} from "@/config/date"; 
//导出列表
import { exportCvsTable } from "@/utils/cvs";
	
	 export default {	
		 filters:{
		         formatTimeToStr:function(time){
		 
		             return formatTimeToStr(time);
		         },
		  },
	    data() {
	      return {			  
			  
			//模糊查询
			searchParams: {
			  title: "",
			  type: ""
			},
		
			//之后从后台获取到的部门数据
			tableData: [],
			
			//嵌套对话框---新建部门
			showEditDialog: false,
			//用于修改信息用
			id:'',
			
			
	      }
	    },
		computed:{
		  
		},
		
		created(){
			//页面一加载就初始化部门列表
			this.initepartmentListDate()
		},
		methods:{
			
			//查询部门列表数据
			initepartmentListDate(){
				   departmentList().then(r=>{
					   //获取到从后台传入的部门列表
					   console.log(r)
					   this.tableData = r
					  
				   
				   })
				   		  
			},
			
			//查询部门下所有员工信息--通过部门id查询
			queryEmpInDepartment(id){
				
				this.id=id;
				 //this.showEditDialog=true;				
				this.$router.push({path:'/queryEmp',query:{departmentId:id}});
			},
			//删除部门
			deleteforid(id,newtype){
				this.id=id;
				if(newtype!=0){
					this.$confirm("确定删除?", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					})
					.then(() => {
						this.updateStatusApi(id,newtype);
					})
					.catch(() => {});
				}
			},
		   updateStatusApi(id,newtype){
			   console.log(id,newtype);
			   Delectepartment({ id:id,type :newtype})
				  .then(r => {
					this.$message({
					  type: "success",
					  message: r.msg
					});
					this.refresh();
				  })
				  .catch(() => {});
		},
			
			//编辑按钮
			editItem(id) {
				
			  this.id = id;
			 
			  this.showEditDialog=true;
			},
			
			//确定按钮，用来刷新页面
			refresh() {
			   this.initepartmentListDate();
			     this.showEditDialog=false;
			},
			
			
			//导出列表
			exportTable() {
				//部门列表
			  exportCvsTable(
				[
				  { title: "部门编号", field: "id" },
				  { title: "部门名称", field: "name" },
				  { title: "部门电话", field: "telephone" }
				],
				//导出的表名
				this.tableData,
				"部门列表"
			  );
			},
			
			
		
			
		
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
		  margin: -12px;
		  padding-top: 15px;
	    }
	.el-footer {
	    background-color: #025532;
	    color: #ffff00;
	    text-align: center;
	    line-height:70px;
		
	  }	
	 

	
	/* cart-footer */
	.cart-footer{
	    position: relative;
	    line-height: 50px;
	    background: #eee;
	    overflow: hidden;
	}
	.cart-footer .select-con{
	    float: left;
	    padding-left: 20px;
	}
	.cart-footer .delete-con{
	    float: left;
	   
	}
	.cart-footer .submit-con{
	    float: right;
	}
	
	.cart-footer .submit-con .submit-total,#selectGoodsCount{
	    font-size: 18px;
	    color: #c60023;
	    font-weight: bold;
	    margin-right: 30px;
	    vertical-align: middle;
	}
	 #selectGoodsCount{
	     margin-right: 5px;
	 }
	 .submit-con .submitDis {
	     background: #B0B0B0;
	     cursor: no-drop;
	 }
	.cart-footer .submit-con .btn-submit{
	    width: 80px;
	    text-align: center;
	    height: 50px;
	    line-height: 50px;
	}
</style>
