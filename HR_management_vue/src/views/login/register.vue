<template>
  <div class="homepage-hero-module"> 
    <div class="login-container">
      <div id="register">
        <p class="title" style="color: #EEEEEE;">注册</p>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="login-form"
        >
		<el-form-item prop="username">
		  <el-input v-model="ruleForm2.username" auto-complete="off" placeholder="请输入用户名"></el-input>
		</el-form-item>
          <el-form-item prop="email">
            <el-input v-model="ruleForm2.email" auto-complete="off" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="smscode">
			  <div style="width: 100%;display: block;float: left;position: relative">
				  <el-input v-model="ruleForm2.smscode" placeholder="验证码"></el-input>
			  </div>
            <div class="btn" style="position:absolute;right: 0;top: 7px;width: 30%;">
				<a type="primary" :disabled='isDisabled' @click="sendCode">{{buttonText}}</a>
			</div>
            
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">注册</el-button><br/>
            <p style="text-align: center;color: #FFFFFF;" @click="gotoLogin">已有账号？立即登录</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
	<div class="video-container">
	  <div :style="fixStyle" class="filter"></div>
	  <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay" muted>
	    <source :src="PATH_TO_MP4" type="video/mp4"/>
	    浏览器不支持 video 标签，建议升级浏览器。
	  </video>
	</div>
  </div>
</template>

<script>
	import { yz,zc } from "@/api/user";
	import mp4Path from "../../assets/night.mp4"
export default {
  name: "Register", 
  data() {
	  //验证用户名是否合法
	  let checkName = (rule, value, callback) => {
	    if (!value) {
	    callback(new Error('用户名不能为空!'));
	    }else if(!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{3,6}$/.test(value)){
			callback(new Error('账号必须为3-6位字母和数字组合'));
		}else {
        callback()
      }
	  }
    // <!--验证邮箱是否合法-->
    let checkEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else if (!this.checkMobile(value)) {
        callback(new Error('邮箱不合法'))
      } else {
        callback()
      }
    }
    //  <!--验证码是否为空-->
    let checkSmscode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else if(!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{3,10}$/.test(value)){
		  callback(new Error('密码必须为3-10位字母和数字组合'))
	  }else {
        callback()
      }
    }
  
    return {  
		vedioCanPlay: false,
		fixStyle: '',
		PATH_TO_MP4: '',
      ruleForm2:{
		username:"", //用户名
        pass: "",//密码
        email: "", //邮箱
        smscode: "" , //验证码
      },
      rules2: {
		username: [{ validator: checkName, trigger: 'change' },],
        pass: [{ validator: validatePass, trigger: 'change' }],
        email: [{ validator: checkEmail, trigger: 'change' }],
        smscode: [{ validator: checkSmscode, trigger: 'change' }],
      },
      buttonText: '发送验证码',
      isDisabled: false, // 是否禁止点击发送验证码按钮
      flag: true
    }
  }, 
  created() {
      window.addEventListener('hashchange', this.afterQRScan)
  
      this.PATH_TO_MP4 = mp4Path
   
  },
  methods: {
	  canplay() {
	      this.vedioCanPlay = true
	      console.log(this.vedioCanPlay);
	  },
    // <!--发送验证码-->
    sendCode () {
		yz({
				email:this.ruleForm2.email,
			})
		.then(r=>{
			console.log(r)
			this.$message({
			  type: "success",
			  message: r.msg
			});
			let time = 60
			this.buttonText = '已发送'
			this.isDisabled = true
			if (this.flag) {
			  this.flag = false;
			  let timer = setInterval(() => {
			    time--;
			    this.buttonText = time + ' 秒'
			    if (time === 0) {
			      clearInterval(timer);
			      this.buttonText = '重新获取'
			      this.isDisabled = false
			      this.flag = true;
			    }
			  }, 1000)
			}
		})
		.catch(()=>{});	
    },
    // <!--提交注册-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
			zc({
				username:this.ruleForm2.username,
				password:this.ruleForm2.pass,
				email:this.ruleForm2.email,
				yzm:this.ruleForm2.smscode
			}
			)
			.then(r => {
			  console.log(r);
			  this.$message({
			    type: "success",
			    message: r.msg
			  });
			  if(r.msg === '注册成功'){
			  	this.gotoLogin()
			  }
			})
			.catch(() => {});
          /* setTimeout(() => {
            alert('注册成功')
          }, 400); */
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    // <!--进入登录页-->
    gotoLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    // 验证邮箱
    checkMobile(str) {
      let re =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
      $route: {
          handler: function (route) {
              this.redirect = route.query && route.query.redirect
          },
          immediate: true
      }
  
  },
  
  destroyed() {
      window.removeEventListener('hashchange', this.afterQRScan)
  },
  mounted: function () {
      window.onresize = () => {
          const windowWidth = document.body.clientWidth
          const windowHeight = document.body.clientHeight
          const windowAspectRatio = windowHeight / windowWidth
          let videoWidth
          let videoHeight
          if (windowAspectRatio < 0.5625) {
              videoWidth = windowWidth
              videoHeight = videoWidth * 0.5625
              this.fixStyle = {
                  height: windowWidth * 0.5625 + 'px',
                  width: windowWidth + 'px',
                  'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
                  'margin-left': 'initial'
              }
          } else {
              videoHeight = windowHeight
              videoWidth = videoHeight / 0.5625
              this.fixStyle = {
                  height: windowHeight + 'px',
                  width: windowHeight / 0.5625 + 'px',
                  'margin-left': (windowWidth - videoWidth) / 2 + 'px',
                  'margin-bottom': 'initial'
              }
          }
      }
      window.onresize()
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $light_gray: #eee;

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 45px;
      width: 85%;


      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 45px;

      
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 9999;
    }
	.register-wrapper {
	  position: fixed;
	  top: 0;
	  right: 0;
	  left: 0;
	  bottom: 0;
	}
	.title {
	  font-size: 26px;
	  line-height: 50px;
	  font-weight: bold;
	  margin: 10px;
	  text-align: center;
	}
	#register {
	  max-width: 520px;
	  margin: 60px auto;
	  /* background: #00000020; */
	 /* padding: 20px 40px; */
	  padding: 100px 35px 15px 35px;
	  border-radius: 10px;
	  position: relative;
	  z-index: 9;
	}
	
  .homepage-hero-module,
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video {
    z-index: 0;
    position: absolute;
  }

  .video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
  }


</style>