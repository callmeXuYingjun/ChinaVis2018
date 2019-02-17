////部门信息
var caiwu=[1041,1108,1124,1137,1180,1186,1213,1226,1248,1253,1255,1293,1327,1342,1346,1347,1368,1369,1370,1431,1439,1451,1467,1498];
var renli=[1013,1104,1110,1118,1149,1165,1184,1249,1251,1295,1300,1312,1363,1371,1378,1433,1473,1499];
var yanfa=[1007,1057,1058,1059,1060,1067,1068,1079,1080,1087,1092,1096,1098,1100,1101,1102,1103,1106,1112,1113,1115,1119,1125,1126,1127,1129,1130,1132,1134,1135,1139,1140,1141,1142,1143,1145,1147,1148,1150,1151,1152,1153,1154,1155,1156,1159,1163,1164,1167,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1181,1182,1183,1189,1191,1192,1193,1194,1195,1197,1199,1200,1202,1204,1205,1206,1207,1209,1210,1211,1216,1217,1219,1220,1221,1223,1224,1228,1230,1231,1233,1234,1238,1239,1241,1243,1244,1245,1246,1252,1254,1257,1261,1262,1263,1265,1267,1268,1270,1273,1274,1275,1277,1278,1279,1281,1282,1283,1284,1286,1287,1290,1291,1296,1297,1299,1301,1303,1304,1305,1306,1307,1308,1311,1313,1314,1315,1319,1321,1322,1323,1324,1325,1326,1328,1330,1332,1333,1334,1336,1338,1339,1340,1343,1344,1345,1348,1349,1350,1351,1352,1354,1355,1356,1357,1359,1360,1361,1362,1364,1365,1367,1373,1374,1376,1379,1380,1381,1382,1383,1384,1385,1388,1389,1390,1391,1393,1394,1395,1396,1397,1398,1399,1401,1402,1403,1404,1405,1406,1408,1409,1410,1411,1416,1417,1420,1421,1422,1423,1424,1425,1428,1429,1434,1435,1436,1438,1440,1444,1445,1446,1449,1450,1455,1456,1457,1458,1459,1460,1461,1462,1464,1465,1466,1469,1470,1471,1474,1475,1477,1478,1480,1481,1482,1483,1484,1486,1487,1489,1490,1491,1493,1494,1495,1496,1497,1500];

////读入所有人所有天的上下班信息 original[0]['L1041']
d3.csv("data/shang_xia/shangxia.csv",function(original){
    draw_timeheat(original)

})
function draw_timeheat(original){
  //console.log(original_value)
  
   var timeheatwidth=document.getElementById("Content-zongshangxia").scrollWidth;
   var timeheatheight=document.getElementById("Content-zongshangxia").scrollHeight;
  // var height=document.getElementById("Content-Tree").scrollHeight;
//console.log(oms)
    var oms=parseInt(new Date(2017,10,1)-new Date(1970,0,1));
    var colorscale=d3.scale.linear()////颜色是上班的时长
                    .domain([300,1000])
                    .range([1,0])
 
    
    var alldata=[];

    var obj_caiwu={
      group:"财务",
      data:getGroupData(caiwu)
    }
    alldata.push(obj_caiwu)

    var obj_renli={
      group:"人力",
      data:getGroupData(renli)
    }
    alldata.push(obj_renli)

    var obj_yanfa={
      group:"研发",
      data:getGroupData(yanfa)
    }
    alldata.push(obj_yanfa)

   




    function getGroupData(bumen)
    {
      var groupdata=[];
      for(var i=0;i<bumen.length;i++)
      {
        var labelobj={
          label:bumen[i],
          data:getLabelData("L_"+bumen[i])
        }
        groupdata.push(labelobj);
      }
      return groupdata;
    }

//console.log(original_value[0].length)
    function getLabelData(name)
    {
      var tempdata=[];
      for(var i=0;i<30;i++)
      {
         if(original[i][name]!=0)///如果来上班了original[i][name]
          {
            var tempobj={
            timeRange:getTimeRange(i,name),///上班时间段
            val: colorscale(getTimeLong(i,name))///上班时长
            }
          tempdata.push(tempobj)
        }
      }
      return tempdata;
    }

    function getTimeRange(i,name)///i是第几天，name是员工
    {
      var shour=parseInt(original[i][name].slice(11,13))
      var smin=parseInt(original[i][name].slice(14,17))
      var startms=oms+i*24*60*60*1000+shour*60*60*1000+smin*60*1000-8*60*60*1000;///////////!!!!!!差了8小时

      var ehour=parseInt(original[i+30][name].slice(11,13))
      var emin=parseInt(original[i+30][name].slice(14,17))
      var endms=oms+i*24*60*60*1000+ehour*60*60*1000+emin*60*1000-8*60*60*1000;

      var sdate=new Date(startms);
      var edate=new Date(endms);
      var range=[sdate,edate];
      return range;
    }
   
    function getTimeLong(i,name)
    {
      var shour=parseInt(original[i][name].slice(11,13))
      var smin=parseInt(original[i][name].slice(14,17))
      var startms=shour*60+smin;
     
      var ehour=parseInt(original[i+30][name].slice(11,13))
      var emin=parseInt(original[i+30][name].slice(14,17))
      var endms=ehour*60+emin;

      return endms-startms;
    }
    

var customTimeFormat = d3.time.format.multi([
  [".%L", function(d) { return d.getMilliseconds(); }],
  [":%S", function(d) { return d.getSeconds(); }],
  ["%I:%M", function(d) { return d.getMinutes(); }],
  ["%I %p", function(d) { return d.getHours(); }],
  ["%a %d", function(d) { return d.getDay() && d.getDate() != 1; }],
  ["%b %d", function(d) { return d.getDate() != 1; }],
  ["%B", function(d) { return d.getMonth(); }],
  ["%Y", function() { return true; }]
]);


    TimelinesChart()
    .width(timeheatwidth)
    .leftMargin(50)
    .rightMargin(50)
    .topMargin(20)
    .bottomMargin(20)
    //.maxHeight()
     .data(alldata)
      .zScaleLabel("上班时长")
      .maxHeight(timeheatheight-30)
      .zQualitative(false)
     
      (document.getElementById('Content-zongshangxia'));


}
