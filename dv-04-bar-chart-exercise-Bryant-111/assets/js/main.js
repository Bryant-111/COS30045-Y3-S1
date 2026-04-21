const drawBarChart = data => {
  console.log("drawBarChart called");

  const barHeight = 30;
  const spacing = 10;
  const startX = 50;
  const startY = 50;

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar-${d.count}`)
    .attr("x", startX)
    .attr("y", (d, i) => startY + i * (barHeight + spacing))
    .attr("width", d => d.count)
    .attr("height", barHeight)
    .attr("fill", "steelblue");
};

