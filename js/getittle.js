function draw_getittle(id)
{
	var container="Content_tooltip_tittle"
	document.getElementById(container).innerHTML='';
	var height=document.getElementById(container).scrollHeight;
	var width=document.getElementById(container).scrollWidth;
	var svg = d3.select("#"+container)
				.append("svg")
				.attr("width", width)
				.attr("height", height);
	var tittle=svg.append("text")
				.attr("x",width/2)
				.attr("y",15)
				.text(function(){
					//if(date_index==30)
						return "编号"+id+"员工信息11月概览";
					//else return "编号"+id+"员工信息11月"+date_index+"日概览";
				})
				.style("fill",'#B2DFEE')  
		       .style("text-shadow","0px 0px 2px #00a0ff")
		       .style("font-family","sans-serif")
		        .attr("text-anchor", "middle")
		        .style("font-size","15px")

	var close=svg.append("image")
            .attr("x",width-height*0.8)
            .attr("y",height*0.1)
            .attr("width",height*0.8)
            .attr("height",height*0.8)
            .attr("xlink:href",function(d){
                return "img/close.png"
            })
            .on("click",function()
	          { 
	            d3.selectAll("#Container").style("opacity",1);
	            d3.selectAll("#Content_tooltip").remove()
	          });
}
