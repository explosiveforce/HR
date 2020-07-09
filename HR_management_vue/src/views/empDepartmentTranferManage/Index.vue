<template>
 <div>
 	  <el-header style="height: 130px; ">
		<div>
				    <el-input
				      placeholder="请输入部门名称或编号"
				      size="small"
				      style="width: 250px"
				      v-model="searchParams.title"
				      clearable
				    ></el-input>
				    <el-button type="success" size="small" round=""
				      >查询</el-button
				    >
				    <el-button type="warning" size="small"  round=""
				      >重置</el-button
				    >
				  </div>
 	  </el-header>
 	  <div class="cart">
 		<ToolBar>
 			<div>员工信息</div>
 		</ToolBar>
    <el-table 
    	:data="tableData"
    	style="width: 100%"
    	@selection-change="handleSelectionChange"
    	>
    		<el-table-column label="员工编号" align="center">
    			<template slot-scope="scope">{{ scope.row.id }}</template>
    		</el-table-column>
    		<el-table-column label="员工姓名"  align="center">
    			<template slot-scope="scope">{{ scope.row.employee.name }}</template>
    		</el-table-column>
    		<el-table-column label="部门编号"  align="center">
    			<template slot-scope="scope">{{ scope.row.employee.departmentid }}</template>
    		</el-table-column>
    		<el-table-column label="部门名称" align="center">
    			<template slot-scope="scope">{{ scope.row.employee.departmentname }}</template>
    		</el-table-column>
          <el-table-column fixed="right" label="操作" align="center">
            <div slot-scope="s">
              <el-button type="danger"  round="" size="small" @click="move(s.row.id)">调动</el-button>
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
  <Edit :showEditDialog="showEditDialog" @close="showEditDialog = false" />
  </div>
</template>

<script>
	import Edit from "./Edit.vue";
	import {selectAllEmp} from  "@/api/departmentManage";
export default {
  data() {
    return {
      searchParams: {
        title: "",
      },
      tableData: [],
	  pageNo:1,
	  pageSize:5,
	  total:0,
	  id:'', //回显
	  showEditDialog: false,
    };
  },
  
  created() {
	this.initAllEmp()
  },
  methods: {
	 initAllEmp(){
	 	
	 	selectAllEmp({pageNo:this.pageNo,pageSize:this.pageSize})
	 	.then(r=>{
	 		//获取到从后台传入的员工列表
	 		this.tableData = r.list
	 		this.total=r.total
	 	})
	 	.catch(()=>{});	
	 	
	 },
	changePage(i){
		this.pageNo=i;
		 this.initAllEmp()
	},
	handleSelectionChange(val) {
	  this.multipleSelection = val; //给定义的数组赋值
	},
	move(id) {
	  this.id = id;
	  this.showEditDialog=true;
	},
	//确定按钮，用来刷新页面
	refresh() {
	   this.initAllEmp();
	},
  },
  components: {Edit}
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