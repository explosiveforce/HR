<template>
	<div class="empManage">
		<el-container  >
			 <el-header style="height: 100px; ">			  				  
				
			 </el-header>
			<el-container  >			
			
					<el-main style="height: 720px;">							
						<ToolBar>
							<div class="main-top" >
								 
									<el-breadcrumb-item>员工注入</el-breadcrumb-item>			   
							</div> 
							<div>	
							  
							  <el-button type="primary" size="small" @click="exportTable">本地导出表格</el-button>
							</div>
						</ToolBar>
						
						<div class="formscss">
							<div class="margin">
									<el-form  :model="ruleForm" ref="ruleForm" class="demo-form-inline" size="small" :inline="true" label-position="left"  >
								
									<div  >
										<el-form-item label="编号" prop="id" required>
										  <el-input v-model="ruleForm.id"></el-input>
										</el-form-item>
										<el-form-item label="姓名" prop="name" required>
										  <el-input v-model="ruleForm.name"></el-input>
										</el-form-item>
										
										<el-form-item label="生日">
											<el-col :span="11">
											  <el-form-item prop="birth">
												<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birth"></el-date-picker>
											  </el-form-item>
											</el-col>
										  </el-form-item>
										
										<el-form-item label="电子邮箱" prop="email" >
										  <el-input v-model="ruleForm.email"></el-input>
										</el-form-item>
									</div>
									
									
									
								  <div>
									  
									  <el-form-item label="性别" prop="sex" required >
											<el-select v-model="ruleForm.sex" placeholder="请选择你的性别" >
											  <el-option label="男" value="1"></el-option>
											  <el-option label="女" value="0"></el-option>
											</el-select>
									  </el-form-item>
									  
									  <el-form-item label="民族" prop="folk" required >
									  	 <el-input v-model="ruleForm.folk"></el-input>
									  </el-form-item>
									  
								  </div>
								  
								  <div>
									 
									  <el-form-item label="联系电话" prop="phone" required>
										<el-input v-model="ruleForm.phone"></el-input>
									  </el-form-item>
																 
									  <el-form-item label="身高" prop="height" >
										<el-input v-model="ruleForm.height"></el-input>
									  </el-form-item>
									  <el-form-item label="政治面貌" prop="politics" required>
										  <el-select v-model="ruleForm.politics" placeholder="请选择">
											<el-option label="党员" value="党员"></el-option>
											<el-option label="预备党员" value="预备党员"></el-option>
										  </el-select>
									  </el-form-item>
									  
								  </div>
										<el-form-item label="婚姻状况" prop="status" >
												  <el-select v-model="ruleForm.status" placeholder="请选择">
													<el-option label="未婚" value="未婚"></el-option>
													<el-option label="已婚" value="已婚"></el-option>
												  </el-select>
										</el-form-item>
										<el-form-item label="籍贯" prop="nation" >
										  <el-input v-model="ruleForm.nation"></el-input>
										</el-form-item>
										<el-form-item label="部门" prop="departmentid" required>
											 
											 <el-select v-model="ruleForm.departmentid" placeholder="请选择">
													<el-option  v-for="dt in departmentTypeDate" :key="dt.id" :label="dt.name" :value="dt.id" ></el-option>
											 </el-select>
										</el-form-item>
										<el-form-item label="岗位" prop="stationid" required>
											 
											 <el-select v-model="ruleForm.stationid" placeholder="请选择">
													<el-option  v-for="st in stationTypeDate" :key="st.id" :label="st.name" :value="st.id" ></el-option>
											 </el-select>
										</el-form-item>
										
								  <div>
									  
								  </div>
								  
								  <div>
									  <!-- <el-form-item label="岗位" prop="stationName" required>
									  		  <el-input v-model="ruleForm.stationName"></el-input>
									  </el-form-item> -->
									  <el-form-item label="入职日期" >
									    <el-col :span="11">
									  	<el-form-item prop="employdate">
									  	  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.employdate"></el-date-picker>
									  	</el-form-item>
									    </el-col>
									  </el-form-item>
									  
									<el-form-item label="参加工作日期">
										<el-col :span="11">
										  <el-form-item prop="workdate">
											<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.workdate"></el-date-picker>
										  </el-form-item>
										</el-col>
									  </el-form-item>
								  </div>
								  <div>
									  <el-form-item label="用工形式" prop="form" required>
												  <el-select v-model="ruleForm.form" placeholder="请选择">
													<el-option label="临时员工" value="0"></el-option>
													<el-option label="正式员工" value="1"></el-option>
												  </el-select>
										  </el-form-item>
										  <el-form-item label="人员来源" prop="source">
												  <el-select v-model="ruleForm.source" placeholder="请选择">
													<el-option label="校园招聘" value="校园招聘"></el-option>
													<el-option label="其他" value="其他"></el-option>
												  </el-select>
										  </el-form-item>
										  <el-form-item label="最高学历" prop="eduBack" required>
												  <el-select v-model="ruleForm.eduBack" placeholder="请选择">
													<el-option label="本科" value="本科"></el-option>
													<el-option label="大专" value="大专"></el-option>
												  </el-select>
										  </el-form-item>
								  </div>
								  
								  <div>
									  
									  
									  <el-form-item label="毕业学院" prop="graSchool" >
										<el-input v-model="ruleForm.graSchool"></el-input>
									  </el-form-item>
									  <el-form-item label="所学专业" prop="speciality">
										<el-input v-model="ruleForm.speciality"></el-input>
									  </el-form-item>
									  <el-form-item label="毕业日期">
										  <el-col :span="11">
											<el-form-item prop="gradate">
											  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.gradate"></el-date-picker>
											</el-form-item>
										  </el-col>
										</el-form-item>
									 
								  </div>								  
								 <el-form-item>								
								<el-button type="primary" @click="submitForm()">提交</el-button>
									<el-button @click="resetForm('ruleForm')">重置</el-button>
								  </el-form-item>
									
								</el-form>
										
							</div>	
						</div>
							
					</el-main>					
				</el-container>		  
			
		</el-container  >
	</div>
