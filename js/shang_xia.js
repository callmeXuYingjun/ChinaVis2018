draw_shangxia_duoren(date_index,zong[nl])
function draw_shangxia_duoren(tian,ren_duo){
// console.log(ren_duo);
var str_shang="data/shangxia_all/shang_"+tian+".csv";
var str_xia="data/shangxia_all/xia_"+tian+".csv";
d3.csv(str_shang,function(csvdata_shang){
d3.csv(str_xia,function(csvdata_xia){
// document.getElementById("Content-DOWN-LEFT").innerHTML = "";
var yuan_duan_shang=[];
var yuan_duan_xia=[];
var h_shang=["06:00:00","06:10:00","06:20:00","06:30:00","06:40:00","06:50:00","07:00:00","07:10:00","07:20:00","07:30:00","07:40:00","07:50:00","08:00:00","08:10:00","08:20:00","08:30:00","08:40:00","08:50:00","09:00:00","09:10:00","09:20:00","09:30:00","09:40:00","09:50:00","10:00:00","10:10:00","10:20:00","10:30:00","10:40:00","10:50:00","11:00:00","11:10:00","11:20:00","11:30:00","11:40:00","11:50:00","12:00:00","12:10:00","12:20:00","12:30:00","12:40:00","12:50:00","13:00:00","13:10:00","13:20:00","13:30:00","13:40:00","13:50:00"];
var shang=[];
var leng=ren_duo.length;
for(var i=0;i<h_shang.length;i++){
    yuan_duan_shang[i]=[];
    var sum=0;
    for(var ren=0;ren<ren_duo.length;ren++){
        if(parseInt(csvdata_shang[i][lie])!=0){
            yuan_duan_shang[i].push(ren_duo[ren]);
        }
        var lie="L_"+ren_duo[ren];
        sum=sum+parseInt(csvdata_shang[i][lie]);
    }
    shang[i]=[h_shang[i],sum];
}

var sumshang=0;
for(var i=0;i<shang.length;i++){
    sumshang=sumshang+shang[i][1];
}
for(var i=0;i<shang.length;i++){
    shang[i][1]=(shang[i][1]/sumshang).toFixed(2);;
}
var h_xia=["12:00:00","12:10:00","12:20:00","12:30:00","12:40:00","12:50:00","13:00:00","13:10:00","13:20:00","13:30:00","13:40:00","13:50:00","14:00:00","14:10:00","14:20:00","14:30:00","14:40:00","14:50:00","15:00:00","15:10:00","15:20:00","15:30:00","15:40:00","15:50:00","16:00:00","16:10:00","16:20:00","16:30:00","16:40:00","16:50:00","17:00:00","17:10:00","17:20:00","17:30:00","17:40:00","17:50:00","18:00:00","18:10:00","18:20:00","18:30:00","18:40:00","18:50:00","19:00:00","19:10:00","19:20:00","19:30:00","19:40:00","19:50:00","20:00:00","20:10:00","20:20:00","20:30:00","20:40:00","20:50:00","21:00:00","21:10:00","21:20:00","21:30:00","21:40:00","21:50:00","22:00:00","22:10:00","22:20:00","22:30:00","22:40:00","22:50:00","23:00:00","23:10:00","23:20:00","23:30:00","23:40:00","23:50:00"];
var xia=[];
for(var i=0;i<h_xia.length;i++){
    yuan_duan_xia[i]=[];
    var sum=0;
    for(var ren=0;ren<ren_duo.length;ren++){
        if(parseInt(csvdata_xia[i][lie])==1){
            yuan_duan_xia[i].push(ren_duo[ren])
        }
        var lie="L_"+ren_duo[ren];
        sum=sum+parseInt(csvdata_xia[i][lie]);
    }
    xia[i]=[h_xia[i],sum];
}
var sumxia=0;
for(var i=0;i<xia.length;i++){
    sumxia=sumxia+xia[i][1];
}
for(var i=0;i<xia.length;i++){
    xia[i][1]=(xia[i][1]/sumxia).toFixed(2);;
}
// console.log(xia);

var data=[shang,xia];
// console.log(ren_duo.length);
var yuan_duan_shangxia=[yuan_duan_shang,yuan_duan_xia];
// console.log(yuan_duan_shangxia);


// document.getElementById("Content-DOWN-LEFT").innerHTML = "";
var myChartpinlv = echarts.init(document.getElementById('Content-shangxia'),'dark');
var legendname=['上班','下班'];
var biaozhi=0;
var xname=data[biaozhi].map(function(d){return d[0];})
var getWidth = function getWidth(){
        var wth = document.body.offsetWidth;
        return wth/1887*12;
 
    };
  var getWidth1 = function getWidth(){
        var wth = document.body.offsetWidth;
        return wth/1887*20;
 
    };
    var data_name=["财务","人力","研发"];
var  optionpinlv = {
  //  backgroundColor:'rgba(128, 128, 128, 0.1)',
    title: {
            text: data_name[nl]+'部门上下班时间分布',
             left: 'center',
            bottom:"2%",
         textStyle: {
            color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
            fontSize:getWidth()
         }
         },
        tooltip : {
            trigger: 'axis',
            textStyle:{
            fontSize:getWidth()*0.8
           },
         
        },

        calculable : true,
        legend: {

            data:legendname,
            itemGap: 5,
            selectedMode:'single',
            selected: {
                [legendname[biaozhi]]: true,
                [legendname[(biaozhi+1)%2]]: false
            },
            textStyle:{
                color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
               fontSize:getWidth()
           },
           top:'3%'

        },
        color:['#05C8BC','#FF9F00'],
        grid: {
            top: '18%',
            left: '6%',
            right: '6%',
            bottom:'16%',
            containLabel: true
        },
        xAxis: [
            {
               // type : '单位',
                data : xname,//['长春新区', '亚泰热力', '长春燃气', '市水务集团', '净月开发区', '绿园区政府', '市环保局', '市交通局', '朝阳区政府', '经济开发区', '榆树市政府', '德惠市政府', '市同鑫热力', '市人社局', '南关区政府', '二道区政府', '汽开区', '市公安局', '宽城区政府', '市房地集团', '农安县政府', '双阳区政府', '新联通公司', '长春市公用局', '中国电信', '市热力集团', '九台区政府', '市运输管理局', '市房地局', '市供电公司', '市移动公司', '市国资委', '市开发办', '市发改委', '市供热公司', '市牧业局', '吉视传媒', '莲花山管委会', '市公交集团', '市地税局', '市教育局', '市卫计委', '市工商局', '市建委', '市路灯处', '市轻轨办', '市拆迁办', '一汽动能', '市铁通公司', '市工业公司', '市民政局', '维管中心', '天然气公司', '市质监局', '建设银行', '市文广新局', '市规划局', '市机关局', '市社保局', '市容环卫', '市国税局', '市住房公积金管理中心', '市民委', '市国土局', '市伊通河管委会', '市商务局', '市贸促会', '市司法局', '市药监局', '工商银行', '市建工集团', '新星宇集团', '市人口计生委', '市财政局', '市水利局', '市国商公司', '市爱卫会', '市农委', '市残联', '市统计局', '省农行长春分行', '吉林银行', '中国银行吉林省分行', '市文化局', '人民银行长春支行', '团市委', '市园林局', '市旅游局', '软环境举报中心', '市林业局', '市工信局', '市烟草局', '市邮政管理局', '市法制局', '公路客运公司', '市安监局', '市粮食局', '市供销社', '市科技局', '市信用社', '市老龄委', '市劳动局', '市体育局', '市人防办', '市外办', '交通银行', '一汽集团', '市长粮集团', '市地震局', '市审计局']
                axisLabel: {
                   textStyle: {
                    //color: '#DADADA',
                    color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
                    fontSize:getWidth()
                 }   
                }, 
                axisLine: {
                   lineStyle: {
                       //color:'#DADADA',
                       color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
                       width:'1'
                   }
               } 
            }
        ],
        yAxis: [
            {
                type : 'value',
                name : '频率',
                top:20,
                nameTextStyle:{
                    fontSize:getWidth(),
                    color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
                },
                nameLocation:"end",
                splitLine:{show: false},//去除网格线
                // splitArea : {show : true},//保留网格区域
                axisLine: {
                   lineStyle: {
                      // color:'#DADADA',
                      color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
                       width:'1'
                   }
               },
                axisLabel: {
                   textStyle: {
                    //color: '#DADADA',
                    color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
                    fontSize:getWidth()
                }
               }
            }
        ],
        dataZoom: [

            // {
            //     height:getWidth()*1.8,
            //     show: true,
            //     bottom:'2%'
            // },
            {
                
                type: 'inside',

            },
            // {
            //     show: true,
            //     yAxisIndex: 0,
            //     filterMode: 'empty',
            //     width: getWidth()*1.8,
            //     showDataShadow: false,
            //     left: '96%'
            // },
            
        ],
        series : [
            {
                name: '上班',
                type: 'bar',
                data: data[0],
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
        }
            },
            {
                name: '下班',
                type: 'bar',
                data: data[1],
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
        }
            }
        //     ,
        //     {
        //         name:'增序',
        //         type:'pie',
        //         radius: ['0%', '5%'],
        //         center:['90%','5%'],
        //         avoidLabelOverlap: false,
        //         label: {
        //             normal: {
        //                 show: true,
        //                 position: 'center',
        //                 textStyle: {
        //                     fontSize: '10',
        //                     fontWeight: 'bold'
        //                 },
        //                 color:"white",

        //               textStyle: {
        //           //  color: '#fff',
        //                   fontSize:getWidth()
        //                }
            
        //             },
        //             emphasis: {
        //                 show: true,
        //                 textStyle: {
        //                     fontSize: '20',
        //                     fontWeight: 'bold'
        //                 }
        //             }
        //         },
        //         labelLine: {
        //             normal: {
        //                 show: false
        //             }
        //         },
        //         data:[
        //             {value:335, name:'增序'},
        //         ]
        // },
        // {
        //         name:'降序',
        //         type:'pie',
        //         radius: ['0%', '5%'],
        //         center:['95%','5%'],
        //         avoidLabelOverlap: false,
        //         label: {
        //             normal: {
        //                 show: true,
        //                 position: 'center',
        //                 textStyle: {
        //                     fontSize: '10',
        //                     fontWeight: 'bold'
        //                 },
        //                 color:"white",
        //                    textStyle: {
        //           //  color: '#fff',
        //                   fontSize:getWidth()
        //                }
            
        //             },
        //             emphasis: {
        //                 show: true,
        //                 textStyle: {
        //                     fontSize: '20',
        //                     fontWeight: 'bold'
        //                 }
        //             }
        //         },
        //         labelLine: {
        //             normal: {
        //                 show: false
        //             }
        //         },
        //         data:[
        //             {value:335, name:'降序'},
        //         ]
        // }
        ]
    };
    myChartpinlv.setOption(optionpinlv);
    var temp_color=[];
    var gg;
    // myChartpinlv.on('mouseover',function(param){
    //     // console.log(param.dataIndex);
    //     // console.log(yuan_duan_shangxia[biaozhi][param.dataIndex])
    //     temp_color=[];
    //     gg=yuan_duan_shangxia[biaozhi][param.dataIndex];
    //     for(var k=0;k<gg.length;k++){
    //         var ren_id=0;
    //          for(var i=0;i<zong[nl].length;i++){
    //             if(gg[k]==zong[nl][i]){
    //                 ren_id=i;
    //                 break;
    //             }
    //          }
    //         // temp_color[k]=d3.select("#node_"+ren_id)
    //         //       .attr("fill");
    //         // d3.select("#node_"+ren_id)
    //         //       .attr("fill",function(){
    //         //         return "black";
    //         //         // return compute_shang(linear_shang(data_shang[ren_id]))
    //         //       });
    //     }
        
        
    // });

    // myChartpinlv.on('mouseout',function(param){
    //     for(var k=0;k<gg.length;k++){
    //         var ren_id=0;
    //          for(var i=0;i<zong[nl].length;i++){
    //             if(gg[k]==zong[nl][i]){
    //                 ren_id=i;
    //                 break;
    //             }
    //          }
    //     d3.select("#node_"+ren_id)
    //             .attr("fill",function(){
    //                 // return "red"
    //                 return temp_color[k]
    //             });
    //     }
    // });






    myChartpinlv.on('legendselectchanged', function (param){
        var selected_1 = param.name;
        if(selected_1=='下班'){
            biaozhi=1;
        }else if(selected_1=='上班'){
            biaozhi=0;
        }
                optionpinlv.legend.selected[legendname[biaozhi]] = true;
                optionpinlv.legend.selected[legendname[(biaozhi+1)%2]] = false;
                var tempxname=data[biaozhi].map(function(d){return d[0];})
                optionpinlv.xAxis[0].data=tempxname;
        myChartpinlv.setOption(optionpinlv);
    });
    // myChartpinlv.on("click",function(param){
    //     if(param.name=="增序")
    //     {
    //         for(var k=0;k<data.length;k++)
    //         {
    //             data[k].sort(function(a,b){
    //             return a[1]-b[1]});
    //             optionpinlv.series[k].data=data[k];
    //         }
    //         var tempxname=data[biaozhi].map(function(d){return d[0];})
    //         optionpinlv.xAxis[0].data=tempxname;
    //         myChartpinlv.setOption(optionpinlv,true);
    //     }
    //     if(param.name=="降序")
    //     {   
    //         for(var k=0;k<data.length;k++)
    //         {   
    //             data[k].sort(function(a,b){
    //             return b[1]-a[1]});
    //             optionpinlv.series[k].data=data[k];
    //         }
    //         var tempxname=data[biaozhi].map(function(d){return d[0];})
    //         optionpinlv.xAxis[0].data=tempxname;
    //         myChartpinlv.setOption(optionpinlv,true);
    //     }
    //     if(param.componentSubType=="bar")//////////////如果点击柱形 联动雷达图
    //     {
    //       // darw_meigui(param.data[0])
    //     }
    // })

});

});
}