 draw_tree();
function draw_tree() {
// document.getElementById("Content-TOP-LEFT-DOWN").innerHTML = "";
var Chart_tree = echarts.init(document.getElementById('Content-zuzhi'),'dark');
  // Chart_tree.showLoading();
var rscale = d3.scale.log()
                        .domain([100,398])
                        .range([10,40]);
d3.json("data/tree/L"+4+".json", function(error, data) {
// Chart_tree.hideLoading();
    option_tree = {
       // backgroundColor:'rgba(128, 128, 128, 0.1)',
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series:[
            {
                type: 'tree',
                layout:'radial',
                data: [data],

                left: '8%',
                right: '8%',
                top: '8%',
                bottom: '8%',

                symbol: 'diamond',
                symbolSize:function(value, params) {

               return rscale(params.data.num+100);
            },
              //  orient: 'vertical',

                expandAndCollapse: true,
                
                lineStyle:{
                    normal: {
                    color:'#fff',//'#189cbb',
                    ShadowColor:"#00a0ff",
                    ShadowBlur:2,
                    width:2,
                    curveness:0.9,
                    opacity:0.8,
                     }
                },
                itemStyle:{
                    normal:{
                        borderWidth:0,
                        borderColor:'#fff',
                        color:function(d){
                            
                            if(d.data.bumen==0) return "#00e9a9";
                            if(d.data.bumen==1) return '#ffc000';
                            if(d.data.bumen==2) return "#006599";
                        },
                        ShadowColor:"#00a0ff",
                        ShadowBlur:20,
                    }
                },
                label: {
                    normal: {
                        position: 'top',
                        rotate: 0,
                        verticalAlign: 'middle',
                        align: 'right',
                         color:'#B2DFEE',
            textShadowColor:"#00a0ff",
            textShadowBlur:2,
                        //fontSize: 1
                    }
                },

                leaves: {
                    symbolSize:3,
                    label: {
                        normal: {
                            show:false,
                            position: 'bottom',
                            rotate: 0,
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                animationDurationUpdate: 750
            }
        ]
    };
Chart_tree.setOption(option_tree,true);


});

}
