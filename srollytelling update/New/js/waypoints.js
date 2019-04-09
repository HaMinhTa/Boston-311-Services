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

var WAYPOINT = new Waypoint({
  element: document.querySelector("#trigger1"),
  handler: function(direction) {
    if(direction === "down") {
    d3.selectAll(".calls")
      .attr("fill", "#00ccff")
    } else if(direction === "up") {
    }
  }
});

var WAYPOINT2 = new Waypoint({
  element: document.querySelector("#trigger2"),
  handler: function(direction) {
    if(direction === "down") {
    d3.selectAll(".calls2")
      .attr("fill", "#ffbb33")
    } else if(direction === "up") {
    }
  }
});

var WAYPOINT2 = new Waypoint({
  element: document.querySelector("#trigger3"),
  handler: function(direction) {
    if(direction === "down") {
    d3.selectAll(".circle")
      .attr("r", function(d) {
        if (d.year === 2015) {
          return "15";
        } else {
          return "8";
        }
      })
      .attr("stroke-width", function(d) {
        if (d.year === 2015) {
          return "4";
        } else {
          return "1";
        }
      })
      .attr("fill", function(d) {
        if (d.year === 2015) {
          return "orange";
        } else {
          return "#00ccff";
        }
      })
    } else if(direction === "up") {
    }
  }
});
