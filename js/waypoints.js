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

var WAYPOINT0 = new Waypoint({
  element: document.querySelector("#trigger1"),
  handler: function(direction) {
    if(direction === "down") {
    d3.selectAll(".calls")
      .transition()
      .attr("fill", "#00ccff")
    } else if(direction === "up") {
    d3.selectAll(".calls")
      .attr("fill", "black")
    }
  }
});

var WAYPOINT1 = new Waypoint({
  element: document.querySelector("#trigger2"),
  offset: 500,
  handler: function(direction) {
    if(direction === "down") {
    d3.selectAll(".calls2")
      .transition()
      .attr("fill", "#ffbb33")
    } else if(direction === "up") {
    d3.selectAll(".calls2")
      .attr("fill", "black")
    }
  }
});


var WAYPOINT2 = new Waypoint({
  element: document.querySelector("#trigger3"),
  offset: 100,
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
    d3.selectAll(".circle")
      .attr("r", "8")
      .attr("stroke-width", "1")
      .attr("fill", "#00ccff")
      }
}
});


var WAYPOINT3 = new Waypoint({
  element: document.querySelector("#trigger5a"),
  offset: 100,
  handler: function(direction) {
    if(direction === "down") {
      d3.selectAll(".bubble")
      simulation.force('x', forceJoin)
                .force('y', forceY)
                .alphaTarget(0.1)
                .restart()

    } else if(direction === "up") {
      d3.selectAll(".bubble")
      simulation.force('x', forceJoin)
                .force('y', forceY)
                .alphaTarget(0.1)
                .restart()
    }
  }
});

var WAYPOINT4 = new Waypoint({
  element: document.querySelector("#trigger5b"),
  offset: 100,
  handler: function(direction) {
    if(direction === "down") {
      d3.selectAll(".bubble")
      simulation.force('x', forceSplit)
                .force('y', forceY)
                .alphaTarget(0.3)
                .restart()

    } else if(direction === "up") {
      d3.selectAll(".bubble")
      simulation.force('x', forceSplit)
                .force('y', forceY)
                .alphaTarget(0.3)
                .restart()
    }
  }
});


var WAYPOINT5 = new Waypoint({
  element: document.querySelector("#trigger5c"),
  offset: 100,
  handler: function(direction) {
    if(direction === "down") {
      d3.selectAll(".bubble")
      simulation.force('x', forceSplitByCategoryX)
                .force('y', forceSplitByCategoryY)
                .alphaTarget(0.1)
                .restart()

    } else if(direction === "up") {
      d3.selectAll(".bubble")
      simulation.force('x', forceSplitByCategoryX)
                .force('y', forceSplitByCategoryY)
                .alphaTarget(0.1)
                .restart()
    }
  }
});

var WAYPOINT6 = new Waypoint({
  element: document.querySelector("#trigger4"),
  offset: 100,
  handler: function(direction) {
    if(direction === "down") {
      circle
        .transition()
        .duration(2500)
        .delay(20)
        .attr("cx",width/2)
        .attr("cy",height/2+20)
        .style("fill","orange")
        .attr("r",280)
    } else if(direction === "up") {
      circle
        .transition()
        .attr("r",0)
    }
  }
});
