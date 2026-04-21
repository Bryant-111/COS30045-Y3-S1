const createBarChart = data => {
  const xScale = d3.scaleLinear()
    .domain([0, 1200])
    .range([0, 400]);

  const barHeight = 20;
  const spacing = 10;

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 0)
    .attr("y", (d, i) => i * (barHeight + spacing))
    .attr("width", d => xScale(d.count))
    .attr("height", barHeight)
    .attr("fill", "blue");
};

