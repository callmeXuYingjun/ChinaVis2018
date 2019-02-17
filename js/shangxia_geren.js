///参数是人的id
function draw_worktime(personId){
  d3.csv("data/shang_xia/shangxia.csv",function(data){
    var shangdata=[];
    var xiadata=[];
    for(var i=0;i<data.length/2;i++)
    {
      if(data[i][personId]!=0)////如果来上班
      {
        shangdata.push([data[i][personId].slice(0,10),data[i][personId].slice(11,16)]);
        xiadata.push([data[i+data.length/2][personId].slice(0,10),data[i+data.length/2][personId].slice(11,16)])
      }
      else////如果没上班
      {
        shangdata.push(["2017-11-"+bushuju(i+1),"!"]);
        xiadata.push(["2017-11-"+bushuju(i+1),"!"]);
      }
    }
    // console.log(shangdata);
    worktime(shangdata,xiadata)
  })


  function bushuju(temp)
  {
    if(temp<10) return "0"+temp;
    else return temp;
  }
  function worktime(shangdata,xiadata)
  {
    ////计算上下班均值
    var shangmean=0;
    var xiamean=0;
    var count=0;
    for(var i=0;i<shangdata.length;i++)
    {
      if(shangdata[i][1]!="!")
      {
        shangmean+=parseInt(shangdata[i][1].slice(0,2))*60+parseInt(shangdata[i][1].slice(3,5));
        xiamean+=parseInt(xiadata[i][1].slice(0,2))*60+parseInt(xiadata[i][1].slice(3,5));
        count++;
      }
    }
    shangmean=shangmean/count;
    xiamean=xiamean/count;
    shangmean=bushuju(parseInt(shangmean/60))+":"+bushuju(parseInt(shangmean%60))
    xiamean=bushuju(parseInt(xiamean/60))+":"+bushuju(parseInt(xiamean%60))
    var shangmeanline=[];
    var xiameanline=[];
    for(var i=0;i<shangdata.length;i++)
    {
      shangmeanline.push([shangdata[i][0],shangmean])
      xiameanline.push([xiadata[i][0],xiamean])
    }

    ////x轴，每一天
    var xaxisdata=[];
    for(var i=1;i<31;i++)
      xaxisdata.push("2017-11-"+bushuju(i))

    ////y轴，每一分钟
    var yaxisdata=[];
    for(var i=0;i<24;i++)
    {
      for(var j=0;j<60;j++)
      {
        yaxisdata.push(bushuju(i)+":"+bushuju(j))
      }
    }

    ////周末
    var oweekenddata=[4,5,11,12,18,19,25,26];
    var weekenddata=[];
    for(var i=0;i<oweekenddata.length;i++)
      weekenddata.push(["2017-11-"+bushuju(oweekenddata[i]),"23:59"])
    
    

    var myChart = echarts.init(document.getElementById('Content_geshangxia'));
    option = {
       title: {
            text: '考勤情况',
             left: 'center',
            top:"3%",
         textStyle: {
            color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
         }
         },
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            if(params[0].seriesName!="周末强调")
            {
              var tar0 = params[0];
              var tar1 = params[1];
              if(tar0.value[1]=="!")return  tar0.value[0] +"缺席";
              else return  tar0.seriesName + ' : ' + tar0.value+ '<br/>'+tar1.seriesName + ' : ' + tar1.value;
            }
          }
      },
       grid: {
            top: '18%',
            left: '6%',
            right: '6%',
            bottom:'6%',
            containLabel: true
        },
      xAxis: {
          type : 'category',
          axisLabel: {
                   textStyle: {
                    //color: '#DADADA',
                    color:'#B2DFEE',
                    textShadowColor:"#00a0ff",
                    textShadowBlur:2,
                    //fontSize:getWidth()
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
           } ,
          data : xaxisdata,
          
      },
      yAxis: {
          type : 'category',
           axisLabel: {
            interval:119,
                   textStyle: {
                    //color: '#DADADA',
                    color:'#B2DFEE',
                    textShadowColor:"#00a0ff",
                     textShadowBlur:2,
                    //fontSize:getWidth()
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
           }, 
          
          data : yaxisdata
      },
      series: [
          {
              name: '上班时间',
              type: 'bar',
              stack:  '总量',
              itemStyle: {
                  normal: {
                      barBorderColor: 'rgba(0,0,0,0)',
                      color: 'rgba(0,0,0,0)'
                  },
                  emphasis: {
                      barBorderColor: 'rgba(0,0,0,0)',
                      color: 'rgba(0,0,0,0)'
                  }
              },
              data: shangdata
          },
          {
              name: '下班时间',
              type: 'bar',
              stack: '总量',
              label: {
                  normal: {
                      show: false,
                      position: 'inside'
                  }
              },
               itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
              data:xiadata
          },
          {
              name: '周末强调',
              type: 'bar',
              label: {
                  normal: {
                      show: false,
                      position: 'inside'
                  }
              },
              barGap:'-100%',
              itemStyle: {
                  normal: {color: 'rgba(255,255,255,0.1)'}
              },
              data:weekenddata
          },
          {
            name:"上班均值",
            type:"line",
            symbolSize:0,
           itemStyle: {
                normal: {color: '#fff'}
            },
            data:shangmeanline
          } ,
          {
            name:"下班均值",
            type:"line",
            symbolSize:0,
           itemStyle: {
                normal: {color: '#fff'}
            },
            data:xiameanline
          } 
      ]
  };
  myChart.setOption(option,true);


   myChart.on('click', function (param){
        date_index=parseInt(param.data[0].slice(8,11))-1
       
       
      /*  if(user_now==undefined){
           
        }else{
            draw_web(date_index,user_now);
            draw_linechart("L_"+user_now);
            draw_error(user_now,date_index);
        }*/
            draw_wordcloud_twos(user_now,10,"black");
            draw_web(date_index,user_now);
            draw_linechart("L_"+user_now);
            draw_error(user_now,date_index);
        
    });

  }
}