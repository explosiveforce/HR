<template>
  <div class="homepage-hero-module">

    <div class="login-container">
      <el-form  class="login-form"  auto-complete="on"
               label-position="left">
        <div class="title-container">
          <h1 class="title">人事管理系统</h1>
		  <p class="sub_head">欢迎使用夏天得吃西瓜人事管理系统。</p>
		  <p class="info">(这是一个很棒的团队！值得信任)</p><br />
		  <a @click="login">登录</a>
		  <a @click="register">注册</a>
        </div>
      </el-form>
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
  import mp4Path from "../../assets/night.mp4";
    export default {
        name: 'hello',
        data() {
            return {
                vedioCanPlay: false,
                fixStyle: '',
                PATH_TO_MP4: '',
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
			//注册
			register(){
				this.$router.push({
				  path: "/register"
				});
			},
			//登录
			login() {
			  this.$router.push({
			    path: "/login"
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
	text-align: center;
	
	.title {
			margin-top: 150px;
			text-transform: uppercase;
			font-weight: 600;
			font-family: 'proxima-nova-condensed', Helvetica;
			color: #fff;
			font-size: 35px;
	}
	.sub_head {
	      color: rgba(255,255,255,0.5);
	      font-size: 18px;
	}
	.info {
	      color: rgba(255,255,255,0.5);
	      font-size: 12px;
	    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

    .title-container a {
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
	.login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
      z-index: 9999;
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
