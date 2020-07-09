<template>
  <div class="cart">
	  <ToolBar>
	  	<div>
	  		员工详细信息
	  	</div>
	  </ToolBar>
    <el-table 
	:data="tableData"
	border
	style="width: 100%"
	
	>
	  <el-table-column  align="center" label="编号">
		  <template slot-scope="scope">{{ scope.row.id }}</template>
	  </el-table-column>
      <el-table-column   align="center" label="姓名"><template slot-scope="scope">{{ scope.row.name }}</template></el-table-column>
      <el-table-column  align="center" label="性别"><template slot-scope="scope">{{ scope.row.sex }}</template></el-table-column>
      <el-table-column   align="center" label="出生日期"><template slot-scope="scope">{{ scope.row.birth }}</template></el-table-column>
	  <el-table-column  align="center" label="身份证号码"><template slot-scope="scope">{{ scope.row.idcard }}</template></el-table-column>
	  <el-table-column   align="center" label="部门"><template slot-scope="scope">{{ scope.row.departmentame }}</template></el-table-column>
	  <el-table-column  align="center" label="岗位"><template slot-scope="scope">{{ scope.row.stationname }}</template></el-table-column>
	  <el-table-column   align="center" label="入职日期"><template slot-scope="scope">{{ scope.row.employdate }}</template></el-table-column>
	  <el-table-column   align="center" label="参加工作日期"><template slot-scope="scope">{{ scope.row.workdate }}</template></el-table-column>
	  <el-table-column   align="center" label="用工形式"><template slot-scope="scope">{{ scope.row.form }}</template></el-table-column>
	  <el-table-column   align="center" label="人员来源"><template slot-scope="scope">{{ scope.row.source }}</template></el-table-column>
	  <el-table-column   align="center" label="政治面貌"><template slot-scope="scope">{{ scope.row.politics }}</template></el-table-column>
	  <el-table-column   align="center" label="民族"><template slot-scope="scope">{{ scope.row.folk }}</template></el-table-column>
	  <el-table-column   align="center" label="联系电话"><template slot-scope="scope">{{ scope.row.phone }}</template></el-table-column>
	  <el-table-column   align="center" label="电子邮箱"><template slot-scope="scope">{{ scope.row.email }}</template></el-table-column>
	  <el-table-column   align="center" label="身高"><template slot-scope="scope">{{ scope.row.height }}</template></el-table-column>
	  <el-table-column   align="center" label="血型"><template slot-scope="scope">{{ scope.row.blood }}</template></el-table-column>
	  <el-table-column   align="center" label="婚姻状况"><template slot-scope="scope">{{ scope.row.status }}</template></el-table-column>
	  <el-table-column   align="center" label="籍贯"><template slot-scope="scope">{{ scope.row.nation }}</template></el-table-column>
	  <el-table-column   align="center" label="出生地址"><template slot-scope="scope">{{ scope.row.homeplace }}</template></el-table-column>
	  <el-table-column   align="center" label="最高学历"><template slot-scope="scope">{{ scope.row.eduBack }}</template></el-table-column>
	  <el-table-column   align="center" label="最高学位"><template slot-scope="scope">{{ scope.row.eduDegree }}</template></el-table-column>
	  <el-table-column   align="center" label="毕业学院"><template slot-scope="scope">{{ scope.row.graSchool }}</template></el-table-column>
	  <el-table-column   align="center" label="所学专业"><template slot-scope="scope">{{ scope.row.speciality }}</template></el-table-column>
	  <el-table-column   align="center" label="毕业日期"><template slot-scope="scope">{{ scope.row.gradate }}</template></el-table-column>
    </el-table>
  </div>
</template>

<script>
	
import {queryEmpInfoById} from  "@/api/empManage";	
export default {
  data() {
    return {
      searchParams: {
        title: "",
      },
      tableData:[],
	
    };
  },
  
  created() {
	  
	  this.initForms()
	
  },
  methods: {
			
			initForms(){
				
				queryEmpInfoById({id:this.$route.query.empId})
				.then(r=>{
					
					//后端传入的是一个对象，前端不能直接用数组接收，直接使用会导致数据格式匹配错误
					let tableData=[];
					//在空数组中直接加入r(对象)
					tableData.push(r);			
					this.tableData=tableData;
					})
				.catch(()=>{});
			}
	  
	  
	
  },
  components: {}
};
</script>
<style>
.cart {
  margin: 50px auto;
}
.el-header {
	    color: #333333;
	    text-align: center;
	    line-height: 140px;
	  }
</style>
