<template>
  <div>
  	  <el-header style="height: 130px; ">
  		  <div>
  		  	<el-date-picker
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
				<el-button type="success">查询</el-button>
  		  </div>
  	  </el-header>
	   <div class="cart">
		   <ToolBar>
		   	<div>部门调动信息</div>
		   </ToolBar>
    <el-table
      :data="tableData"
	  border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
	<el-table-column label="编号" align="center">
		<template slot-scope="scope">{{ scope.row.id }}</template>
	</el-table-column>
	<el-table-column label="原部门名称" align="center">
		<template slot-scope="scope">{{ scope.row.predepartment }}</template>
	</el-table-column>
	<el-table-column label="新部门名称"  align="center">
		<template slot-scope="scope">{{ scope.row.department }}</template>
	</el-table-column>
	<el-table-column label="姓名"  align="center">
		<template slot-scope="scope">{{ scope.row.name }}</template>
	</el-table-column>
	<el-table-column label="性别"  align="center">
		<template slot-scope="scope">{{ scope.row.sex }}</template>
	</el-table-column>
	<el-table-column label="调动日期"  align="center">
		<template slot-scope="scope">{{ scope.row.date | formatTimeToStr }}</template>
	</el-table-column>
	<el-table-column label="调动原因"  align="center">
		<template slot-scope="scope">{{ scope.row.reason }}</template>
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
import {formatTimeToStr} from "@/config/date"; 
export default {
	filters:{
	        formatTimeToStr:function(time){
	
	            return formatTimeToStr(time);
	        },
	 },
  data() {
    return {
      multipleSelection: [], //存放已选择的数据
	  searchParams: {
	    title: "",
	  },
      //表格中的数据
      tableData: [],
	  pageNo:1,
	  pageSize:3,
	  total:0,
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
	          value:''
    };
  },
  created(){
	  this.initAllStation()
  },
  methods: {
	  
	  changePage(i){
	  	this.pageNo=i;
	  	this.initAllStation()
	  },
	  initAllStation(){
	  	
	  },
	  
    // 点击发生的变化
    handleSelectionChange(val) {
      this.multipleSelection = val; //给定义的数组赋值
    },
	selectemp(){
		this.$router.push({name:'stationemp'})
	}
  },
  // 通过computed计算属性及时改变
  computed: {
   
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