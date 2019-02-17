var nl=2;
var out_in=0;
var yuangong=[];
var user_now;
var caiwu=[1041,1108,1124,1137,1180,1186,1213,1226,1248,1253,1255,1293,1327,1342,1346,1347,1368,1369,1370,1431,1439,1451,1467,1498];
var renli=[1013,1104,1110,1118,1149,1165,1184,1249,1251,1295,1300,1312,1363,1371,1378,1433,1473,1499];
var yanfa=[1007,1057,1058,1059,1060,1067,1068,1079,1080,1087,1092,1096,1098,1100,1101,1102,1103,1106,1112,1113,1115,1119,1125,1126,1127,1129,1130,1132,1134,1135,1139,1140,1141,1142,1143,1145,1147,1148,1150,1151,1152,1153,1154,1155,1156,1159,1163,1164,1167,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1181,1182,1183,1189,1191,1192,1193,1194,1195,1197,1199,1200,1202,1204,1205,1206,1207,1209,1210,1211,1216,1217,1219,1220,1221,1223,1224,1228,1230,1231,1233,1234,1238,1239,1241,1243,1244,1245,1246,1252,1254,1257,1261,1262,1263,1265,1267,1268,1270,1273,1274,1275,1277,1278,1279,1281,1282,1283,1284,1286,1287,1290,1291,1296,1297,1299,1301,1303,1304,1305,1306,1307,1308,1311,1313,1314,1315,1319,1321,1322,1323,1324,1325,1326,1328,1330,1332,1333,1334,1336,1338,1339,1340,1343,1344,1345,1348,1349,1350,1351,1352,1354,1355,1356,1357,1359,1360,1361,1362,1364,1365,1367,1373,1374,1376,1379,1380,1381,1382,1383,1384,1385,1388,1389,1390,1391,1393,1394,1395,1396,1397,1398,1399,1401,1402,1403,1404,1405,1406,1408,1409,1410,1411,1416,1417,1420,1421,1422,1423,1424,1425,1428,1429,1434,1435,1436,1438,1440,1444,1445,1446,1449,1450,1455,1456,1457,1458,1459,1460,1461,1462,1464,1465,1466,1469,1470,1471,1474,1475,1477,1478,1480,1481,1482,1483,1484,1486,1487,1489,1490,1491,1493,1494,1495,1496,1497,1500];
var zong=[caiwu,renli,yanfa];
yuangong=zong[nl];
selectableForceDirectedGraph(nl,out_in);
function selectableForceDirectedGraph(nl,out_in) {

    document.getElementById("Content-youjian").innerHTML = "";
    var path_n=[["data/lidao_in/net_0.json","data/lidao_in/net_1.json","data/lidao_in/net_2.json"],
              ["data/lidao_out/net_0.json","data/lidao_out/net_1.json","data/lidao_out/net_2.json"]];
    var path_shang=[["data/shang/shang_in_fa_0.csv","data/shang/shang_in_fa_1.csv","data/shang/shang_in_fa_2.csv"],
              ["data/shang/shang_out_0.csv","data/shang/shang_out_1.csv","data/shang/shang_out_2.csv"]]
    var height=document.getElementById("Content-youjian").scrollHeight;
    var width=document.getElementById("Content-youjian").scrollWidth;
    var shiftKey, ctrlKey;
    var nodeGraph = null;
    var xScale = d3.scale.linear()
    .domain([0,width]).range([0,width]);
    var yScale = d3.scale.linear()
    .domain([0,height]).range([0, height]);

    var svg = d3.select("#Content-youjian")
    .attr("tabindex", 1)
    .on("keydown.brush", keydown)
    .on("keyup.brush", keyup)
    .each(function() { this.focus(); })
    .append("svg")
    .attr("width", width)
    .attr("height", height);


    ////////添加光晕
    function createDefs(defs) {
    var filter = svg.append("defs")
      .append("filter")
        .attr("id", "blur")
      .append("feGaussianBlur")
        .attr("stdDeviation", 3);
        var defs = svg.append("defs");
        var filter = defs.append("filter")
                        .attr("id", "blur")
        filter.append("feColorMatrix")
            .attr("type", "matrix")
            .attr("values", "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0");
        filter.append("feGaussianBlur")
            .attr("stdDeviation", 3)
            .attr("result", "coloorangeBlur");
        var feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode")
            .attr("in", "coloorangeBlur")
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");
    var dropShadowFilter = defs.append('svg:filter')
          .attr('id', 'dropShadow')
          .attr('filterUnits', "userSpaceOnUse")
          .attr('width', '250%')
          .attr('height', '250%');
        dropShadowFilter.append('svg:feGaussianBlur')
          .attr('in', 'SourceGraphic') 
          .attr('stdDeviation', 3)
          .attr('result', 'blur-out'); 
        dropShadowFilter.append('svg:feColorMatrix')
          .attr('in', 'blur-out') 
          .attr('type', 'hueRotate')
          .attr('values', 10)  
          .attr('result', 'color-out'); 
        dropShadowFilter.append('svg:feOffset')
          .attr('in', 'color-out')
          .attr('dx', 0)
          .attr('dy', 0)
          .attr('result', 'the-shadow');
        dropShadowFilter.append('svg:feBlend')
          .attr('in', 'SourceGraphic')
          .attr('in2', 'the-shadow')
          .attr('mode', 'normal');
    }
     createDefs(svg.append('svg:defs'));


    var zoomer = d3.behavior.zoom().
        scaleExtent([0.1,10]).
        x(xScale).
        y(yScale).
        on("zoomstart", zoomstart)
        .on("zoom", function(){
            orangeraw();
            // xusahobin
            // createDefs(svg.append('svg:defs'));
        });
        

        // on("zoom", orangeraw);

    function zoomstart() {
        node.each(function(d) {
            d.selected = false;
            d.previouslySelected = false;
        });
        node.classed("selected", false);
    }

    function orangeraw() {
        vis.attr("transform",
                 "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
    }


    var brusher = d3.svg.brush()
    //.x(d3.scale.identity().domain([0, width]))
    //.y(d3.scale.identity().domain([0, height]))
    .x(xScale)
    .y(yScale)
    .on("brushstart", function(d) {
        node.each(function(d) {
            d.selected = false;
            d.previouslySelected = false;
        });
        node.classed("selected", false);

        
        node.each(function(d) { 
            d.previouslySelected = shiftKey && d.selected; });
    })
    .on("brush", function() {
        var extent = d3.event.target.extent();

        node.classed("selected", function(d) {
            return d.selected = d.previouslySelected ^
            (extent[0][0] <= d.x && d.x < extent[1][0]
             && extent[0][1] <= d.y && d.y < extent[1][1]);
        });
    })
    .on("brushend", function() {
        d3.event.target.clear();
        yuangong=[];
        for(var i=0;i<d3.selectAll(".selected")[0].length;i++){
            var num=parseInt(d3.selectAll(".selected")[0][i].__data__.id);
            yuangong.push(zong[nl][num]);
        }
        user_now=undefined;

          // d3.select("#Content-DOWN-LEFT").style("display","none");
          // d3.select("#Content-DOWN-LEFT_1").style("display","block");
          // d3.select("#Content-DOWN-RIGHT-PX").style("display","none");
          // d3.select("#Content-DOWN-RIGHT-LEFT").style("display","block");
          // d3.select("#Content-DOWN-RIGHT-RIGHT").style("display","block");

          d3.select("#Content-DOWN-LEFT").style("display","block");
          d3.select("#Content-DOWN-LEFT_1").style("display","none");
          d3.select("#Content-DOWN-RIGHT-PX").style("display","block");
          d3.select("#Content-DOWN-RIGHT-LEFT").style("display","none");
          d3.select("#Content-DOWN-RIGHT-RIGHT").style("display","none");
            draw_shangxia_duoren(date_index,yuangong);
            // draw_pingxing("L_1246")


        d3.select(this).call(d3.event.target);

    });

    var svg_graph = svg.append('svg:g')
    .call(zoomer)
    //.call(brusher)

    var rect = svg_graph.append('svg:rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'transparent')
    //.attr('opacity', 0.5)
    .attr('stroke', 'transparent')
    .attr('stroke-width', 1)
    //.attr("pointer-events", "all")
    .attr("id", "zrect")

    var brush = svg_graph.append("g")
    .datum(function() { return {selected: false, previouslySelected: false}; })
    .attr("class", "brush");

    var vis = svg_graph.append("svg:g");

    // vis.attr('fill', 'orange')
    // .attr('stroke', 'black')
    // .attr('stroke-width', 10)
    // // .attr('opacity', 0.5)
    // .attr('id', 'vis')


    brush.call(brusher)
    .on("mousedown.brush", null)
    .on("touchstart.brush", null) 
    .on("touchmove.brush", null)
    .on("touchend.brush", null); 

    brush.select('.background').style('cursor', 'auto');

    var link = vis.append("g")
    .attr("class", "link")
    .selectAll("line");

    var node = vis.append("g")
    .attr("class", "node")
    .style("stroke-width",0.1)
    .selectAll();


     var text = vis.append("g")
                .attr("class","text")
                .selectAll();


    center_view = function() {
        // Center the view on the molecule(s) and scale it so that everything
        // fits in the window

        if (nodeGraph === null)
            return;

        var nodes = nodeGraph.nodes;

        //no molecules, nothing to do
        if (nodes.length === 0)
            return;

        // Get the bounding box
        min_x = d3.min(nodes.map(function(d) {return d.x;}));
        min_y = d3.min(nodes.map(function(d) {return d.y;}));

        max_x = d3.max(nodes.map(function(d) {return d.x;}));
        max_y = d3.max(nodes.map(function(d) {return d.y;}));


        // The width and the height of the graph
        mol_width = max_x - min_x;
        mol_height = max_y - min_y;

        // how much larger the drawing area is than the width and the height
        width_ratio = width / mol_width;
        height_ratio = height / mol_height;

        // we need to fit it in both directions, so we scale according to
        // the direction in which we need to shrink the most
        min_ratio = Math.min(width_ratio, height_ratio) * 0.8;

        // the new dimensions of the molecule
        new_mol_width = mol_width * min_ratio;
        new_mol_height = mol_height * min_ratio;

        // translate so that it's in the center of the window
        x_trans = -(min_x) * min_ratio + (width - new_mol_width) / 2;
        y_trans = -(min_y) * min_ratio + (height - new_mol_height) / 2;


        // do the actual moving
        vis.attr("transform",
                 "translate(" + [x_trans, y_trans] + ")" + " scale(" + min_ratio + ")");

                 // tell the zoomer what we did so that next we zoom, it uses the
                 // transformation we enteorange here
                 zoomer.translate([x_trans, y_trans ]);
                 zoomer.scale(min_ratio);

    };
    function dragended(d) {
        //d3.select(self).classed("dragging", false);
        node.filter(function(d) { return d.selected; })
        .each(function(d) { d.fixed &= ~6; })

    }

    d3.json(path_n[out_in][nl], function(error, graph) {
        d3.csv(path_shang[out_in][nl],function(error,shangdata){
            d3.csv("data/lianjie/L"+nl+".csv",function(error,lianjie){
        var lianjie_zong=[];
        for(var i=0;i<lianjie.length;i++){
            lianjie_zong[i]=[];
            var lie="L"+i;
            for(var j=0;j<lianjie.length;j++){
                if(lianjie[j][lie]!=0){
                    lianjie_zong[i].push(j);
                }
             }
        }


        var data_shang=[];
        for( var i=0; i<shangdata.length; i++ ){ 
          data_shang[i] = shangdata[i].shang;  
        }
        var max_shang = Math.max.apply(Math, data_shang);
        var min_shang = Math.min.apply(Math, data_shang);
        var bian_dian_max=[[78,1290,84,965,64,709],[78,1325,101,1101,10367,10588]];
        // var b = "#30E8BF"//"#1fddff"//"#00C9FF"//"#00fcae"    //红色
        // var a = "#FF8235"//"#ff4b1f"//"#92FE9D"//'#006388'
        var linear_shang = d3.scale.linear()
                .domain([min_shang, max_shang])
                .range([0,1]);
// yyy
        var  bian_1=[0.5,0.5,1]
        var linear_bian = d3.scale.linear()
                .domain([0, bian_dian_max[out_in][nl*2]])
                .range([0,bian_1[nl]]);
         
        var compute_shang = d3.interpolate( "#30E8BF","#FF8235");
        var linear = d3.scale.linear()
        .domain([0,bian_dian_max[out_in][nl*2+1]])
        .range([5,15]);
        var color = d3.scale.category10();

        nodeGraph = graph;
        graph.links.forEach(function(d) {
            d.source = graph.nodes[d.source];
            d.target = graph.nodes[d.target];
        });





        link = link.data(graph.links).enter().append("line")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })
        .attr("stroke","white")//
        .attr("opacity",0.5)
        .attr("id",function(d){

            // if(d.source.id<d.target.id){
                // console.log(d.source.id+"_"+d.target.id)
                return "link"+d.source.id+"_"+d.target.id;
            // }else{
                // return d.target.id+"_"+d.source.id ;
            // }
            }) 
        .attr("stroke-width", function(d) { return linear_bian(d.value); })
        .on("mouseover",function(e){
            d3.select("#node_"+e.source.id)
              .attr("fill","orange");
            d3.select("#node_"+e.target.id)
              .attr("fill","orange");

            d3.select(this)
              .attr("stroke-width",function(d) { return 5; })
              .attr("stroke","orange");
        })
        .on("mouseout",function(e){
            d3.select("#node_"+e.source.id)
              .attr("fill",function(){
                return compute_shang(linear_shang(data_shang[e.source.id]))
              });
            // d3.select("#node_"+e.target.id)
            //   .attr("fill",function(){
            //     return compute_shang(linear_shang(data_shang[e.source.id]))
            //   });

            d3.select(this)
              .attr("stroke-width",function(d) { return linear_bian(d.value); })
              .attr("stroke","#cccccc");  

        })
        .on("click",function(e){
            d3.selectAll("#Container").style("opacity",0.9);
            console.log(e.source.id+"   "+e.target.id)
            d3.selectAll("#Content-Yun_bian").remove();
            var tooltip=d3.select("body").append("div") 
                          .attr("id","Content-Yun_bian") 
                          .on("click",function()
                          {
                            d3.selectAll("#Container").style("opacity",1);
                            d3.selectAll("#Content-Yun_bian").remove();
                          });
             draw_wordcloud_bian(e.source.id,e.target.id,10,"#298B92");
             tooltip.style("left", (d3.event.pageX+500) + "px")
                    .style("top", (d3.event.pageY + 20) + "px");
        });



        var charge_1=[-10000,-6000,-300];

        var force = d3.layout.force()
        .gravity(0.5)
        .linkStrength(1)
        .nodes(graph.nodes)
        .links(graph.links)
        .charge(charge_1[nl])
        .size([width, height])
        .start();

        function dragstarted(d) {
            d3.event.sourceEvent.stopPropagation();
            if (!d.selected && !shiftKey) {
                // if this node isn't selected, then we have to unselect every other node
                node.classed("selected", function(p) { return p.selected =  p.previouslySelected = false; });
            }

            d3.select(this).classed("selected", function(p) { d.previouslySelected = d.selected; return d.selected = true; });

            node.filter(function(d) { return d.selected; })
            .each(function(d) { d.fixed |= 2; })
        }

        function dragged(d) {
            node.filter(function(d) { return d.selected; })
            .each(function(d) { 
                d.x += d3.event.dx;
                d.y += d3.event.dy;

                d.px += d3.event.dx;
                d.py += d3.event.dy;
            })
            force.resume();
        }
//内外

        node = node.data(graph.nodes).enter().append("circle")
        .attr("r", function(d){
            
            if(d.group==0){
                return linear(d.value);
            }else{
                return 5;
            }
        })
        .attr("id", function(d) { return "node_"+d.id; })
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
        .attr("fill",function(d,i){
            if(d.group==0){
                return compute_shang(linear_shang(data_shang[i]))
            }else{
                console.log(d.group)
                return color(d.group)
            }
        })
       // .style("filter", "url(#dropShadow)")
        .on("mouseover",function(){
            var now=this.__data__.id;
            var str=lianjie_zong[this.__data__.id];
            d3.select("#node_"+now)
                  .attr("fill",function(){
                    return "red";
                  });
            for(var i=0;i<str.length;i++){
                d3.select("#node_"+str[i])
                  .attr("fill",function(){
                    return "#FFF8DC";
                  });
                if(now<str[i]){
                // var stroke_width_old=d3.select("#link"+now+"_"+str[i])
                  // .attr("stroke-width");
                d3.select("#link"+now+"_"+str[i])
                  // .attr("stroke-width",function(d) { return (stroke_width_old+5); })
                  .attr("stroke","orange").style("opacity",1);
                }else{
                // var stroke_width_old=d3.select("#link"+str[i]+"_"+now)
                //   .attr("stroke-width");
                  d3.select("#link"+str[i]+"_"+now)
                  // .attr("stroke-width",function(d) { return (stroke_width_old+5); })
                  .attr("stroke","orange").style("opacity",1);
              }
              }

        })
        .on("mouseout",function(e){
             var now=this.__data__.id;
            var str=lianjie_zong[this.__data__.id];
            d3.select("#node_"+now)
                  .attr("fill",function(){
                    return compute_shang(linear_shang(data_shang[now]));
                  });
            // console.log(this);
            for(var i=0;i<str.length;i++){
                d3.select("#node_"+str[i])
                  .attr("fill",function(){
                    return compute_shang(linear_shang(data_shang[str[i]]))
                  });
                if(now<str[i]){
                // var stroke_width_old=d3.select("#link"+now+"_"+str[i])
                //   .attr("stroke-width");

                d3.select("#link"+now+"_"+str[i])
                  // .attr("stroke-width",function(d) { return (stroke_width_old-5); })
                  .attr("stroke","#cccccc").style("opacity",0.3);
                }else{
                // var stroke_width_old=d3.select("#link"+str[i]+"_"+now)
                //   .attr("stroke-width");
                  d3.select("#link"+str[i]+"_"+now)
                  // .attr("stroke-width",function(d) { return (stroke_width_old-5); })
                  .attr("stroke","#cccccc").style("opacity",0.3);
              }
            }
        })
        // .on("dblclick", function(d) { d3.event.stopPropagation(); })
        .on("click", function(d) {
            
            user_now=zong[nl][d.id]
            // user_now=1487
           console.log(user_now)
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



            if (d3.event.defaultPrevented) return;

            if (!shiftKey) {
                //if the shift key isn't down, unselect everything
                node.classed("selected", function(p) { return p.selected =  p.previouslySelected = false; })
            }

            // always select this node
            d3.select(this).classed("selected", d.selected = !d.previouslySelected);
        })
      /*  .on("click", function(d) {
          d3.select("#Content-DOWN-LEFT").style("display","none");
          d3.select("#Content-DOWN-LEFT_1").style("display","block");
          d3.select("#Content-DOWN-RIGHT-PX").style("display","none");
          d3.select("#Content-DOWN-RIGHT-LEFT").style("display","block");
          d3.select("#Content-DOWN-RIGHT-RIGHT").style("display","block");
          // d3.select("#Content-Funnel").style("display","none")
            user_now=zong[nl][d.id];
            draw_web(date_index,user_now);
            draw_error(zong[nl][d.id],date_index);
            draw_linechart("L_"+user_now);
        })*/
        .on("mouseup", function(d) {
            //if (d.selected && shiftKey) d3.select(this).classed("selected", d.selected = false);
        })
        .call(d3.behavior.drag()
              .on("dragstart", dragstarted)
              .on("drag", dragged)
              .on("dragend", dragended));


                    text = text.data(graph.nodes)
                        .enter()
                        .append("text")
                        .attr("transform",function(d){
                            var x = d.x;       //文字的x坐标
                            var y = d.y;       //文字的y坐标
                            return "translate(" + x + "," + y + ")";
                        })
                          .attr("dy", ".35em")
                          .attr("class", "text")
                          .style("font-size", 8 + "px")
                          .style("fill","#000")
                         .text(function(d) { return zong[nl][d.id]; })
                          .style("text-anchor", "middle");



       
              function tick() {
                  link.attr("x1", function(d) { return d.source.x; })
                  .attr("y1", function(d) { return d.source.y; })
                  .attr("x2", function(d) { return d.target.x; })
                  .attr("y2", function(d) { return d.target.y; });

                  node.attr('cx', function(d) { return d.x; })
                  .attr('cy', function(d) { return d.y; });

                  text.attr("transform",function(d){
                            var x = d.x;       //文字的x坐标
                            var y = d.y;       //文字的y坐标
                            return "translate(" + x + "," + y + ")";
                        });
              };

              force.on("tick", tick);
               });
            });
        // node.append("text")
        //     .attr("text-anchor","middle")
        //     .style("font-size",1)
        //     .text(function(d){
        //         return d.id;
        //     })

    });


    function keydown() {
        shiftKey = d3.event.shiftKey || d3.event.metaKey;
        ctrlKey = d3.event.ctrlKey;

        // console.log('d3.event', d3.event)

        if (d3.event.keyCode == 67) {   //the 'c' key
            center_view();
        }

        if (shiftKey) {
            svg_graph.call(zoomer)
            .on("mousedown.zoom", null)
            .on("touchstart.zoom", null)                                                                      
            .on("touchmove.zoom", null)                                                                       
            .on("touchend.zoom", null);                                                                       

            //svg_graph.on('zoom', null);                                                                     
            vis.selectAll('g.gnode')
            .on('mousedown.drag', null);

            brush.select('.background').style('cursor', 'crosshair')
            brush.call(brusher);
        }
    }

    function keyup() {
        shiftKey = d3.event.shiftKey || d3.event.metaKey;
        ctrlKey = d3.event.ctrlKey;

        brush.call(brusher)
        .on("mousedown.brush", null)
        .on("touchstart.brush", null)                                                                      
        .on("touchmove.brush", null)                                                                       
        .on("touchend.brush", null);                                                                       

        brush.select('.background').style('cursor', 'auto')
        svg_graph.call(zoomer);
    }
}