

  // Sample change
  // Generate svg

  var margin = {top: 20, right: 20, bottom: 60, left: 50};
      width = 800;
      height = 400;
 // Another sample change - making the comment longer
  var svg = d3.select("#barchart")
      .append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Define data

  var data = [
    {area: "Allston", calls: 0.486, calls2: 0.534},
    {area: "Downtown", calls: 0.323, calls2: 0.306},
    {area: "Mattapan", calls: 0.275, calls2: 0.295},
    {area: "Back Bay", calls: 0.262, calls2: 0.277},
    {area: "West Roxbury", calls: 0.245, calls2: 0.301},
    {area: "Beacon Hill", calls: 0.226, calls2: 0.377},
    {area: "Roslindale", calls: 0.217, calls2: 0.206},
    {area: "Jamaica Plain", calls: 0.201, calls2: 0.227},
    {area: "Roxbury", calls: 0.196, calls2: 0.238},
    {area: "South Boston", calls: 0.195, calls2: 0.197},
    {area: "Charlestown", calls: 0.190, calls2: 0.241},
    {area: "Hyde Park", calls: 0.182, calls2: 0.199},
    {area: "East Boston", calls: 0.169, calls2: 0.186},
    {area: "Dorchester", calls: 0.138, calls2: 0.143},
    {area: "South End", calls: 0.133,calls2: 0.151},
    {area: "Mission Hill", calls: 0.125, calls2: 0.155},
    {area: "Fenway", calls: 0.075, calls2: 0.135},
    {area: "Brighton", calls: 0.008, calls2: 0.011},
  ];


  // Define scales

  var xScale = d3.scaleBand()
      .domain(data.map(function(d) {return d.area; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.3);

  var xScale1 = d3.scaleBand()
      .domain(['calls', 'calls2'])
      .range([0, xScale.bandwidth()])

  var yScale = d3.scaleLinear()
      .domain([0, d3.max(data, function(d){
        return d.calls > d.calls2 ? d.calls : d.calls2;
      })])
      .range([height - margin.bottom, margin.top]);

  // Draw Axes

  var xAxis = svg.append("g")
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)")
        .attr("font-size", "12px");

  var yAxis = svg.append("g")
      .call(d3.axisLeft(yScale))
      .attr("transform", `translate(${margin.left}, 0)`)
      .selectAll("text")
      .attr("font-size", "12px");

// Draw Labels

  var xLabel = svg.append("text")
    .attr("class", "axisLabel")
    .attr("x", width/2)
    .attr("y", height + margin.bottom - 10)
    .attr("text-anchor", "middle")
    .text("Neighborhood");


  var yLabel = svg.append("text")
    .attr("class", "axisLabel")
    .attr("transform", "rotate(-90)")
    .attr("y", -20)
    .attr("x", -height/2)
    .attr("text-anchor", "middle")
    .text("Number of Calls per Capita");

  // Draw data
  var area = svg.selectAll(".area")
      .data(data)
      .enter().append('g')
      .attr("class", "area")
      .attr("transform", d => `translate(${xScale(d.area)}, 0)`);

  // Draw tooltip

  var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background", "#cccccc")
    .style("border-radius", "6px");

  // Chart 1

  var chart1 = area.selectAll(".bar.calls")
      .data(d => [d])
      .enter()
      .append("rect")
      .attr("class", "bar calls")
      .attr("x", function(d) {return xScale1('calls'); })
      .attr("y", height - margin.bottom)
      .attr("width", xScale1.bandwidth())
      .attr("height", 0)
      .attr("fill", "#00ccff")
      .on("mouseover", function(d,i) {
        d3.select(this).attr("fill", "grey");
        tooltip.transition().duration(100)
        tooltip.html(`Year: 2012 <br> Call per capita: ${d.calls}`)
        .style("left", d3.event.pageX + 10 + "px")
        .style("top", d3.event.pageY + 10 + "px")
        .style("opacity", 1)
        .style("font-size", "18px")
        .style("padding", "5px 8px");
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", "#00ccff")
        tooltip.html("")
        .style("padding", "0");
      });

  // Chart 2

  var chart2 = area.selectAll(".bar.calls2")
      .data(d => [d])
      .enter()
      .append("rect")
      .attr("class", "bar calls2")
      .attr("x", function(d) {return xScale1('calls2'); })
      .attr("y", height - margin.bottom)
      .attr("width", xScale1.bandwidth())
      .attr("height", 0)
      .attr("fill", "#ffbb33")
      .on("mouseover", function(d,i) {
        d3.select(this).attr("fill", "grey");
        tooltip.transition().duration(100)
        tooltip.html(`Year: 2018 <br> Call per capita: ${d.calls2}`)
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 50 + "px")
        .style("opacity", 1)
        .style("font-size", "18px")
        .style("padding", "5px 8px");
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", "#ffbb33")
        tooltip.html("")
        .style("padding", "0");
      });;


  chart1.transition()
    .attr("height", function(d) {return height - margin.bottom - yScale(d.calls);})
    .attr("y", function(d) {return yScale(d.calls); })
     .delay(function(d,i) {
       return i * 150;
     });

  chart2.transition()
    .attr("height", function(d) {return height - margin.bottom - yScale(d.calls2);})
    .attr("y", function(d) {return yScale(d.calls2); })
    .delay(2000)