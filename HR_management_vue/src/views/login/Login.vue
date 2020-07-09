<template>
  <div class="homepage-hero-module">

    <div class="login-container">
      <div class="login">
		  <el-form ref="loginForm" :model="loginForm" :rules='rules' class="login-form" auto-complete="on"
		           label-position="left">
		    <div class="title-container">
		      <h3 class="title">管理员登录</h3>
		    </div>
		    <el-form-item label="账号" prop="username" >
		      <el-input v-model="loginForm.username"></el-input>
		    </el-form-item>
		    <el-form-item label="密码" prop="password">
		    		  <!-- show-password显示密码 -->
		       <el-input v-model="loginForm.password" show-password></el-input>
		    </el-form-item>	
		    <a @click="clicklogin('loginForm')">登录</a>
		    <a @click="reset('loginForm')">重置</a>
		  		<a @click="register()">还没有账号？点击这里注册</a>
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
    import mp4Path from "../../assets/night.mp4"
	import { setToken, setUserInfo } from "@/utils/common";
	import { login } from "@/api/user";
    export default {
        name: 'login',
        data() {
            return {
                vedioCanPlay: false,
                fixStyle: '',
                PATH_TO_MP4: '',
                loginForm: {
                    username: '',
                    password: ''
                },
				rules:{
					username:[
						 { required: true, message: '请输入用户名', trigger: 'blur' }	,
						 { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
					],
					password:[
						{ required: true, message: '请输入密码', trigger: 'blur'},
						{min:3,max:10,message:'密码长度在3到10个字符',trigger:'blur'}
					]
				}
            }
        },
        watch: {
            $route: {
                handler: function (route) {
                    this.redirect = route.query && route.query.redirect
                },
                immediate: true
            }

        },
        created() {
            window.addEventListener('hashchange', this.afterQRScan)

            this.PATH_TO_MP4 = mp4Path
         
        },
        destroyed() {
            window.removeEventListener('hashchange', this.afterQRScan)
        },
        methods: {
            canplay() {
                this.vedioCanPlay = true
                console.log(this.vedioCanPlay);
            },
           clicklogin(loginForm) {
                 this.$refs[loginForm].validate(valid => {
                   if (valid) {
                     login({
                       username: this.loginForm.username,
                       password: this.loginForm.password
                     })
                       .then(r => {
                         console.log(r);
                         if (r.code === 200) {
                           setUserInfo(r.data.user);
                           setToken(r.data.token);
                           this.$router.push("/");
                         } else {
                           this.$message({
							message: "用户名或密码错误！",
							type: "success"
						  });
                         }
                       })
                       .catch(() => {});
                   } else {
                     console.log("error submit!!");
                     return false;
                   }
                 });
               },
           reset(loginForm){
           	  this.$refs[loginForm].resetFields();	  
           },
           //注册
           register(){
           	this.$router.push({
           	  path: "/register"
           	});
           },
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
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $light_gray: #eee;

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;


      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: #fff !important;
        }
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

    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      padding: 100px 35px 15px 35px;
      margin: 120px auto;
      z-index: 9999;
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;

      &_login {
        font-size: 20px;
      }
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

  }
	 .login-form a {
	  border: 2px solid rgba(255,255,255,0.20);
	  border-radius: 61px;
	  font-size: 12px;
	  color: #FFFFFF;
	  letter-spacing: 1px;
	  text-decoration: none;
	  text-transform: uppercase;
	  padding: 10px 25px;
	  display: inline-block;
	  margin-right: 15px;
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
