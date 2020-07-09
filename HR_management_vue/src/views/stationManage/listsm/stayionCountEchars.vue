<template>
	<div class="List">
		<el-container  >
			 <el-header style="height: 100px;">			  				  
				  <div>
						   					
				  </div>
			 </el-header>
			<el-container>			
				<el-container >
					<el-main style="height: 720px; margin: 15px;">							

							<div id="myChart" :style="{width: '100%', height: '80%'}" ></div>																										
							
												
					</el-main>					
				</el-container>		  
			</el-container>	
		</el-container  >
			
	</div>
</template>

<script>
import {stationCountEmployee} from  "@/api/ststion";
    export default {
    	  
    	  data () {
    	    return {}
    	  },
    	  mounted(){
    	   
			this.initData()
    	  },
    	  methods: {
			  
			  myEcharts(xStation,yCount) {
			       // 基于准备好的dom，初始化echarts实例
			       var myChart = this.$echarts.init(document.getElementById("myChart"));
			  		  
			       // 指定图表的配置项和数据
			       var option = {
			         title: {
			           text: "岗位人数统计"
			         },
			         tooltip: {},
					//X轴
			         xAxis: {
			           data: xStation,
					   name:'岗位',
					   //设置echarts图表x坐标名称字体大小
					   nameTextStyle :{fontSize: 20},
					   
						axisLine:{ //---坐标轴 轴线
						   symbol:['none', 'arrow'],   //---是否显示轴线箭头
					   },
					   axisLabel: {
					          show: true,
					           textStyle: {
					             color: '#000000',  //更改坐标轴文字颜色
					             fontSize : 20      //更改坐标轴文字大小
					           }
					        },
			         },
					 
			         yAxis: {
						 name:'人数',
						 nameTextStyle :{fontSize: 20},
						 axisLine:{//---坐标轴 轴线
						      symbol:['none', 'arrow'],   //---是否显示轴线箭头
						 },
						 axisLabel: {
						        show: true,
						         textStyle: {
						           color: '#000000',  //更改坐标轴文字颜色
						           fontSize : 20      //更改坐标轴文字大小
						         }
						      },
						 
						 
					 },
			         series: [
			           {
			             name: "岗位人数",
			             type: "bar",
						 data: yCount,
						 itemStyle:{                 //---图形形状
								 color:'#025532',
								 barBorderRadius:[18,18,0,0],
							 },
						
			           barWidth:'110',              //---柱形宽度
			            							   
					   label: {
						   show: true,		//开启显示
						   position: 'top',	//在上方显示
						   textStyle: {	    //数值样式
							   color: 'black',
							   fontSize: 16
						   }
					   }
							   
						   
			           
			           }
			         ]
			       };
			  		  
			       // 使用刚指定的配置项和数据显示图表。
			       myChart.setOption(option);
			     },
			     initData() {
			       stationCountEmployee()
			         .then(r => {
			           var xStation = [];
					   var yCount = [];
			           
			           r.forEach(e => {
			             xStation.push(e.name);
						 yCount.push(e.num);
			            
			           });
			           this.myEcharts(xStation,yCount);
			         })
			         .catch(() => {});
			     },
			     refresh(){
			       this.initData();
			     }
    	    
			
			
    	  },
		  
		   
    	}
</script>

<style>
	.el-header {
	    background-color: #025532;
	    color: #ffffff;
	    text-align: center;
	    line-height: 140px;
		
	  }
	   .el-main {
	     /* background: #ffffff; */
	      color: #333;
	      text-align: center;
	      line-height: 160px;
	    }
	.el-footer {
	    background-color: #025532;
	    color: #ffff00;
	    text-align: center;
	    line-height:70px;
		
	  }	
	 

	
	/* cart-footer */
	.cart-footer{
	    position: relative;
	    line-height: 50px;
	    background: #eee;
	    overflow: hidden;
	}
	.cart-footer .select-con{
	    float: left;
	    padding-left: 20px;
	}
	.cart-footer .delete-con{
	    float: left;
	   
	}
	.cart-footer .submit-con{
	    float: right;
	}
	
	.cart-footer .submit-con .submit-total,#selectGoodsCount{
	    font-size: 18px;
	    color: #c60023;
	    font-weight: bold;
	    margin-right: 30px;
	    vertical-align: middle;
	}
	 #selectGoodsCount{
	     margin-right: 5px;
	 }
	 .submit-con .submitDis {
	     background: #B0B0B0;
	     cursor: no-drop;
	 }
	.cart-footer .submit-con .btn-submit{
	    width: 80px;
	    text-align: center;
	    height: 50px;
	    line-height: 50px;
	}
</style>