</template>

<script>
	
import {departmentList} from  "@/api/departmentManage";
import {selectAllStation} from "@/api/ststion"
import {formatTimeToStr} from "@/config/date"; 
import {tag} from "@/config/tag"; 
//导出列表
import { exportCvsTable } from "@/utils/cvs";
import {insertSelective} from "@/api/empManage"
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
			
			//将从后台查询的部门类型装入departmentTypeDate
			departmentTypeDate:[],
			stationTypeDate:[],
			
			ruleForm: {
					  name: '',
					  sex: '',
					  date:'',
					  birth: "",
					  departmentid:'',
					  stationid:'',
					  departmentname: "",
					  stationName: '',
					  employdate: '',
					  workdate: '',
					  form: '',
					  source: '',
					  politics: '',
					  folk: '',
					  phone: '',
					  email: '',
					  height: '',
					  blood: '',
					  status: '',
					  nation: '',
					  homeplace: '',
					  eduBack: '',
					  eduDegree: '',
					  graSchool: '',
					  speciality: '',
					  gradate: '',
			 },

	      }
	    },
		
		created(){
			this.initDepartMentType()			
		},
		
		
		methods:{
			
			initDepartMentType(){
				//显示部门类型列表
				departmentList().then(r =>{
					 this.departmentTypeDate = r;
				})
				.catch(() => {}); 
				
				selectAllStation().then(r=>{
					
					this.stationTypeDate = r;
				})
				.catch(() => {}); 
				
			},
			
			submitForm(){
				
				this.$refs.ruleForm.validate(valid => {
				  if (valid) {
				    this.$message({
				      message: "字段验证通过，提交请求，成功后刷新分页！",
				      type: "success"
				    });
				   
					 insertSelective(this.ruleForm)
						  .then(r=>{
							 this.$message({
								 message:r.msg,
								 type:"success"
							 });
							 this.$emit("success");
						  })
						   .catch(() => {}); 
						   //隐藏嵌套框
						   
				  } else {
				    this.$message({
				      message: "请按照提示正确填写内容！",
				      type: "warning"
				    });
				    return false;
				  }
				});
				
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
		  margin: -12px;
		  padding-top: 15px;
	      
	    }
		.formscss{
			 background: #fff;
		}
		.margin{
			padding-top: 30px;
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
