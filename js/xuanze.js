xuanze();
function xuanze(){
var dataset_bili = [24,18,257];
var height=document.getElementById("Content-xuanze").scrollHeight;
var width=document.getElementById("Content-xuanze").scrollWidth;
var svg = d3.select("#Content-xuanze")
			.append("svg")
			.attr("width", width)
			.attr("height", height);
 

    var data_name=["财务","人力","研发"];
        // var pie = d3.layout.pie();
        // var piedata = pie(dataset_bili);
        // var outerRadius = height/2;  //外半径
        // var innerRadius = height/4;    //内半径，为0则中间没有空白
        // var arc = d3.svg.arc()  //弧生成器
        //             .innerRadius(innerRadius)   //设置内半径
        //             .outerRadius(outerRadius);  //设置外半径
        
        // var color = d3.scale.category10();
        
        // var arcs = svg.selectAll("g")
        //               .data(piedata)
        //               .enter()
        //               .append("g")
        //               .attr("transform","translate("+ width*9/10 +","+ height/2 +")");
                      
        // arcs.append("path")
        //     .attr("fill",function(d,i){
        //         return color(i);
        //     })
        //     .attr("d",function(d){
        //         return arc(d);
        //     })
        //     .on("click",function(d,i){
        //         nl=i;
        //         draw_chi_kuang_ci();
        //     	selectableForceDirectedGraph(i,1);
        //     });
        var kuandu=[40,35,200]//[12,9,128.5];
        var kuandu_x=[0,kuandu[0],kuandu[0]+kuandu[1]];
        var color_bumen=["#00e9a9",'#ffc000',"#006599"];
        
      /*  var backrect=svg.selectAll(".MyRectback")
        .data(dataset_bili)
        .enter()
        .append("rect")
        .attr("class","MyRect")
        .attr("transform","translate(" + width*1/10+ "," + height/8 + ")")
        .attr("x", function(d,i){
            return width/10*i+kuandu_x[i];
        })
        .attr("y",function(d,i){
            return 0;
        })
        .attr("width", function(d,i){
            return  kuandu[i];
        })
        .attr("height", function(d){
            return  height;
        })
        .attr("fill","#FFF")
        .attr("opacity",0.2)
*/


        var rects = svg.selectAll(".MyRect")
        .data(dataset_bili)
        .enter()
        .append("rect")
        .attr("class","MyRect")
        .attr("transform","translate(" + width*1/15+ "," + height/8 + ")")
        .attr("x", function(d,i){
            return width/15*i+kuandu_x[i];
        })
        .attr("y",function(d,i){
            return 10;
        })
        .attr("width", function(d,i){
            return  kuandu[i];
        })
        .attr("height", function(d){
            return  height/5;
        })
        .attr("fill",function(d,i){
            return color_bumen[i];
        })
        .on("click",function(d,i){
             nl=i;
            // draw_pingxing();
             draw_shangxia_duoren(date_index,zong[nl])
             draw_chi_kuang_ci();
             draw_kuanggong();
             draw_cizhi()
             draw_calendar();
             draw_bumenword()
             selectableForceDirectedGraph(i,0);
      });
      var words = svg.selectAll(".t")
        .data(data_name)
        .enter()
        .append("text")
        .attr("transform","translate(" + width*1/15+ "," + height/3*2 + ")")
        .attr("x", function(d,i){
           
            return width/15*i+kuandu_x[i]+kuandu[i]/2;
        })
        .attr("y",function(d,i){
            return 10;
        })
       .text(function(d){return d})
       .style("fill",'#B2DFEE')  
       .style("text-shadow","0px 0px 2px #00a0ff")
       .style("font-family","sans-serif")
       .attr("text-anchor", "middle")

    /*   var backrect=svg.selectAll(".MyRectback")
        .data(dataset_bili)
        .enter()
        .append("rect")
        .attr("class","MyRect")
        .attr("transform","translate(" + width*1/15+ "," + height/8 + ")")
        .attr("x", function(d,i){
            return width/15*i+kuandu_x[i]-3;
        })
        .attr("y",function(d,i){
            return 0;
        })
        .attr("width", function(d,i){
            return  kuandu[i]+6;
        })
        .attr("height", function(d){
            return  height;
        })
        .attr("fill","#FFF")
        .attr("opacity",0.2)
*/
}