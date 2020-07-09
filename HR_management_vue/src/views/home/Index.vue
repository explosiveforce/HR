<template>
  <div>
    <el-card style="border-radius: 0">
      <div>
		<el-carousel height="290px">
		    <el-carousel-item v-for="item in pp" :key="item.index">
		       <p style="text-align: center;">{{ item.no }}</p>
		</el-carousel-item>
		   </el-carousel>
	  </div>
    </el-card>
    <br />
    <el-card style="border-radius: 0">
      <div slot="header" style="text-align: center;">
        <h2><span>欢迎进入西瓜组人事管理系统平台v1.0.0</span></h2>
      </div>

      
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
		pp:[
			{no:'富强民主'},
			{no:'文明和谐'},
			{no:'自由平等'},
			{no:'公正法治'},
			{no:'爱国敬业'},
			{no:'诚信友善'}
		],
    };
  },
  
  mounted: function() {}
};
</script>
<style>
.el-carousel__item p {
    color: #003;
    font-size: 150px;
    opacity: 0.75;
    line-height: 150px;
	margin:40px;
	
  }
   .el-carousel__item:nth-child(2n) {
       background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
       background-color: #d3dce6;
    }
</style>
