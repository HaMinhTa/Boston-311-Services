var width = 960,
height = 630;

d3.select("#bubbleChart").append(.svg)
    .attr("width", width)
    .attr("height", height)
  .attr("id", "primarySVG");

changeYear('2018';
$("label.cycleBtn").click(function()) {
  changeYear(this.id);
});

function changeYear(year){
  var CSV2012 = '2012.csv';
  var CSV2018 = '2018.csv';
  if (year === '2012'){
    var dataSource = CSV2012;
  } else {
    var dataSource = CSV2018;
  }
}
//???
d3.csv(dataSource, function(error, data){
data.sort(function(a,b) {return b.ratingClassValue - a.ratingClassValue;});

var svg = d3.select("#primarySVG");
