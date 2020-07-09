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
      <el-form-item label="员工编号" prop="id" >
         <el-input v-model="forms.employee.id" :disabled="true"></el-input>
       </el-form-item>
       <el-form-item label="员工姓名" prop="name" >
         <el-input v-model="forms.employee.name" :disabled="true"></el-input>
       </el-form-item>
       <el-form-item label="当前岗位名称" prop="prestationname" >
         <el-input v-model="forms.employee.stationname" :disabled="true"></el-input>
       </el-form-item>
	   <el-form-item label="新岗位名称" prop="stationid">
		 <el-select v-model="forms.stationid" placeholder="请选择">
			<el-option  v-for="st in stationTypeDate" :key="st.id" :label="st.name" :value="st.id" ></el-option>
		 </el-select>
	   </el-form-item>
		<el-form-item label="调转类型" prop="type">
			<el-select v-model="forms.type">
				<el-option label="主动申请" value="1"></el-option>
				<el-option label="被动调动" value="2"></el-option>
				<el-option label="犯错" value="0"></el-option>
		   </el-select>
		 </el-form-item>
		 <el-form-item label="调动日期" prop="date">
			<el-date-picker
			   v-model="forms.date"
			   type="date"
			   placeholder="选择日期">
			 </el-date-picker>
		 </el-form-item>
		 <el-form-item label="调转原因" prop="reason">
		    <el-input v-model="forms.reason" placeholder=""></el-input>
		  </el-form-item>
         <el-form-item label="备注" prop="remark">
           <el-input v-model="forms.remark" placeholder=""></el-input>
         </el-form-item>
       
     </el-form>
      
	
    <div slot="footer" class="dialog-footer" > 
      <el-button round="" @click="$emit('close')" size="small">取 消</el-button>
	  <el-button round="" type="danger" @click="submit" size="small">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fillerLeft,resetObject } from "@/utils/common";
import {selectByPrimaryKey,insertdepartment} from  "@/api/statransfer";
import {selectAllStation} from "@/api/ststion"
	/*  */
  export default {
	  props: {
	    title: {
	      type: String,
	      default: ""
	    },
	    dialogWidth: {
	      type: String,
	      default: "600px"
	    },
	    labelWidth: {
	      type: String,
	      default: "100px"
	    },
	    showEditDialog: Boolean
	  },
	  
    data() {
      return {
		val:[],
        forms: {
			id:'',
			name:'',
			employee:{
				name:'',
				stationname:'',
			},
		    prestationname:'',
			stationid:'',
			type:'',
			reason:'',
			remark:'', 
			date:''
        },
		
		stationTypeDate:[]
      };
    },
	created() {
		
		this.initDepartMentType()
	},
	methods:{
		
		initDepartMentType(){
			selectAllStation().then(r=>{
				
				this.stationTypeDate = r;
			})
			.catch(() => {}); 
			
		},
		
		
		openDialog() {
			//判断部门父框的id不为空，即为修改，做数据回显
				if(this.$parent.id !=null){
					
					selectByPrimaryKey({id:this.$parent.id})
					.then( r =>{
						//根据id获取信息
						this.FillerFormField(this.$parent.id,r);
						this.$parent.id=null;
						
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
			  //插入操作
			 insertdepartment(this.forms)
				  .then(r=>{
					
					 this.$message({
						 message:r.msg,
						 type:"success"
					 });
					 this.$emit("success");
				  })
				   .catch(() => {}); 
				   this.$parent.refresh();
				   //隐藏嵌套框
				   this.$parent.showEditDialog = false;
					
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