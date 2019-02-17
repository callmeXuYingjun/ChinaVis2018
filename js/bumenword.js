///第一个参数是绘制的div，第二个参数是中间的线宽，第三参数是线的颜色
// draw_wordcloud_two(10,"black")


  draw_bumenword()



  function draw_bumenword()
  {
    var file="data/bumenword/word"+nl+".csv"
    var container="Content-bumenword"
    document.getElementById(container).innerHTML='';

    function type(d){
      d.count=+d.count;
      d.name=d.name;
      return d;
    }

    d3.csv(file,type,function(data) {
      
      var margin = {top: 20, right: 10, bottom:20, left: 10};
      var width= document.getElementById(container).scrollWidth;
      var height= document.getElementById(container).scrollHeight;
      width = width - margin.left - margin.right,
      height = height - margin.top - margin.bottom;
      var color = d3.interpolate( "#FF8235","#30E8BF");//橙绿
     // var color = d3.interpolate('#BDFFF3','#4AC29A');//蓝绿
    //  var color = d3.interpolate('#B2FEFA','#0ED2F7');
      var fontSize = d3.scale.pow().exponent(5)
                        .domain([d3.min(data,function(d){return d.count}),d3.max(data,function(d){return d.count})])
                        .range([10,25]);////设置字体大小，如果太大有的单词不显示!!!!!!!!!!!!!
     
      var layout = d3.layout.cloud()
          .timeInterval(10)
          .size([width, height-20])
          .words(data)
          .rotate(function(d) { return 0; })
          .font('sans-serif')///设置字体
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
var data_name=["财务","人力","研发"];
      var in_b=svg.append("text")
                  .attr("x",width/2)
                  .attr("y",0)
                 // .attr("font-size",20)
                  .attr("font-family","simsun")
                  .style("fill",'#B2DFEE')  
                   .style("text-shadow","0px 0px 2px #00a0ff")
                   .style("font-family","sans-serif")
                   .attr("text-anchor", "middle")
                  .attr("font-weight","bolder")
                  .text(data_name[nl]+"部门邮件主题");

     
      
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
            .style("font-weight",function(d){return 500;})
            .style("fill", function(d,i) { 
               return color(i/10)//color(i%10)
            })
           // .style("fill",'#B2DFEE')  
            .style("text-shadow","0px 0px 3px #00a0ff")
            .attr("text-anchor", "middle")
            .attr("transform", function(d) { return "translate(" + [d.x, d.y+20] + ")rotate(" + d.rotate + ")"; })
            .text(function(d) { return d.text; });
      };
    });
  }
