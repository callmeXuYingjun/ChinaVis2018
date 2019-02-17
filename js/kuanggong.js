draw_kuanggong()
function draw_kuanggong() {
  var getWidth = function getWidth(){
        var wth = document.body.offsetWidth;
    return wth/1920*12;

    };
  // alert();
// $('#Content-TOP-RIGHT-DOWN').empty(); 
d3.csv("data/chi_zao_kuang_ci/chi_zao.csv",function(csvdata_chi_zao){
    d3.csv("data/chi_zao_kuang_ci/kuang.csv",function(csvdata_kuang){
        d3.csv("data/chi_zao_kuang_ci/ci.csv",function(csvdata_ci){
         
var biaozhi=1;
d3.select("#Content-kuanggong").remove()
d3.select("#Content-TOP-RIGHT2").append("div").attr("id","Content-kuanggong")
var Chart_cidao = echarts.init(document.getElementById('Content-kuanggong'),'dark');
var name_chi_zao=[];
var name_chi_zao_name=[];
var name_chi_kuang=[];
var name_chi_kuang_name=[];

var name_chi_ci=[];
var name_chi_ci_name=[];
var cizhi=["2017-11-27 14:20:46","2017-11-27 17:36:33","2017-11-27 15:33:37"];

for(var i=0;i<csvdata_chi_zao.length;i++){
    for(var j=0;j<zong[nl].length;j++){
    if(zong[nl][j]==csvdata_chi_zao[i].yuangong){
      name_chi_zao.push(csvdata_chi_zao[i].count);
      name_chi_zao_name.push(csvdata_chi_zao[i].yuangong);
    }
  }
}

name_chi_zao.reverse(); 
name_chi_zao_name.reverse(); 

for(var i=0;i<csvdata_kuang.length;i++){
    for(var j=0;j<zong[nl].length;j++){
    if(zong[nl][j]==csvdata_kuang[i].yuangong){
      name_chi_kuang.push(csvdata_kuang[i].count);
      name_chi_kuang_name.push(csvdata_kuang[i].yuangong);
    }
  }
}

name_chi_kuang.reverse(); 
name_chi_kuang_name.reverse(); 

for(var i=0;i<csvdata_ci.length;i++){
  for(var j=0;j<zong[nl].length;j++){
    if(zong[nl][j]==csvdata_ci[i].yuangong){
      name_chi_ci.push(csvdata_ci[i].count);
      name_chi_ci_name.push(csvdata_ci[i].yuangong);
    }
  }
}
name_chi_ci.reverse(); 
name_chi_ci_name.reverse(); 

var yuangong_tree=[name_chi_zao,name_chi_kuang,name_chi_ci];
var yuangong_tree_name=[name_chi_zao_name,name_chi_kuang_name,name_chi_ci_name];
var legendname=[ '迟到-早退'];

var bili=yuangong_tree_name[biaozhi].length/zong[nl].length;

option_zao = {
  //backgroundColor:'rgba(128, 128, 128, 0.1)',
  title: {
            text: '旷工',
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
        trigger: 'axis',
        // formatter: function (params) {
        //     if(params[0].seriesName=="辞职"){
        //       var res='<div><p>辞职信递交时间：'+ cizhi[params[0].dataIndex]+'</p></div>' 
        //            res+='<p>实际离职时间:2017-11-29</p>'
        //          return res;
        //     }
        // }
    },
    grid:{
      bottom:"20%",
      left:'15%',
      right:'15%',
      top:'10%'
    },
    legend: {
            show:false,
            data:legendname,
            itemGap: 5,
            selectedMode:'single',
            selected: {
                [legendname[biaozhi]]: true,
                [legendname[(biaozhi+1)%3]]: false,
                [legendname[(biaozhi+2)%3]]: false
            }
        },
         color:['#05C8BC','#FF9F00','#D565B8'],
    calculable : true,
    yAxis : [
        {
          show:false,
            type : 'value',
            splitLine:{show: false},//去除网格线
            boundaryGap : [0, 0.01],
             axisLine: {
              show:false,
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
               max:30
        }
    ],
    xAxis : [
        {
          show:false,
            type : 'category',
            splitLine:{show: false},//去除网格线
            data : yuangong_tree_name[biaozhi],
             axisLine: {
               show:false,
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
               }
        }
    ],
    series : [
        {
            name:'迟到-早退',
            type:'bar',
            data:yuangong_tree[1],
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
        {
        type: 'liquidFill',
        data: [bili],
        radius: '45%',
        center: ['50%', '25%'],
        outline: {
        show: true,
        borderDistance: 3,
        itemStyle: {
            color: 'none',
            borderColor: '#B2DFEE',
            borderWidth: 3,
            shadowBlur: 20,
            shadowColor: '#00a0ff'
        }
    },

    backgroundStyle: {
        color: '#E3F7FF'
    },

    label: {
        show: true,
        color: '#294D99',
        insideColor: '#fff',
        fontSize: 10,
        fontWeight: 'bold',

        align: 'center',
        baseline: 'middle',
        position: 'inside',
        

    }
    }
    ]
};
Chart_cidao.setOption(option_zao,true);
// Chart_cidao.on("mouseover",function(param){
//          var ren_id=0;
//          for(var i=0;i<zong[nl].length;i++){
//             if(param.name==zong[nl][i]){
//                 ren_id=i;
//                 break;
//             }
//          }
//          temp_color=d3.select("#node_"+ren_id)
//               .attr("fill");
//          d3.select("#node_"+ren_id)
//               .attr("fill",function(){
//                 return "red"
//                 // return compute_shang(linear_shang(data_shang[ren_id]))
//               });
// });

// Chart_cidao.on("mouseout",function(param){
//          var ren_id=0;
//          for(var i=0;i<zong[nl].length;i++){
//             if(param.name==zong[nl][i]){
//                 ren_id=i;
//                 break;
//             }
//          }
//           d3.select("#node_"+ren_id)
//               .attr("fill",function(){
//                 // return "green"
//                 return temp_color;
//               });

// });

Chart_cidao.on("click",function(param){
     var ren_id=0;
         for(var i=0;i<zong[nl].length;i++){
            if(param.name==zong[nl][i]){
                ren_id=i;
                break;
            }
         }
        
      user_now=zong[nl][ren_id]
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
      tooltipall.style("left", 471 + "px")
                    .style("top", 96+ "px");

})
function getMousePos(event) {
            var e = event || window.event;
            return {'x':e.clientX,'y':clientY}
        }
Chart_cidao.on('legendselectchanged', function (param){
        var selected_1 = param.name;
        if(selected_1=='迟到-早退'){
            biaozhi=0;
        }else if(selected_1=='旷工'){
            biaozhi=1;
        }else if(selected_1=='辞职'){
            biaozhi=2;
        }
        option_zao.legend.selected[legendname[biaozhi]] = true;
        option_zao.legend.selected[legendname[(biaozhi+1)%3]] = false;
        option_zao.legend.selected[legendname[(biaozhi+2)%3]] = false;
        option_zao.yAxis[0].data=yuangong_tree_name[biaozhi];
        // Chart_cidao.clear();
        Chart_cidao.setOption(option_zao);
    });
});
});
});
}
