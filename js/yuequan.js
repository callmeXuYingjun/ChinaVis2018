// draw_web(30,1013);
function draw_yue(yuan){
var path_temp="data/yichang_ip_user/L_"+yuan+".csv";
// console.log(path_temp);
document.getElementById("Content-YUE").innerHTML = "";
d3.csv(path_temp,function(csvwebdata){
var yuedata=[];
yuedata[0]=[];
yuedata[1]=[];
yuedata[2]=[];
yuedata[3]=[];
yuedata[4]=[];
yuedata[5]=[];
yuedata[6]=[];
yuedata[7]=[];
for(var i=0;i<csvwebdata.length;i++){
    yuedata[0].push(csvwebdata[i].proto);
    yuedata[1].push(csvwebdata[i].dip);
    yuedata[2].push(csvwebdata[i].dport);
    yuedata[3].push(csvwebdata[i].sip);
    yuedata[4].push(csvwebdata[i].sport);
    yuedata[5].push(csvwebdata[i].state);
    yuedata[6].push(csvwebdata[i].time);
    yuedata[7].push(csvwebdata[i].user);
}
console.log(yuedata);
var mtprotos = { "proto": yuedata[0], "dip": yuedata[1],"dport": yuedata[2], "sip": yuedata[3],"sport": yuedata[4], "state": yuedata[5],"time": yuedata[6], "user": yuedata[7]};


var width=document.getElementById("Content-YUE").scrollWidth;
var renderCell = function renderCell(rowIndex, colIndex) {
    var colname = Object.keys(mtprotos)[colIndex];
    return React.createElement(
        blueprintTable.Cell,{style:{backgroundColor:"#002D44",color:"white"}},
        null,
        "" + mtprotos[colname][rowIndex]
    );
};

var columns = Object.keys(mtprotos).map(function (colname) {
    return React.createElement(blueprintTable.Column, { name: colname, renderCell: renderCell,style:{color:"#white"} });
});

var tbl = React.createElement(
    blueprintTable.Table,
    { numRows: mtprotos["proto"].length,
    columnWidths:[width*0.5/8,width*1/8,width*0.5/8,width*1.2/8,width*1/8,width*1/8,width*1.7/8,width*1/8],
    backgroundColor:"#002D44"
    // 
     },
    columns,
    // blueprintTable.Cell,{
    //     style:{"backgroundColor":"red"}
    // }
);

ReactDOM.render(tbl, document.querySelector("#Content-YUE"));
});
}