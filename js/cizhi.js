draw_cizhi()
function draw_cizhi() {
  var getWidth = function getWidth(){
        var wth = document.body.offsetWidth;
    return wth/1920*12;

    };
  // alert();
// $('#Content-TOP-RIGHT-DOWN').empty(); 
d3.csv("data/chi_zao_kuang_ci/chi_zao.csv",function(csvdata_chi_zao){
    d3.csv("data/chi_zao_kuang_ci/kuang.csv",function(csvdata_kuang){
        d3.csv("data/chi_zao_kuang_ci/ci.csv",function(csvdata_ci){
         
var biaozhi=2;
d3.select("#Content-cizhi").remove()
d3.select("#Content-TOP-RIGHT2").append("div").attr("id","Content-cizhi")
var Chart_cizhi = echarts.init(document.getElementById('Content-cizhi'),'dark');
var name_chi_zao=[];
var name_chi_zao_name=[];
var name_chi_kuang=[];
var name_chi_kuang_name=[];

var name_chi_ci=[];
var name_chi_ci_name=[];
var cizhi=["2017-11-27 14:20:46","2017-11-27 17:36:33","2017-11-27 15:33:37"];



for(var i=0;i<csvdata_ci.length;i++){
  for(var j=0;j<zong[nl].length;j++){
    if(zong[nl][j]==csvdata_ci[i].yuangong){
      name_chi_ci.push(csvdata_ci[i].count);
      name_chi_ci_name.push(csvdata_ci[i].yuangong);
    }
  }
}
//name_chi_ci.reverse(); 
//name_chi_ci_name.reverse(); 



var option_zao;
if(name_chi_ci_name.length==0)
{
  option_zao={
   backgroundColor:'rgba(128, 128, 128, 0.1)',
  title: {
            text: '无人辞职',
             left: 'center',
            bottom:'center',
         textStyle: {
            fontSize: getWidth()*3 ,
            color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:20,
         }
         },
  }
}
else{
       var data_name=["财务","人力","研发"];
  option_zao = {
  //backgroundColor:'rgba(128, 128, 128, 0.1)',
  title: {
            text: data_name[nl]+'部门十一月份辞职员工',
             left: 'center',
            bottom:"5%",
            textStyle: {
            fontSize: getWidth() ,
            color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
         }
         },
    tooltip : {
      show:true,
        trigger: 'axis',
        formatter: function (params) {
            // if(params[0].seriesName=="辞职"){
              var res='<div><p>辞职信递交时间：'+ cizhi[params[0].dataIndex]+'</p></div>' 
                   res+='<p>实际离职时间:2017-11-29</p>'
                 return res;
            // }
        }
    },
    grid:{
      bottom:"20%",
      left:'35%',
      right:'15%',
      top:'10%'
    },
   
 
    xAxis : [
        {
          show:false,
            type : 'value',
            splitLine:{show: false},//去除网格线
            boundaryGap : [0, 0.01],
             axisLine: {
                   lineStyle: {
                       color:'#DADADA',
                       width:'2'
                   }
               },
                axisLabel: {
                   textStyle: {
                    color: '#DADADA',
                    // fontSize:getWidth()
                }
               },
                max:1.5
        }
    ],
    yAxis : [
        {
          show:true,
            type : 'category',
            splitLine:{show: false},//去除网格线
            data : name_chi_ci_name,
             axisLine: {
               show:false,
                   lineStyle: {
                       color:'#DADADA',
                       width:'2'
                   }
               },
               axisTick:{show:false},
                axisLabel: {
                   textStyle: {
                   color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
                    // fontSize:getWidth()
                }
               },


        }
    ],
    series : [
        {
            name:'迟到-早退',
            type:'bar',
            data:name_chi_ci,
            // barHeight : 50,//柱图宽度
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00fcae'
                }, {
                    offset: 1,
                    color: '#006388'
                }]),
                opacity: 1,
            }
          },
          zlevel: 10,
        },
        /* {
            name:'',
            type:'scatter',

            data:[1.5,1.5,1.5],
            symbolSize:function(value, params) {
               if(csvdata_ci[params.dataIndex].yichang==0)return 0;
               else return 20;
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f7734e'
                    }, {
                        offset: 1,
                        color: '#e12945'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
          zlevel: 10,
          label:{
            show:true,
            align:'left',
            padding:15,
            fontSize:getWidth()*0.8,
            formatter:function( params) {
               if(csvdata_ci[params.dataIndex].yichang==0)return '';
               else return "异常登录"+csvdata_ci[params.dataIndex].yichang+"次";
            },
          }
        },*/
       
    ]
};
}
/*
*/
Chart_cizhi.setOption(option_zao,true);


Chart_cizhi.on("click",function(param){
  console.log(param)
     var ren_id=0;
         for(var i=0;i<zong[nl].length;i++){
            if(param.name==zong[nl][i]){
                ren_id=i;
                break;
            }
         }
        
      user_now=zong[nl][ren_id]

if(param.seriesType=="scatter")
{
  d3.selectAll("#Content-YUE").remove();
  var yue=d3.select("body").append("div") 
                        .attr("id","Content-YUE")
                        .on("click",function()
                        { 
                          d3.selectAll("#Content-YUE").remove()
                        });
  draw_yue(1487);
   yue.style("left", 500+ "px")
      .style("top", 96+ "px");

}
else{
      d3.selectAll("#Container").style("opacity",0.8);
      d3.selectAll("#Content_tooltip").remove();
      var tooltipall=d3.select("body").append("div") ///添加个人悬浮界面
                        .attr("id","Content_tooltip")
                        
                                        
     var Content_tooltip_tittle=tooltipall.append("div")
                                     .attr("id","Content_tooltip_tittle"); 
      draw_getittle(user_now) 
     var tooltip=tooltipall.append("div")
                      .attr("id","Content_tooltip_content");

    var Content_tooltip_left=tooltip.append("div")
                                .attr("id","Content_tooltip_left"); 
      var Content_tooltip_right=tooltip.append("div")
                                .attr("id","Content_tooltip_right"); 

      var Content_geshangxia=Content_tooltip_left.append("div")
                                .attr("id","Content_geshangxia")
      draw_worktime("L_"+user_now);
      var Content_geliuliang=Content_tooltip_left.append("div")
                                .attr("id","Content_geliuliang")
      draw_linechart("L_"+user_now);

      var Content_geword=Content_tooltip_right.append("div")
                                .attr("id","Content_geword") 
      draw_wordcloud_twos(user_now,10,"black");
      
      var Content_geerror=Content_tooltip_right.append("div")
                                .attr("id","Content_geerror") 
      draw_error(user_now,date_index);

      var Content_geweb=Content_tooltip_right.append("div")
                                .attr("id","Content_geweb") 
      draw_web(date_index,user_now);
      tooltipall.style("left", 500+ "px")
                .style("top", 96+ "px");

}
})
function getMousePos(event) {
            var e = event || window.event;
            return {'x':e.clientX,'y':clientY}
        }

});
});
});
}
