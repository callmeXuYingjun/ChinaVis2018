// // draw_E_out_in(2,2);
// function draw_E_out_in(bumen,true_id) {
// var user_id=[1007,1013,1041,1057,1058,1059,1060,1067,1068,1079,1080,1087,1092,1096,1098,1100,1101,1102,1103,1104,1106,1108,1110,1112,1113,1115,1118,1119,1124,1125,1126,1127,1129,1130,1132,1134,1135,1137,1139,1140,1141,1142,1143,1145,1147,1148,1149,1150,1151,1152,1153,1154,1155,1156,1159,1163,1164,1165,1167,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1184,1186,1189,1191,1192,1193,1194,1195,1197,1199,1200,1202,1204,1205,1206,1207,1209,1210,1211,1213,1216,1217,1219,1220,1221,1223,1224,1226,1228,1230,1231,1233,1234,1238,1239,1241,1243,1244,1245,1246,1248,1249,1251,1252,1253,1254,1255,1257,1261,1262,1263,1265,1267,1268,1270,1273,1274,1275,1277,1278,1279,1281,1282,1283,1284,1286,1287,1290,1291,1293,1295,1296,1297,1299,1300,1301,1303,1304,1305,1306,1307,1308,1311,1312,1313,1314,1315,1319,1321,1322,1323,1324,1325,1326,1327,1328,1330,1332,1333,1334,1336,1338,1339,1340,1342,1343,1344,1345,1346,1347,1348,1349,1350,1351,1352,1354,1355,1356,1357,1359,1360,1361,1362,1363,1364,1365,1367,1368,1369,1370,1371,1373,1374,1376,1378,1379,1380,1381,1382,1383,1384,1385,1388,1389,1390,1391,1393,1394,1395,1396,1397,1398,1399,1401,1402,1403,1404,1405,1406,1408,1409,1410,1411,1416,1417,1420,1421,1422,1423,1424,1425,1428,1429,1431,1433,1434,1435,1436,1438,1439,1440,1444,1445,1446,1449,1450,1451,1455,1456,1457,1458,1459,1460,1461,1462,1464,1465,1466,1467,1469,1470,1471,1473,1474,1475,1477,1478,1480,1481,1482,1483,1484,1486,1487,1489,1490,1491,1493,1494,1495,1496,1497,1498,1499,1500];
// var caiwu_e=["me2in","in2me","me2ren","ren2me","me2yan","yan2me","me2work","work2me","me2out","out2me"];
// var renli_e=["me2in","in2me","me2yan","yan2me","me2cai","cai2me","me2work","work2me","me2out","out2me"];
// var yanfa_e=["me2in","in2me","me2cai","cai2me","me2ren","ren2me","me2work","work2me","me2out","out2me"];
// var name_zong=[caiwu_e,renli_e,yanfa_e];
// var name=name_zong[bumen];
// var str="data/E_out_in/Lzong"+bumen+".csv";
// d3.csv(str,function(csvdata){
// var mylineChart = echarts.init(document.getElementById('Content-E_out_in'),'dark');
// var dataset=[];
// // for(var i=0;i<csvdata.length;i++){
//     for(var j=0;j<name.length;j++){
//      dataset[j]={value:parseInt(csvdata[true_id][name[j]]),name:name[j]};
//     }
// option = {
//     // legend: {
//     //     x : 'center',
//     //     y : 'bottom',
//     //     data:name
//     // },
//     color:["#0EC3F1","#0EC3F1","#D26BE4","#D26BE4","#88E14F","#88E14F","#E7A45C","#E7A45C","#AB2137","#AB2137"],
//     // toolbox: {
//     //     show : true,
//     //     feature : {
//     //         mark : {show: true},
//     //         dataView : {show: true, readOnly: false},
//     //         magicType : {
//     //             show: true,
//     //             type: ['pie', 'funnel']
//     //         },
//     //         restore : {show: true},
//     //         saveAsImage : {show: true}
//     //     }
//     // },
//     calculable : true,
//     series : [
//         {
//             name:'面积模式',
//             type:'pie',
//             radius : [30, 110],
//             roseType : 'area',
//             data:dataset,
//              label: {
//                 normal: {
//                     show: false
//                 },
//                 emphasis: {
//                     show: true
//                 }
//             },
//             lableLine: {
//                 normal: {
//                     show: false
//                 },
//                 emphasis: {
//                     show: true
//                 }
//             },
//             // data:[
//             //     {value:10, name:'rose1'},
//             //     {value:5, name:'rose2'},
//             //     {value:15, name:'rose3'},
//             //     {value:25, name:'rose4'},
//             //     {value:20, name:'rose5'},
//             //     {value:35, name:'rose6'},
//             //     {value:30, name:'rose7'},
//             //     {value:40, name:'rose8'},
//             //     {value:30, name:'rose9'},
//             //     {value:40, name:'rose10'}
//             // ]
//         }
//     ]
// };

// mylineChart.setOption(option,true)
// })
// }
