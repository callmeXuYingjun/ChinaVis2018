var date_index=30;
draw_calendar()
function draw_calendar(){
    d3.csv("data/calendar/bumen"+nl+".csv",function(error,csvdata){
    if(error){
      console.log(error);
    }

    var data=[];
    var data_temp=[];
    for(var m=0;m<csvdata.length;m++){   //所有模式的数据
        data[m]=[csvdata[m].day,parseInt(csvdata[m].num)];
        data_temp[m]=parseInt(csvdata[m].num);
    }
    var range="2017-11"
    var getWidth = function getWidth(){
        var wth = document.body.offsetWidth;
    return wth/1920*12;

    };
    var max_temp=Math.max.apply(Math, data_temp);
    var cw=getWidth()*3.2;
    var ch=getWidth()*2.5;
    var rScale=d3.scale.linear()
                .domain([0,max_temp])
                .range([3,ch/2-3])
    var myChart = echarts.init(document.getElementById('Content-date'));
     var data_name=["财务","人力","研发"];
    option_date = {
    //backgroundColor:'rgba(128, 128, 128, 0.1)',
         title: {
            text: data_name[nl]+'部门十一月份考勤情况',
             left: 'center',
            bottom:"2%",
         textStyle: {
            fontSize: getWidth() ,
            color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
         }
         },
        tooltip : {
            trigger: 'item',
            formatter:function(params){
                return params.data;
            }
        },
        // legend: {
        //     y:'top',
        //     x:"center",
        //     //left: '100',
        //     data:['数据量', 'Top 3'],
        // textStyle: {
        //    fontSize: getWidth() 
        // }
        // },
        calendar: [{
            top: '20%',
            left:"8%",
            //left: 'center',
            orient: 'vertical',
            cellSize: [cw,ch],
            range: range,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#B0EBFD',
                    width: 1,
                    type: 'solid'
                }
            },
            yearLabel: {
                show:false,
                formatter: '{start}',
                position:'left',
                textStyle: {
                    color: '#fff',
            fontSize:getWidth()
                }
            },
            itemStyle: {
                normal: {
                    color: '#323c48',
                    borderWidth: 1,
                    borderColor: '#fff'
                }
            },
            dayLabel: {
            firstDay: 1,
            nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            textStyle: {
                    color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
                    fontSize:getWidth(),
                    fontWeight:'bold'
                }
        },
        monthLabel: {
            show:false,
            nameMap: 'cn',
           // margin: 20,
            textStyle: {
                    color: '#ccc',
                    fontSize:getWidth(),
                    fontWeight:'bold'
                }
        },
        }],
        series : [
            {
                name: '数据量',
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                data: data,
                symbolSize: function (val) {
                    // console.log(val[1])
                    if(val[1]==0){
                        return 0;
                    }else{
                        return rScale(val[1]) ;
                    }
                   
                },
                 showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                scale:2,
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#ffc000',//'#f4e925',
                    borderColor:'#EE9A00',
                    borderWidth:1,
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            
            }
            // ,
            // {
            //     name: 'Top 3',
            //     type: 'effectScatter',
            //     coordinateSystem: 'calendar',
            //     data: data.sort(function (a, b) {
            //         return b[1] - a[1];
            //     }).slice(0, 3),
            //     symbolSize: function (val) {
            //         return rScale(val[1]) ;
            //     },
            //     showEffectOn: 'render',
            //     rippleEffect: {
            //         brushType: 'stroke'
            //     },
            //     hoverAnimation: true,
            //     itemStyle: {
            //         normal: {
            //             color: '#f4e925',
            //             shadowBlur: 10,
            //             shadowColor: '#333'
            //         }
            //     },
            //     zlevel: 1
            // }
        ]
    };
    myChart.setOption(option_date,true);
    myChart.on('click', function (param){
        date_index=param.dataIndex;
        
            draw_shangxia_duoren(date_index,zong[nl])
       
       
        
    });


});
}