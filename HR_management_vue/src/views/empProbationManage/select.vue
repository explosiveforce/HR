<template>
 <div @opened="initepartmentListDate" class="demo">
 	  <el-header style="height: 130px; ">		 
		  <div>
			<el-input
			  placeholder="请输入员工名称或编号"
			  size="small"
			  style="width: 250px"
			  v-model="searchParams.title"
			  clearable
			></el-input>
			<el-button type="success" size="small" round
			  >查询</el-button
			>
			<el-button type="warning"  size="small" round
			  >重置</el-button
			>
		  </div>
 		 		
 	  </el-header>
 	  <div class="">
		  <ToolBar>
		  	<div>已转正员工信息</div>
		  </ToolBar>
			<el-table 
				:data="tableData"
				border
				style="width: 100%"
				>
					<el-table-column label="员工编号" align="center">
						<template slot-scope="scope">{{ scope.row.employee.id }}</template>
					</el-table-column>
					<el-table-column label="员工姓名" align="center">
						<template slot-scope="scope">{{ scope.row.employee.name }}</template>
					</el-table-column>
				    <el-table-column label="考核结果" align="center">
				  	    <template slot-scope="scope">{{ scope.row.result }}</template>
				    </el-table-column>
					  
					<el-table-column label="考核评语" align="center">
						<template slot-scope="scope">{{ scope.row.comment }}</template>
					</el-table-column>
					<el-table-column label="备注" align="center">
						<template slot-scope="scope">{{ scope.row.remark }}</template>
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
		
  </div>
</template>

<script>
	import {queryForList} from "@/api/tryManage"; 
export default {
  data() {
    return {
      searchParams: {
        title: "",
      },
	  result:1,
      tableData: [],
	  pageNo:1,
	  pageSize:3,
	  total:0,
	  showEditDialog: false,
    };
  },
  
  created() {
  	this.initepartmentListDate()
  },
  methods: {
	changePage(i){
		this.pageNo=i;
	},
	//查询已转正员工
	initepartmentListDate(){
		queryForList({result:this.result})
		.then(r=>{
			console.log(r)
			this.tableData = r
		})
	},
  },
  components: {}
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