    var margin = {top: 16, right: 16, bottom: 40, left: 80};
        width = 800 - margin.right - margin.left;
        height = 300 - margin.top - margin.bottom;

    var svg = d3.select("body")
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    var circle = svg.append("circle")
      .attr("cx", width/3)
      .attr("cy", height-50)
      .attr("r", 24)
      .attr("fill","#e6f2ff")
      .attr("stroke-width", 0)
      .on("mouseover", function(d,i) {
        d3.select(this).attr("fill", "#e6f2ff")
        tooltip.transition().duration(100)
        tooltip.html("Number of Calls in 2018: 14983")
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 50 + "px")
        .style("opacity", 1)
        .style("padding", "12px 14px");
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", "#8dd4dc")
        tooltip.html("")
        .style("padding", "0");
      });

    var circle2 = svg.append("circle")
      .attr("cx", width/3)
      .attr("cy", height-50)
      .attr("r", 24)
      .attr("fill","#00ccff")
      .on("mouseover", function(d,i) {
        d3.select(this).attr("fill", "grey")
        tooltip.transition().duration(100)
        tooltip.html("Number of Calls in 2012: 16")
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 50 + "px")
        .style("opacity", 1)
        .style("padding", "6px 8px");
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", "#00ccff")
        tooltip.html("")
        .style("padding", "0");
      });

    circle
      .transition()
      .duration(2500)
      .delay(20)
      .attr("cx",width/2)
      .attr("cy",height/2+20)
      .style("fill","#ffbb33")
      .attr("r",224);

    function animateValue(id, end) {
    var current = 0;
    var increment = 50;
    var stepTime = 1;
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current === 14900) {
          increment = 1;
        }
        if (current >= end) {
            clearInterval(timer);
            }
        }, stepTime);
      }

    //var number = svg.append("text").text("16")
    //  .attr("x", width/3)
      //.attr("y", height-50)
      //.attr("text-anchor", "middle")
      //.attr("fill", "black")
      //.attr("font-weight", "bold");
    //
    // var number2 = svg.append("#value")
    //   .attr("x", 550)
    //   .attr("y", height/2 + 100);

    //var text = svg.append("text").text("Code Enforcement Calls")
      //.attr("x", width/2)
      //.attr("y", height/2 + 60)
      //.attr("class", "charttitle")
      //.attr("fill", "black");


    animateValue("value", 14983);

    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "#cccccc");