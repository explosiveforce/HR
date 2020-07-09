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
								 
									<el-breadcrumb-item>岗位基础信息表</el-breadcrumb-item>			   
							</div> 
							<div>		
							  <el-button type="primary" round size="small" @click="showEditDialog = true">新建岗位</el-button>
							  <el-button type="info"  round size="small" @click="exportTable">本地导出表格</el-button>							  
							</div>
						</ToolBar>						
						<div>
							<el-table
							      :data="tableData"
							      style="width: 100%"								  
							      @selection-change="handleSelectionChange"
							    >
							      <el-table-column type="id" prop="id" label="岗位编号"  align="center"></el-table-column>
							      <el-table-column prop="name" label="岗位名称" align="center"></el-table-column>
							      <el-table-column prop="type" label="岗位类型" align="center"></el-table-column>
								  <el-table-column prop="number" label="岗位人数" align="center"></el-table-column>
							      <el-table-column label="操作" align="center">
							        <template slot-scope="s">
									   <el-button size="mini" round type="success" @click="selectemp(s.row.id)">岗位下员工查询</el-button>
							           <el-button size="mini" round type="warning" @click="editItem(s.row.id)">修改</el-button>
							           <el-button type="danger" size="mini" round @click="deleteforid(s.row.id)">删除</el-button>
									</template>
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

import {formatTimeToStr} from "@/config/date"; 
//导出列表
import { exportCvsTable } from "@/utils/cvs";
import {selectAllStation,deleteByPrimaryKey} from  "@/api/ststion";

	
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
		
			//之后从后台获取到的岗位数据
			tableData: [],
			
			//嵌套对话框
			showEditDialog: false,
			//用于修改信息用
			id:'',
			
			
	      }
	    },
	
		created(){
			this.initAllStation()
		},
		methods:{
			
			initAllStation(){
				  	
				  	selectAllStation()
				  	.then(r=>{
				  		//获取到从后台传入的岗位列表
				  		this.tableData = r;
				  	})
				  	.catch(()=>{});					  	
			},
			
			//修改按钮
			editItem(id) {
				
			  this.id = id;
			 
			  this.showEditDialog=true;
			},
			
			//确定按钮，用来刷新页面
			refresh() {
				
			   this.initAllStation();
			     this.showEditDialog=false;
			},

			//查询岗位下所有员工信息--通过岗位id查询
			selectemp(id){
				this.id=id;
				 //this.showEditDialog=true;				
				this.$router.push({path:'/stationemp',query:{stationid:id}});
			},
			
			//删除岗位--真删除
				deleteforid(id){
					if(id!=0){
						this.$confirm("确定删除?", "提示", {
							confirmButtonText: "确定",
							cancelButtonText: "取消",
							type: "warning",
						})
						.then(() => {
							this.updateStatusApi(id);
						})
						.catch(() => {});
					}
				},
			   updateStatusApi(id){
				   
				   deleteByPrimaryKey({ stationid:id})
					  .then(r => {
						this.$message({
						  type: "success",
						  message: r.msg
						});
						this.refresh();
					  })
					  .catch(() => {});
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
