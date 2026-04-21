const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .style("border", "1px solid black");

d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  console.log("loaded data:", data);

  data.sort((a, b) => b.count - a.count);

  drawBarChart(data);
});

const drawBarChart = data => {
  console.log("drawBarChart called");

  const barHeight = 30;
  const spacing = 10;

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .attr("x", 50)
    .attr("y", (d, i) => 50 + i * (barHeight + spacing))
    .attr("width", d => d.count)
    .attr("height", barHeight)
    .attr("fill", "steelblue");
};

