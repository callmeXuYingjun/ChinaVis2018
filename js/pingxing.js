draw_pingxing();
function draw_pingxing() {
    var getWidth = function getWidth(){
        var wth = document.body.offsetWidth;
    return wth/1887*12;
    };

// document.getElementById("Content-TOP-LEFT-DOWN").innerHTML = "";
var Chart_pingxing = echarts.init(document.getElementById('Content-pingxing'));
  // Chart_tree.showLoading();
// d3.json("data/tree/L"+nl+".json", function(error, data) {
// Chart_tree.hideLoading();
  // Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
var shang_name=["小于1亿","1-10亿", "10-20亿", "20-30亿", "30-40亿", "40-50亿"]
var xia_name=["小于1亿","1-10亿", "10-20亿", "20-30亿", "30-40亿", "40-50亿"]
var riqi=["2017/11/1","2017/11/2","2017/11/3","2017/11/4","2017/11/5","2017/11/6","2017/11/7","2017/11/8","2017/11/9","2017/11/10","2017/11/11","2017/11/12","2017/11/13","2017/11/14","2017/11/15","2017/11/16","2017/11/17","2017/11/18","2017/11/19","2017/11/20","2017/11/21","2017/11/22","2017/11/23","2017/11/24","2017/11/25","2017/11/26","2017/11/27","2017/11/28","2017/11/29","2017/11/30"];
var yuan_name=["1007","1013","1041","1057","1058","1059","1060","1067","1068","1079","1080","1087","1092","1096","1098","1100","1101","1102","1103","1104","1106","1108","1110","1112","1113","1115","1118","1119","1124","1125","1126","1127","1129","1130","1132","1134","1135","1137","1139","1140","1141","1142","1143","1145","1147","1148","1149","1150","1151","1152","1153","1154","1155","1156","1159","1163","1164","1165","1167","1169","1170","1171","1172","1173","1174","1175","1176","1177","1178","1179","1180","1181","1182","1183","1184","1186","1189","1191","1192","1193","1194","1195","1197","1199","1200","1202","1204","1205","1206","1207","1209","1210","1211","1213","1216","1217","1219","1220","1221","1223","1224","1226","1228","1230","1231","1233","1234","1238","1239","1241","1243","1244","1245","1246","1248","1249","1251","1252","1253","1254","1255","1257","1261","1262","1263","1265","1267","1268","1270","1273","1274","1275","1277","1278","1279","1281","1282","1283","1284","1286","1287","1290","1291","1293","1295","1296","1297","1299","1300","1301","1303","1304","1305","1306","1307","1308","1311","1312","1313","1314","1315","1319","1321","1322","1323","1324","1325","1326","1327","1328","1330","1332","1333","1334","1336","1338","1339","1340","1342","1343","1344","1345","1346","1347","1348","1349","1350","1351","1352","1354","1355","1356","1357","1359","1360","1361","1362","1363","1364","1365","1367","1368","1369","1370","1371","1373","1374","1376","1378","1379","1380","1381","1382","1383","1384","1385","1388","1389","1390","1391","1393","1394","1395","1396","1397","1398","1399","1401","1402","1403","1404","1405","1406","1408","1409","1410","1411","1416","1417","1420","1421","1422","1423","1424","1425","1428","1429","1431","1433","1434","1435","1436","1438","1439","1440","1444","1445","1446","1449","1450","1451","1455","1456","1457","1458","1459","1460","1461","1462","1464","1465","1466","1467","1469","1470","1471","1473","1474","1475","1477","1478","1480","1481","1482","1483","1484","1486","1487","1489","1490","1491","1493","1494","1495","1496","1497","1498","1499","1500"];
var bumen_name=["财务","人力","研发"]
var count_name=["1条","2条","3条","4-10条","10-100条","101-1000条","大于1000条"]
var error_name=["小于5次","5-20次","大于20次"]
var xieyi_name=["无","有"]
function judgeliuliang(d)
{
    if(d<100000000)return shang_name[0];
    else {
        var result=parseInt(d/1000000000);
        return shang_name[result+1];
    }
}
function judgecount(d)
{
   
    if(d==1)return count_name[0];
    if(d==2)return count_name[1];
    if(d==3)return count_name[2];
    if(d>3&&d<10)return count_name[3];
    if(d>9&&d<101)return count_name[4];
    if(d>100&&d<1001)return count_name[5];
    if(d>1000) return count_name[6];
}
function judgeerror(d)
{
    
    if(d<5)return error_name[0];
    if(d>4&&d<21)return error_name[1];
    if(d>20)return error_name[2];
    
}

d3.csv("data/pingxing/pingxing1_0.csv",function(csvwebdata0){
    d3.csv("data/pingxing/pingxing1_1.csv",function(csvwebdata1){
        d3.csv("data/pingxing/pingxing1_2.csv",function(csvwebdata2){

data_px=[];
// 财务
for(var i=0;i<csvwebdata0.length;i++){
    data_px[i]=[];
    data_px[i][0]="财务";
    data_px[i][1]=xieyi_name[0];
    data_px[i][2]=judgeerror(parseInt(csvwebdata0[i].error));
    data_px[i][3]=judgeliuliang(parseInt(csvwebdata0[i].shang));
    data_px[i][4]=judgeliuliang(parseInt(csvwebdata0[i].xia));

    data_px[i][5]=parseInt(csvwebdata0[i].yuangong); 
    data_px[i][6]=parseInt(csvwebdata0[i].day);
}
for(var i=csvwebdata0.length;i<(csvwebdata0.length+csvwebdata1.length);i++){
    data_px[i]=[];
    data_px[i][0]="人力";
    data_px[i][1]=xieyi_name[0];
    data_px[i][2]=judgeerror(parseInt(csvwebdata1[i-csvwebdata0.length].error));
    data_px[i][3]=judgeliuliang(parseInt(csvwebdata1[i-csvwebdata0.length].shang));
    data_px[i][4]=judgeliuliang(parseInt(csvwebdata1[i-csvwebdata0.length].xia));
    
    data_px[i][5]=parseInt(csvwebdata1[i-csvwebdata0.length].yuangong); 
    data_px[i][6]=parseInt(csvwebdata1[i-csvwebdata0.length].day);
}
for(var i=(csvwebdata0.length+csvwebdata1.length);i<(csvwebdata0.length+csvwebdata1.length+csvwebdata2.length);i++){
    data_px[i]=[];  
    data_px[i][0]="研发";
    data_px[i][1]=xieyi_name[1];
    data_px[i][2]=judgeerror(parseInt(csvwebdata2[i-csvwebdata0.length-csvwebdata1.length].error));
    data_px[i][3]=judgeliuliang(parseInt(csvwebdata2[i-csvwebdata0.length-csvwebdata1.length].shang));
    data_px[i][4]=judgeliuliang(parseInt(csvwebdata2[i-csvwebdata0.length-csvwebdata1.length].xia));
    
    data_px[i][5]=parseInt(csvwebdata2[i-csvwebdata0.length-csvwebdata1.length].yuangong); 
    data_px[i][6]=parseInt(csvwebdata2[i-csvwebdata0.length-csvwebdata1.length].day);
  //  data_px[i][4]=parseInt(csvwebdata[i].day);
   // data_px[i][5]=csvwebdata[i].yuangong; 
}

/////合并数据
var data_hebing=[];
for(var i=0;i<data_px.length;i++)
{
    var flag=-1;
    for(var j=0;j<data_hebing.length;j++)
    {
        for(var k=0;k<5;k++)
        {
            if(data_px[i][k]!=data_hebing[j][k])break;
            else{
                if(k==4)flag=j;
            }
        }
    }
    if(flag==-1)
        {
            var temp=[];
            for(var k=0;k<5;k++)temp.push(data_px[i][k]);
            temp.push(1);
            temp.push([data_px[i][5]]);
            temp.push([data_px[i][6]]);
            data_hebing.push(temp);
        }
        else
        {
            data_hebing[flag][5]++;
            data_hebing[flag][6].push(data_px[i][4]);//人
            data_hebing[flag][7].push(data_px[i][5]);//日期   
        }
}

////将数量分
for(var i=0;i<data_hebing.length;i++)
{
    data_hebing[i][5]=judgecount(data_hebing[i][5])

}


/////////////绘制
var schema = [
    {name: '部门', index: 0, text: '部门'},
    {name: '登陆行为', index: 1, text: '登陆行为'},
    {name: 'ip登录错误', index: 2, text: 'ip登录错误'},
    {name: '上行流量', index: 3, text: '上行流量'},
    {name: '下行流量', index: 4, text: '下行流量'},
    {name: '数量', index: 5, text: '数量'},
   // {name: '日期', index: 4, text: '日期'},
   // {name: '职员', index: 5, text: '职员'},
    
];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option_pingxing = {
     title: {
            text: '员工上网情况概览',
             left: 'center',
            top:"2%",
         textStyle: {
            color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
            fontSize: getWidth() ,
         }
         },
    // backgroundColor: '#485465',
// backgroundColor:'rgba(128, 128, 128, 0.1)',
     parallelAxis: [
        {dim: 0, name: schema[0].text,type: 'category', data: bumen_name},
        {dim: 1, name: schema[1].text,type: 'category', data: xieyi_name},
        {dim: 2, name: schema[2].text,type: 'category', data: error_name},
        {dim: 3, name: schema[3].text,type: 'category', data: shang_name},
        {dim: 4, name: schema[4].text,type: 'category', data: xia_name},
        {dim: 5, name: schema[5].text,type: 'category', data: count_name}   
    ],
   
    parallel: {
        left: '8%',
        right: '18%',
        bottom: '5%',
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 15,
            nameTextStyle: {
            color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                // textStyle: {
                //     color: '#fff'
                // }
                textStyle: {
                    color: '#fff'
                }
            }
        }
    },
     visualMap: {
        show:false,
        //type:' piecewise',
        min:0,
        max:6,
        dimension: 6,
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'],
            // colorAlpha: [0, 1]
        }
    },
    brush: {
        
        brushLink: 'all',
        inBrush: {
            opacity: 1,
           
            symbolSize: 14
        },
        outOfBrush: {
            // colorLightness:0
            // color: '#002D44',
            opacity: 0
        },
        z: 10
    },
    series: [
        {
            name: 'px',
            type: 'parallel',
            smooth: true,
            lineStyle: {
                normal: {
                    color: '#577ceb',
                    width: 1,
                    opacity: 0.6
                }
            },
            z: 100,
            blendMode: 'lighter',
            data: data_hebing
        }


    ]
};
Chart_pingxing.setOption(option_pingxing,true);
Chart_pingxing.on('axisareaselected', function (params) {
    var series0 = Chart_pingxing.getModel().getSeries()[0];///选第几个series
    var indices0 = series0.getRawIndicesByActiveState('active');
    var select=[];
    
    for(var i=0;i<indices0.length;i++)
        for(var j=0;j<data_hebing[indices0[i]][6].length;j++)
            {
                var temp=[];
                temp.push(data_hebing[indices0[i]][6][j]);
                temp.push(data_hebing[indices0[i]][7][j]);
                select.push(temp)
            }
   
   d3.selectAll("#Content-pcpbrush").remove();
    var pcpbrush=d3.select("body").append("div") 
                          .attr("id","Content-pcpbrush")
                          .on("click",function()
                          { 
                            d3.selectAll("#Content-pcpbrush").remove()
                          });
     document.getElementById('Content-pcpbrush').innerHTML='';
    var brushwidth= document.getElementById('Content-pcpbrush').scrollWidth;
    var brushheight= document.getElementById('Content-pcpbrush').scrollHeight;
    var brushsvg=pcpbrush.append("svg")
                    .attr("width",brushwidth)
                    .attr("height",brushheight)

    var cishu=[24,25,24]
        var text = brushsvg.append("text")  
                        .attr("x",10)  
                        .attr("y",10)  
                        .attr("font-size",15)  
                        .style("fill",'#D8765A')  
                        .style("text-shadow","0px 0px 2px #00a0ff")
                        .style("font-family","sans-serif");
        text.selectAll("tspan")
        .data(select)  
        .enter()  
        .append("tspan")  
        .attr("x",text.attr("x"))  
        .attr("dy","1em")  
        .text(function(d,i){  
           return select[i][0]+"号员工在"+(select[i][1])+"日登陆错误"+cishu[i]+"次";
        }); 
    
    // brushsvg.append("text")
    //         .attr("x",0)
    //         .attr("y",10)
    //         .text(function(){
    //             var str="";
    //             for(ks=0;ks<select.length;ks++)
    //             {
    //                 str+=select[ks][0]+"号员工在"+(select[ks][1]+1)+"日登陆错误"+"\n"
    //             }
    //             return str;
    //         })
    //         .style("fill",'#B2DFEE')  
    //         .style("text-shadow","0px 0px 2px #00a0ff")
    //         .style("font-family","sans-serif")
    //         .attr("text-anchor", "middle")

     pcpbrush.style("right",  300+ "px")
        .style("top",  450+ "px");


})



// Chart_pingxing.on("mouseover",function(param){
// console.log(param);

// });
// Chart_pingxing.on("mouseout",function(param){
// console.log(param);
    
// });

});
});
    });
}
