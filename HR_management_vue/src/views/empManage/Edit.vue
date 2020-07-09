<!-- 新增部门 -->
<template>
  <el-dialog
    @opened="openDialog"
    :width="dialogWidth"
    :title="title"
    :visible.sync="showEditDialog"
    :show-close="false"
    :close-on-click-modal="false"
  >
    
     <el-form
       :model="forms"
       :rules="rules"
       ref="editForms"
       class="edit-forms"
       label-position="left"
       :label-width="labelWidth"
     >
      <el-form-item label="员工编号" prop="id">
         <el-input v-model="forms.id"  :disabled="true"></el-input>
       </el-form-item>
     
       <el-form-item label="员工姓名" prop="name">
         <el-input v-model="forms.name" placeholder=""></el-input>
       </el-form-item>
	   <el-form-item label="电子邮箱" prop="email">
	     <el-input v-model="forms.email" placeholder=""></el-input>
	   </el-form-item>
	   <el-form-item label="联系电话" prop="phone">
	     <el-input v-model="forms.phone" placeholder=""></el-input>
	   </el-form-item>
	   <el-form-item label="身份证号" prop="idcard">
	     <el-input v-model="forms.idcard" ></el-input>		 
	   </el-form-item>
       <el-form-item label="所在部门" prop="departmentname">
         <el-input  v-model="forms.departmentname" :disabled="true"></el-input>
       </el-form-item>
	  <el-form-item label="所属岗位" prop="stationname">
	     <el-input v-model="forms.stationname" :disabled="true"></el-input>
	   </el-form-item>
		<el-form-item label="是否在职" prop="tag">
		  <el-input v-model="forms.tag" :disabled="true"></el-input>
		</el-form-item>
		<el-form-item label="入职时间" >
		
			    <el-date-picker
			      v-model="forms.employdate"
			      type="date"
			      placeholder="选择日期" :disabled="true">
			    </el-date-picker>
			 
		</el-form-item>
		
        
       
     </el-form>
      
	
    <div slot="footer" class="dialog-footer" > 
      <el-button @click="$emit('close')" size="small">取 消</el-button>
	  <el-button type="warning" @click="submit" size="small">修改</el-button>  
    </div>
  </el-dialog>
</template>

<script>
import { fillerLeft/* ,resetObject */ } from "@/utils/common";
/* import {Required,FillerFieldRules,Boolean} from "@/utils/validateRules"; */
import {queryEmpInfoById,updateByPrimaryKeySelective} from  "@/api/empManage";	
	/*  */
  export default {
	  props: {
	    title: {
	      type: String,
	      default: ""
	    },
	    dialogWidth: {
	      type: String,
	      default: "700px"
	    },
	    labelWidth: {
	      type: String,
	      default: "120px"
	    },
	    showEditDialog: Boolean
	  },
	  
    data() {
      return {
        forms: {
          id:'',
          name: '',
		  email:'',
		  phone:'',
		  idcard:'',
          departmentname: '',
          stationname: '',
          tag: '',
          employdate: '',
         
        },
		
		rules: {
		/*  ...FillerFieldRules([ "name"], Required),     
				telephone:[Required,Boolean],	  */
		},
      
      };
    },
	
	methods:{
		openDialog() {
			
			//通过员工id查询员工详情信息（回显）
			queryEmpInfoById({id:this.$parent.$parent.id})
			.then( r =>{
				//根据id获取信息
				this.FillerFormField(this.$parent.$parent.id,r);
				this.$parent.$parent.id=null;
				
			})
			.catch(()=>{});
						  
		},
		
		//修改提交
		submit() {						
		 this.$refs.editForms.validate(valid => {
		    if (valid) {
		      this.$message({
		        message: "字段验证通过，提交请求，成功后刷新分页！",
		        type: "success"
		      });
		      //this.$emit("success"); //通知列表分页刷新
			  //修改操作
			 updateByPrimaryKeySelective(this.forms)
				  .then(r=>{
					 this.$message({
						 message:r.msg,
						 type:"success"
					 });
					 this.$emit("success");
				  })
				   .catch(() => {}); 
				   //隐藏嵌套框
				   this.showEditDialog=false;	   
		    } else {
		      this.$message({
		        message: "请按照提示正确填写内容！",
		        type: "warning"
		      });
		      return false;
		    }
		  });
		},
				
		FillerFormField(id, data) {
		  //可以外部填充回写做编辑用，也可以请求详情接口填充表单
		  this.$set(this.forms, "id", id);
		  fillerLeft(this.forms, data);
		},
	}
  };
</script>