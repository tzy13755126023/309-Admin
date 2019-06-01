<template>
	<div class="ECharts1">
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
require("echarts/lib/component/axisPointer");
require("echarts/lib/component/markLine");
export default{
   name:'Echarts1',
   data(){
   	 return{

   	 }
   },
   mounted(){
      var myChart = echarts.init(document.querySelector('.ECharts1'))
      myChart.setOption({
        title: {
          text: '2018-2019年各类药物月交易额',
          textStyle:{                  //文字样式
            color:'#000',               //颜色
            fontWeight:700,            //粗细
            fontSize:30,               
            // textBorderColor:'black',  //文字本身的描边颜色。
            textShadowColor:'rgba(255,0,0,.2)', //文字本身的阴影颜色。
            // textShadowBlur :5,      //文字本身的阴影长度。
            // textShadowOffsetX:8,     //文字本身的阴影 X 偏移。
            // textShadowOffsetY:5,      //文字本身的阴影 Y 偏移。
          }
         },
        tooltip : {                 //提示框组件。
        trigger: 'axis',           //触发类型。
           // 可选： 'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
           //        'axis'  坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {   //  图例组件
        data:['中西药品','养生保健','医疗器械','计生用品','中药饮品','美容护肤'],
        right:25,
        top:70,
        // orient:'vertica'  图例列表的布局朝向。可选：'horizontal'    'vertical'
        itemWidth:30,           // 图例的宽度
        itemHeight:20,          // 图例的高度
        textStyle:{
          fontSize:16
        }
    },
    grid: {    //  直角坐标系内绘图网格
        top:150,   
        left: '3%',
        right: '4.5%',
        bottom: '3%',
        containLabel: true
    }, 
    xAxis : [    // grid 中的 x 轴
        {   
            type : 'category',   //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据
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
            name:'中西药品',
            type:'bar',
            data:[260, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'养生保健',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'医疗器械',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'计生用品',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410],
        },
        {
            name:'中药饮品',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'美容护肤',
            type:'bar',
            barWidth : 5,
            stack: '中药饮品',
            data:[620, 732, 701, 734, 1090, 1130, 1120],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
    ]
    });
    },

}
</script>
<style scoped>
.ECharts1{
  margin:2% 0;
  width: 50%;
  height: 600px;
  float: left;
  /*background-color: red;*/
}
</style>