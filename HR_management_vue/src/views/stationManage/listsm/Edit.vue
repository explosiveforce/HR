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
       <el-form-item label="岗位编号" prop="id">
         <el-input v-model="forms.id" placeholder="" ></el-input>
       </el-form-item>
     
       <el-form-item label="岗位名称" prop="name">
         <el-input v-model="forms.name" placeholder=""></el-input>
       </el-form-item>
       <el-form-item label="岗位类型" prop="type">
         <el-input  v-model="forms.type" placeholder=""></el-input>
       </el-form-item>
	   <el-form-item label="岗位人数" prop="number" >
	     <el-input v-model="forms.number" placeholder="" :disabled="true"></el-input>
	   </el-form-item>
     </el-form>
      
	
   <div slot="footer" class="dialog-footer" >
     <el-button @click="$emit('close')" size="small">取 消</el-button>
     <el-button type="warning" @click="submit" size="small">修改</el-button>
     <el-button type="success" @click="add" size="small">新增</el-button>
   
   </div>
  </el-dialog>
</template>

<script>
import {Required,FillerFieldRules,Boolean} from "@/utils/validateRules";
import { fillerLeft,resetObject } from "@/utils/common";
import{queryStationInfoById,updateStation,addStation} from "@/api/ststion"

  export default {
	  props: {
	    title: {
	      type: String,
	      default: "新建/修改岗位"
	    },
	    dialogWidth: {
	      type: String,
	      default: "600px"
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
          id: '',
          name: '',
          type: '',
          number: '',
        },
		
		rules: {
		  ...FillerFieldRules(["id", "name","type"], Required),     
				telephone:[Required,Boolean],
		},
       
      };
    },
	created() {
		
	},
	methods:{
	
		openDialog() {
			//判断父框的id不为空，即为修改，做数据回显			
				//修改信息--回显
				if(this.$parent.$parent.id !=null){
					
					queryStationInfoById({id:this.$parent.$parent.id})
					.then( r =>{
						//根据id获取信息
						this.FillerFormField(this.$parent.$parent.id,r);
						this.$parent.$parent.id=null;
						
					})
					.catch(()=>{});
				}
				else{
					
					//重置嵌套框
					resetObject(this.forms);
					this.$set(this.forms, "id", null);
					this.$refs.editForms.resetFields();
					
				}
			
		  
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
			 updateStation(this.forms)
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
		
		//新增岗位
		add(){
			
			this.$refs.editForms.validate(valid => {
			  if (valid) {
			    this.$message({
			      message: "字段验证通过，提交请求，成功后刷新分页！",
			      type: "success"
			    });							 
				  addStation(this.forms)
				  .then(r=>{
						 this.$message({
							 message:r.msg,
							 type:"success"
						 });
						 //通知列表分页刷新
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