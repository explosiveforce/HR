<template>
	<div class="Cart">
		<el-container  >
			 <el-header style="height: 150px; ">			  				  
				  <div>					  
						   <label>员工姓名：</label>
						   <el-input
						     placeholder="输入员工姓名查询"
						     size="small"
						     style="width:150px;"
						     v-model="searchParams.title"
						     clearable						    
						   ></el-input>
						   
						   
						   
						   <el-button type="success" size="small" style="width: 80px;">查询</el-button
						   >
						   <el-button type="warning" size="small"  style="width: 80px;">重置</el-button>
							 
				  </div>
			 </el-header>
			<el-container  >			
				<el-container >
					<el-main style="height: 720px;">							
						<ToolBar>
							<div class="main-top">
								  <el-breadcrumb  >
									<el-breadcrumb-item :to="{ path: '/department_Manage/list' }">该岗位下所有员工</el-breadcrumb-item >
											   
								  </el-breadcrumb>	
							</div> 
							<div>		
							 
							  <el-button type="primary" size="small" @click="exportTable">本地导出表格</el-button>							  
							</div>
						</ToolBar>						
						<div>
							<el-table
								ref="multipleTable"
								:data="tableData"
								tooltip-effect="dark"
								style="width: 100%"
								>									
								 <el-table-column type="selection" width="55"></el-table-column>
									  
									   <el-table-column label="编号" align="center">
										 <template slot-scope="scope">{{ scope.row.id }}</template>
									   </el-table-column>
									    <el-table-column label="姓名" align="center">
										 <template slot-scope="scope">{{ scope.row.name }}</template>
									   </el-table-column>
									   
									    <el-table-column label="性别" align="center">
										 <template slot-scope="scope">{{ scope.row.sex }}</template>
									   </el-table-column>
									   
									   <el-table-column label="民族" align="center">
									   	<template slot-scope="scope">{{ scope.row.folk }}</template>										
									   </el-table-column>	
									   <el-table-column label="电话" align="center">
									   	<template slot-scope="scope">{{ scope.row.phone }}</template>										
									   </el-table-column>	
									   <el-table-column label="邮件" align="center">
									   	 <template slot-scope="scope">{{ scope.row.email }}</template>										
									   </el-table-column>	
									   <el-table-column label="学历" align="center">
									   	 <template slot-scope="scope">{{ scope.row.eduback }}</template>										
									   </el-table-column>	
									   
									   <el-table-column label="身高" align="center">
									   		 <template slot-scope="scope">{{ scope.row.height }}</template>
									   </el-table-column>
									   
									   <el-table-column label="籍贯" align="center">
									   	<template slot-scope="scope">{{ scope.row.homeplace }}</template>										
									   </el-table-column>	
									   
									   <el-table-column label="出生日期" >										
										 <template slot-scope="scope">{{ scope.row.birth | formatTimeToStr}}</template>
									   </el-table-column>
									  
									   
									   <el-table-column label="所属部门" >
									   		<template slot-scope="scope">{{ scope.row.departmentname }}</template>
									   </el-table-column>
									   
									   <el-table-column label="所在岗位">									 
										  <template slot-scope="scope">{{ scope.row.stationname }}</template>										
									   </el-table-column>
										
										
										<el-table-column label="入职日期">
											<template slot-scope="scope">{{ scope.row.employdate | formatTimeToStr }}</template>										
										</el-table-column>	
										<el-table-column label="入职途径">
											 <template slot-scope="scope">{{ scope.row.source }}</template>										
										</el-table-column>	
										<el-table-column label="政治面貌">
											 <template slot-scope="scope">{{ scope.row.politics }}</template>										
										</el-table-column>
										
																		  
									  								  
							</el-table>																													
						</div>	
												
					</el-main>					
				</el-container>		  
			</el-container>	
			
		</el-container  >
			
	</div>
</template>

<script>

import {queryStationIdEmployee} from "@/api/ststion"
import { exportCvsTable } from "@/utils/cvs";
import {formatTimeToStr} from "@/config/date"; 
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
		
			//之后从后台数据
			tableData: [],
	
	      }
	    },
		
		
		
		computed:{
		  
		},
		
		created(){
			//页面一加载就初始化部门列表
			this.initEmptDate()
			
		},
		methods:{
			
			//查询部门下员工
			initEmptDate(){
				
				queryStationIdEmployee({stationId:this.$route.query.stationid})
				.then(r=>{
					this.tableData=r;
				})
			 .catch(()=>{});		
				
			},
			
			
			
			//导出列表
			exportTable() {
				//部门列表
			  exportCvsTable(
				[
				  { title: "编号", field: "id" },
				  { title: "姓名", field: "name" },
				  { title: "电话", field: "phone" }
				],
				//导出的表名
				this.tableData,
				"岗位列表"
			  );
			},
			
			//确定按钮
			refresh() {
			 
			},
			
		
		},
		
	
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
