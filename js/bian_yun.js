///第一个参数是绘制的div，第二个参数是中间的线宽，第三参数是线的颜色
// draw_wordcloud_two(10,"black")

function draw_wordcloud_bian(user_id_1,user_id_2,linewidth,linecolor)
{
  var container_wordcloud="Content-Yun_bian";
  var divwidth=document.getElementById(container_wordcloud).scrollWidth/2-linewidth/2;
  var divheight=document.getElementById(container_wordcloud).scrollHeight;

  ///左边的文字云div
  document.getElementById(container_wordcloud).innerHTML = ""
  var leftword=d3.select("#"+container_wordcloud)
                .append("div")
                .attr("id","leftword")
      document.getElementById("leftword").style.width=divwidth+"px";
      document.getElementById("leftword").style.height=divheight+"px";
      document.getElementById("leftword").style.float="left";

  ////画线
  var centerline=d3.select("#"+container_wordcloud)
                .append("div")
                .attr("id","centerline")
                .append("svg")
                .attr("width",linewidth)
                .attr("height",divheight)
                .append("line")
                .attr("x1",0)
                .attr("y1",0)
                .attr("x2",0)
                .attr("y2",divheight)
                .attr("stroke",linecolor)
                .attr("stroke-width",linewidth)    
      document.getElementById("centerline").style.float="left";

  ///右边的文字云div
  var rightword=d3.select("#"+container_wordcloud)
                .append("div")
                .attr("id","rightword")
      document.getElementById("rightword").style.width=divwidth+"px";
      document.getElementById("rightword").style.height=divheight+"px";
      document.getElementById("rightword").style.float="left";

  ///绘制文字云，第一个参数是div的id，第二个参数是文件的路径
  // console.log("data/yun/in_"+user_id+".csv");
  draw_cloudword("leftword","data/bian_yun/"+nl+"/"+user_id_1+"_"+user_id_2+".csv")
  draw_cloudword("rightword","data/bian_yun/"+nl+"/"+user_id_2+"_"+user_id_1+".csv")


  function draw_cloudword(container,file)
  {
    document.getElementById(container).innerHTML='';
    function type(d){
      d.count=+d.count;
      d.name=d.name;
      return d;
    }

    d3.csv(file,type,function(data) {
      var margin = {top: 30, right: 10, bottom:20, left: 10};
      var width= document.getElementById(container).scrollWidth;
      var height= document.getElementById(container).scrollHeight;
      width = width - margin.left - margin.right,
      height = height - margin.top - margin.bottom;

     var color = d3.interpolate( "#FF8235","#30E8BF");//d3.interpolate('#BDFFF3','#4AC29A');
      var fontSize = d3.scale.pow().exponent(5)
                        .domain([d3.min(data,function(d){return d.count}),d3.max(data,function(d){return d.count})])
                        .range([20,30]);////设置字体大小，如果太大有的单词不显示!!!!!!!!!!!!!

      var layout = d3.layout.cloud()
          .timeInterval(10)
          .size([width, height])
          .words(data)
          .rotate(function(d) { return 0; })
          .font('SimHei')///设置字体
          .fontSize(function(d,i) { return fontSize(d.count); })
          .text(function(d) { return d.name; })
          .spiral("archimedean")
          .on("end", draw)
          .start();

      var svg = d3.select("#"+container).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      if(container=="leftword"){
             var in_b=svg.append("text")
                        .attr("x",width/2)
                        .attr("y",0)
                        .attr("font-size",20)
                        .attr("font-family","simsun")
                        .style("fill",'#B2DFEE')  
                         .style("text-shadow","0px 0px 2px #00a0ff")
                         .style("font-family","sans-serif")
                        .attr("font-weight","bolder")
                        .attr("text-anchor", "middle")
                        .text(zong[nl][user_id_1]+"→"+zong[nl][user_id_2]);
          }else{
            var in_b=svg.append("text")
                       .attr("x",width/2)
                        .attr("y",0)
                        .attr("font-size",20)
                        .attr("font-family","simsun")
                        .style("fill",'#B2DFEE')  
                         .style("text-shadow","0px 0px 2px #00a0ff")
                         .style("font-family","sans-serif")
                        .attr("font-weight","bolder")
                        .attr("text-anchor", "middle")
                        .text(zong[nl][user_id_1]+"←"+zong[nl][user_id_2]);
          }


      var wordcloud = svg.append("g")
          .attr('class','wordcloud')
          .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

      function draw(words) {
          wordcloud.selectAll("text")
            .data(words)
            .enter().append("text")
            .attr('class','word')
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", function(d) { return d.font; })
            .style("font-weight",function(d){return 300;})
            .style("fill", function(d,i) { 
               return color(i/data.length)
            })
            .style("text-shadow","0px 0px 3px #00a0ff")
            .attr("text-anchor", "middle")
            .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
            .text(function(d) { return d.text; });
      };

    });
  }
}