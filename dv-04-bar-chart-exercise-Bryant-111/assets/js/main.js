const createBarChart = data => {
  console.log("createBarChart called");

  const xScale = d3.scaleLinear()
    .domain([0, 1200])
    .range([0, 400]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 800])
    .padding(0.2);

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 100)
    .attr("y", d => yScale(d.brand))
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "blue");
};

