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

/* ----- BARCHART 2012 CALLS ----- */
var WAYPOINT0 = new Waypoint({
  element: document.querySelector("#triggerBarChart2012"),
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

/* ----- BARCHART 2018 CALLS ----- */
var WAYPOINT1 = new Waypoint({
  element: document.querySelector("#triggerBarChart2018"),
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

/* ----- LINECHART ----- */
var WAYPOINT2 = new Waypoint({
  element: document.querySelector("#triggerLineChart"),
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

/* ----- PIE CHART ----- */
var WAYPOINT3 = new Waypoint({
  element: document.querySelector("#triggerPieChart"),
  handler: function(direction) {
    if(direction === "down") {
      var pie = new d3pie("#piechart", {
        	"header": {
        		"title": {
        			"text": "Boston 311 Medium of Calls",
        			"color": "#ffffff",
        			"fontSize": 26,
        			"font": "open sans"
        		},
        		"subtitle": {
        			"text": "How Bostonians request 311 services",
        			"color": "#999999",
        			"fontSize": 16,
        			"font": "open sans"
        		},
        		"titleSubtitlePadding": 12
        	},
        	"footer": {
        		"color": "#999999",
        		"fontSize": 10,
        		"font": "open sans",
        		"location": "bottom-left"
        	},
        	"size": {
        		"canvasHeight": 720,
        		"canvasWidth": 800,
        		"pieOuterRadius": "93%"
        	},
        	"data": {
        		"content": [
        			{
        				"label": "Citizen Connect App",
        				"value": 330570,
        				"color": "#00c9ff"
        			},
        			{
        				"label": "City Worker App",
        				"value": 110319,
        				"color": "#128bd7"
        			},
        			{
        				"label": "Constituent Calls",
        				"value": 459601,
        				"color": "#fbe901"
        			},
        			{
        				"label": "Employee Generated",
        				"value": 72299,
        				"color": "#eb14dc"
        			},
        			{
        				"label": "Maximo Integration",
        				"value": 4104,
        				"color": "#ff0035"
        			},
        			{
        				"label": "Self Service",
        				"value": 70124,
        				"color": "#00f897"
        			},
        			{
        				"label": "Twitter",
        				"value": 1558,
        				"color": "#2426e6"
        			}
        		]
        	},
        	"labels": {
        		"outer": {
        			"pieDistance": 26
        		},
        		"inner": {
        			"hideWhenLessThanPercentage": 1
        		},
        		"mainLabel": {
        			"color": "#f0ebeb",
        			"fontSize": 15
        		},
        		"percentage": {
        			"color": "#ffffff",
        			"fontSize": 18,
        			"decimalPlaces": 1
        		},
        		"value": {
        			"color": "#adadad",
        			"fontSize": 15
        		},
        		"lines": {
        			"enabled": true
        		},
        		"truncation": {
        			"enabled": true
        		}
        	},
        	"tooltips": {
        		"enabled": true,
        		"type": "placeholder",
        		"string": "{label}: {value} calls, {percentage}%",
        		"styles": {
        			"backgroundColor": "#121313",
        			"backgroundOpacity": 0.48,
        			"color": "#eeecec",
        			"borderRadius": 3,
        			"fontSize": 15,
        			"padding": 5
        		}
        	},
        	"effects": {
        		"pullOutSegmentOnClick": {
        			"effect": "linear",
        			"speed": 400,
        			"size": 12
        		}
        	},
        	"misc": {
        		"gradient": {
        			"enabled": true,
        			"percentage": 100
        		}
        	}
        });
    } else if(direction === "up") {}
  }
});

/* ----- BUBBLE CHART ----- */
var WAYPOINT4 = new Waypoint({
  element: document.querySelector("#triggerBubbleChart"),
  offset: 100,
  handler: function(direction) {
    if(direction === "down") {
      noCategorization();
    } else if(direction === "up") {
      noCategorization();
    }
  }
});

/* ----- BUBBLE CHART CATEGORIZE BY YEAR ----- */
var WAYPOINT4b = new Waypoint({
  element: document.querySelector("#triggerBubbleChartYear"),
  offset: 100,
  handler: function(direction) {
    if(direction === "down") {
      categorizeByYear();
    } else if(direction === "up") {
      categorizeByYear();
    }
  }
});

/* ----- BUBBLE CHART CATEGORIZE BY TYPE */
var WAYPOINT4c = new Waypoint({
  element: document.querySelector("#triggerBubbleChartType"),
  offset: 100,
  handler: function(direction) {
    if(direction === "down") {
      categorizeByType();
    } else if(direction === "up") {
      categorizeByType();
    }
  }
});

/* ----- BALLOON CHART ----- */
var WAYPOINT6 = new Waypoint({
  element: document.querySelector("#triggerBalloonChart"),
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
