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
       ref="editForms"
       class="edit-forms"
       label-position="left"
       :label-width="labelWidth"
     >
      <el-form-item label="员工编号" prop="id">
         <el-input v-model="forms.id" :disabled="true"></el-input>
       </el-form-item>
       <el-form-item label="试用期结束时间" prop="endtime">
		   <el-date-picker
		     v-model="forms.endtime"
		     type="date"
		     placeholder="选择日期">
		   </el-date-picker>
       </el-form-item>
     </el-form>
      
	
    <div slot="footer" class="dialog-footer" > 
      <el-button @click="$emit('close')" size="small" round>取 消</el-button>
	  <el-button type="warning" @click="submit" size="small" round>修改</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fillerLeft } from "@/utils/common";
import {queryTrybyid,updateByPrimaryKeySelective} from "@/api/tryManage";
	/*  */
  export default {
	  props: {
	    title: {
	      type: String,
	      default: ""
	    },
	    dialogWidth: {
	      type: String,
	      default: "500px"
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
		  endtime: '', //试用期结束时间
        },
      };
    },
	
	methods:{
		openDialog() {
			//通过员工id查询员工详情信息（回显）
			queryTrybyid({id:this.$parent.id})
				.then( r =>{
					//根据id获取信息
					this.FillerFormField(this.$parent.id,r);
				})
				.catch(()=>{});
		},
		//修改提交
		submit() {						
		 this.$refs.editForms.validate(valid => {
		    if (valid) {
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