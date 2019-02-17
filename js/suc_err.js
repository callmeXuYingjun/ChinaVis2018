// draw_error(1007,30);
function draw_error(ren,day_index){
   var getWidth = function getWidth(){
        var wth = document.body.offsetWidth;
    return wth/1920*12;

    };
d3.csv("data/error/success"+ren+".csv",function(csvdata_success){
d3.csv("data/error/error_"+ren+".csv",function(csvdata_error){
// console.log(ren,day_index);
var success_data=[];
var error_data=[];
var lie_temp="L"+day_index;
for(var i=0;i<csvdata_success.length;i++){
    success_data[i]=csvdata_success[i][lie_temp];
    error_data[i]=csvdata_error[i][lie_temp];
}
// alert(ren+"**********"+day_index);
success_data.reverse(); 
error_data.reverse();

// document.getElementById("Content-DOWN-LEFT_1").innerHTML = "";
var Chart_error = echarts.init(document.getElementById('Content_geerror'),'dark');
var option_error;

/////////是否有登陆
/*var flag=false;
for(var i=0;i<success_data.length;i++)
{
  if(success_data[i]!='0')
  {
    flag=true;
    break;
  }
  if(error_data[i]!='0')
  {
    flag=true;
    break;
  }
}
if(flag==false)
{
  option_error  = {
   title: {
            text: ' ',
             left: 'center',
            bottom:'center',
         textStyle: {
          fontSize: getWidth()*3 ,
           // fontSize: getWidth() ,
            color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
         }
         },
       }
        Chart_error.setOption(option_error);
}*/

//else{
// var legendname=['上班','下班'];
var flag='';
if(ren==1487) flag='存在越权行为';
 option_error  = {
   title: {
            text: ''+flag,
           
             left: 'center',
            
            bottom:"1%",
         textStyle: {
          fontSize:10,
           // fontSize: getWidth() ,
            color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
         }
         },
    grid: {
        top:'5%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    },
    angleAxis: {
      
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
           },
          minInterval: 1
    },
    radiusAxis: {
        type: 'category',
        data: ["ssh","mongodb","tds","mysql","sftp","postgresql","ftp"].reverse(),
        z: 10,
        axisLabel: {
          show:false,
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
    },
    polar: {
     // center:['50%','60%'],
      radius:70
    },
     tooltip : {
      show:true,},
    series: [{
        type: 'bar',
        data: success_data,
        coordinateSystem: 'polar',
        name: '登录成功',
        stack: 'a',
    
             itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#96d668'
                    }, {
                        offset: 1,
                        color: '#01babc'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
    }, {
        type: 'bar',
        data: error_data,
        coordinateSystem: 'polar',
        name: '登录失败',
        stack: 'a',
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
    }],

    legend: {
        show: true,
        data: ['登录成功', '登录失败'],
         textStyle: {
          // fontSize: getWidth() ,
           color:'#B2DFEE',
        }
    }
};
 Chart_error.setOption(option_error);
//}
   Chart_error.on("click",function(param){

if(ren==1487)
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
})

});

});
}