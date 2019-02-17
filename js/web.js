// draw_web(30,1013);
function draw_web(day,id){
var path_temp="data/web/"+day+"_"+id+".csv";
// console.log(path_temp);
document.getElementById("Content_geweb").innerHTML = "";
d3.csv(path_temp,function(csvwebdata){
var webdata=[];
webdata[0]=[];
webdata[1]=[];
for(var i=0;i<csvwebdata.length;i++){
    webdata[0].push(csvwebdata[i].name);
    webdata[1].push(csvwebdata[i].count);
}
var mtwebsites = { "website": webdata[0], "count": webdata[1]};


var width=document.getElementById("Content_geweb").scrollWidth;
var renderCell = function renderCell(rowIndex, colIndex) {
    var colname = Object.keys(mtwebsites)[colIndex];
    return React.createElement(
        blueprintTable.Cell,{style:{color:"#ccc"}},
        null,
        "" + mtwebsites[colname][rowIndex]
    );
};

var columns = Object.keys(mtwebsites).map(function (colname) {
    return React.createElement(blueprintTable.Column, { name: colname, renderCell: renderCell });
});

var tbl = React.createElement(
    blueprintTable.Table,
    { numRows: mtwebsites["website"].length,
    columnWidths:[width*3.5/6,width*2/6],
    backgroundColor:"#002D44"
    // 
     },
    columns,
    // blueprintTable.Cell,{
    //     style:{"backgroundColor":"red"}
    // }
);

ReactDOM.render(tbl, document.querySelector("#Content_geweb"));
});
}