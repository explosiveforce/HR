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
    <el-table
      :data="tableData"
	  border
      style="width: 100%"
	  show-summary
	  :summary-method="getSummaries"
      @selection-change="handleSelectionChange"
    >
	<el-table-column label="部门名称" align="center">
		<template slot-scope="scope">{{ scope.row.departmentName }}</template>
	</el-table-column>
	<el-table-column label="人数统计" align="center">
		<el-table-column label="月初人数" align="center">
			<template slot-scope="scope">{{ scope.row.firstnum }}</template>
		</el-table-column>
		<el-table-column label="月末人数" align="center">
			<template slot-scope="scope">{{ scope.row.twonum }}</template>
		</el-table-column>
		<el-table-column label="本月新入职" align="center">
			<template slot-scope="scope">{{ scope.row.sex }}</template>
		</el-table-column>
		<el-table-column label="本月离职" align="center">
			<template slot-scope="scope">{{ scope.row.stationName }}</template>
		</el-table-column>
		<el-table-column label="本月调入" align="center">
			<template slot-scope="scope">{{ scope.row.name }}</template>
		</el-table-column>
		<el-table-column label="本月调出" align="center">
			<template slot-scope="scope">{{ scope.row.out }}</template>
		</el-table-column>
	</el-table-column>
	
	<el-table-column label="学历统计" align="center">
		<el-table-column label="研究生" align="center">
			<template slot-scope="scope">{{ scope.row.one }}</template>
		</el-table-column>
		<el-table-column label="本科" align="center">
			<template slot-scope="scope">{{ scope.row.two }}</template>
		</el-table-column>
		<el-table-column label="大专" align="center">
			<template slot-scope="scope">{{ scope.row.three }}</template>
		</el-table-column>
		<el-table-column label="高中及以下" align="center">
			<template slot-scope="scope">{{ scope.row.kk }}</template>
		</el-table-column>
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
      tableData: [{
		  departmentName:"不知道",
		  firstnum:10,
		  twonum:10,
		  sex:10,
		  stationName:10,
		  name:10,
		  out:10,
		  one:10,
		  two:10,
		  three:10,
		  kk:10,
	  }],
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
	},
	getSummaries(param) {
	        const { columns, data } = param;
	        const sums = [];
	        columns.forEach((column, index) => {
	          if (index === 0) {
	            sums[index] = '总计';
	            return;
	          }
	          const values = data.map(item => Number(item[column.property]));
	          if (!values.every(value => isNaN(value))) {
	            sums[index] = values.reduce((prev, curr) => {
	              const value = Number(curr);
	              if (!isNaN(value)) {
	                return prev + curr;
	              } else {
	                return prev;
	              }
	            }, 0);
	            sums[index] += ' 元';
	          } else {
	            sums[index] = 'N/A';
	          }
	        });
	
	        return sums;
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