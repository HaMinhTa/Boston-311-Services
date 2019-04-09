/*

Template for Waypoint trigger:

var WAYPOINT = new Waypoint({
  element: document.querySelector(SELECTION),
  handler: function(direction) {
    if(direction === "down") {

      <-- ACTION GOES HERE FOR DOWNWARD SCROLLING-->

    } else if(direction === "up") {

      <-- ACTION GOES HERE FOR UPWARD SCROLLING -->

    }
  }
});

*/

var waypoint1 = new Waypoint({
  element: document.querySelector("#trigger1"),
  handler: function(direction) {
    if(direction === "down") {
    document.querySelector("#barchart")
      chart1.transition()
      .attr("height", function(d) {return height - margin.bottom - yScale(d.calls);})
      .attr("y", function(d) {return yScale(d.calls); })
       .delay(function(d,i) {
         return i * 150;
       });


});

var waypoint2 = new Waypoint({
  element: document.querySelector("#trigger2"),
  handler: function(direction) {
    if(direction === "down") {
    document.querySelector("#barchart")
      chart2.transition()
        .attr("height", function(d) {return height - margin.bottom - yScale(d.calls2);})
        .attr("y", function(d) {return yScale(d.calls2); })
        .delay(2000)


});
