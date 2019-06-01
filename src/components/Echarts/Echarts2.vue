<template>
	<div class="Echarts2">
		
	</div>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require("echarts/lib/component/dataset");
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require("echarts/lib/component/legendScroll");
require("echarts/lib/chart/line");
require("echarts/lib/component/axisPointer");
require("echarts/lib/component/toolbox");
export default{
	name:'Echarts2',
	data(){
		return{

		}
	},
	mounted(){
      var myChart = echarts.init(document.querySelector('.Echarts2'))
      myChart.setOption({
      	title: {
        text: '2018-2019年前六类高发疾病药物月交易额',
        textStyle:{                  //文字样式
            color:'#000',               //颜色
            fontWeight:700,            //粗细
            fontSize:30,               
            textShadowColor:'rgba(255,0,0,.2)', //文字本身的阴影颜色。
          }
    },
    tooltip : {           //提示框组件。
        trigger: 'axis',  //触发类型。
       		// 可选： 'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            //        'axis'  坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
        axisPointer: {   // 坐标轴指示器，坐标轴触发有效
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {   //  图例组件
        data:['腹痛腹泻','肺热咳嗽','高血压','胃炎','缺钙','计生医用'],
        right:25,
        top:70,
        // orient:'vertica'  图例列表的布局朝向。可选：'horizontal'    'vertical'
        itemWidth:30,           // 图例的宽度
        itemHeight:20,          // 图例的高度
        textStyle:{
          fontSize:16
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '1%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // xAxis : [
    //     {
    //         type : 'category',
    //         boundaryGap : false,
    //         data : ['2018年11月','2018年12月','2019年1月','2019年2月','2019年3月','2019年4月','2019年5月']
    //     }
    // ],
        xAxis : [    // grid 中的 x 轴
        {   
            type : 'category',   //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据
            boundaryGap : false,
            data : [
            {
                value: '2018年11月',
                textStyle: {
                    fontSize: 16,
                }
            }, 
            {
                value: '2018年12月',
                textStyle: {
                    fontSize: 16,
                }
            },
            { 
                value: '2019年1月',
                textStyle: {
                    fontSize: 16,
                }
            }, 
            {
                value: '2019年2月',
                textStyle: {
                    fontSize: 16,
                }
            }, 
            {
                value: '2019年3月',
                textStyle: {
                    fontSize: 16,
                }
            }, 
            {
                value: '2019年4月',
                textStyle: {
                    fontSize: 16,
                }
            },
            {
                value: '2019年5月',
                textStyle: {
                    fontSize: 16,
                }
            },]
        }
    ],
    yAxis : [     // grid 中的 Y 轴
        {
        	name:'单位(千元)',
        	// category
            type : 'value',
            nameTextStyle:{
                fontSize: 16,
            }
        },
    ],
    series : [
        {
            name:'腹痛腹泻',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data:[253, 412, 401, 412, 456, 313, 310]
        },
        {
            name:'肺热咳嗽',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data:[420, 482, 491, 434, 490, 530, 523]
        },
        {
            name:'高血压',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data:[285, 325, 381, 354, 290, 430, 510]
        },
        {
            name:'胃炎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'缺钙',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[720, 832, 801, 834, 1190, 1230, 1220]
        },
        {
        	name:'计生医用',
            type:'line',
            stack: '总量',
             label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[972, 932, 921, 934, 1090, 1030, 920]
        }
    	],
	grid: {    //  直角坐标系内绘图网格
        top:150,   
        left: '3%',
        right: '4.5%',
        bottom: '3%',
        containLabel: true
    }, 
  		})
	}
}
</script>
<style scoped>
.Echarts2{
  margin:2% 0% 2% 2%;
  width: 48%;
  height: 600px;
  float: right;
  /*background-color: red;*/
}
</style>