<template>
 <div @opened="initepartmentListDate" class="demo">
 	  <el-header style="height: 130px; ">
 		  <div>
 		  	<el-date-picker
				size="small"
 		  	      v-model="value"
 		  		   style="width: 550px"
 		  	      type="daterange"
 		  	      align="right"
 		  	      unlink-panels
 		  	      range-separator="至"
 		  	      start-placeholder="开始日期"
 		  	      end-placeholder="结束日期"
 		  	      :picker-options="pickerOptions">
 		  	    </el-date-picker>
				<el-button type="success" round size="small">查询</el-button>
 		  </div>
 	  </el-header>
 	  <div class="">
		  <ToolBar>
		  	<div>试用期考核</div>
		  </ToolBar>
			<el-table
				:data="tableData"
				border				
				@selection-change="handleSelectionChange"
				>
				 <el-table-column label="员工姓名" align="center">
					<template slot-scope="scope">{{ scope.row.employee.name }}</template>
				 </el-table-column>
				 <el-table-column label="部门名称" align="center">
					<template slot-scope="scope">{{ scope.row.employee.departmentname }}</template>
				 </el-table-column>
				 <el-table-column label="岗位名称" align="center">
					<template slot-scope="scope">{{ scope.row.employee.stationname }}</template>
				 </el-table-column>
				 <el-table-column label="试用期开始日期" align="center">
					<template slot-scope="scope">{{ scope.row.starttime | formatTimeToStr}}</template>
				 </el-table-column>
				 <el-table-column label="试用期结束日期" align="center">
					<template slot-scope="scope">{{ scope.row.endtime | formatTimeToStr }}</template>
				 </el-table-column>
				  <el-table-column fixed="right" label="操作" align="center" width="250px">
					<div slot-scope="s">
					  <el-button type="success" size="small" @click="one(s.row.id,1)" round >转正</el-button>
					  <el-button type="warning" size="small" @click="two(s.row.id)" round>延期</el-button>
					  <el-button type="danger" size="small"  @click="one(s.row.id,3)" round>不录用</el-button>
					</div>
				  </el-table-column>
				</el-table>
			<ToolBar>
				<div>
					<el-pagination
					  background
					  :page-size="pageSize"
					  layout="prev, pager, next"
					  :total="total"
					  @current-change="changePage">
					</el-pagination>
				</div>
			</ToolBar>
		  </div>
		 <Edit :showEditDialog="showEditDialog" @close="showEditDialog = false"  @success="refresh()" />	
  </div>
</template>

<script>
import {formatTimeToStr} from "@/config/date"; 
import Edit from "./Edit.vue";
import {queryForList,updateByPrimaryKeySelective,deleteByPrimaryKey} from "@/api/tryManage"; 
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
			pageNo:1,
			pageSize:6,
			total:0,
			tableData: [],
			value:'',
			id:'', // 用于修改
			showEditDialog: false,
	        pickerOptions: {
	                  shortcuts: [{
	                    text: '最近一周',
	                    onClick(picker) {
	                      const end = new Date();
	                      const start = new Date();
	                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
	                      picker.$emit('pick', [start, end]);
	                    }
	                  }, {
	                    text: '最近一个月',
	                    onClick(picker) {
	                      const end = new Date();
	                      const start = new Date();
	                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
	                      picker.$emit('pick', [start, end]);
	                    }
	                  }, {
	                    text: '最近三个月',
	                    onClick(picker) {
	                      const end = new Date();
	                      const start = new Date();
	                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
	                      picker.$emit('pick', [start, end]);
	                    }
	                  }]
	                }, 
		  }
	    },
		computed:{
		  
		},
		
		created(){
			//页面一加载就初始化列表
			this.initepartmentListDate();
		},
		methods:{
			//查询
			initepartmentListDate(){
				queryForList({result:-1})
				.then(r=>{
					console.log(r)
					this.tableData = r
				})
			},
			changePage(i){
				this.pageNo=i;
			},
			// deleteByPrimaryKey
			one(id,newtype){
				if(newtype==1){
					this.$confirm("确定转正?", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					})
					.then(() => {
						this.updateByPrimaryKey(id,newtype);
					})
					.catch(() => {});
				}else if(newtype==3){
					this.$confirm("确定不通过录用?", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					})
					.then(() => {
						this.deleteByPrimaryKey(id,newtype);
					})
					.catch(() => {});
				}
			},
			updateByPrimaryKey(id,newtype){
				   updateByPrimaryKeySelective({ id:id,result:newtype})
					  .then(r => {
						this.result = newtype,
						this.dealDate = new Date().toLocaleString();
						this.$message({
						  type: "success",
						  message: r.msg
						});
						this.refresh();
					  })
					  .catch(() => {});
			},
			deleteByPrimaryKey(id){
				deleteByPrimaryKey({id:id})
				.then(r => {this.$message({
						  type: "success",
						  message: r.msg
						});
						this.refresh();
					  })
					  .catch(() => {});
			},
			two(id){
			  this.id = id;
			  this.showEditDialog=true;
			},
			
			handleSelectionChange(val) {
			  this.multipleSelection = val; //给定义的数组赋值
			},
			refresh() {
			   this.initepartmentListDate();
			   this.showEditDialog=false;
			},
			
		},
		
	components: {Edit }	
	};

</script>

<style scoped>
.cart {
  margin: 15px;
}
.el-header {
	    background-color: #025532;
	    color: #333333;
	    text-align: center;
	    line-height: 140px;
		
	  }
.group_btn {
  margin-bottom: 30px;
}
.addDialog .el-input {
  width: 90%;
}
.total_warpper {
	text-align: right;
  margin-top: 30px;
}
h3 {
  margin-top: 10px;
}
</style>