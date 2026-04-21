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
  data.sort((a, b) => b.count - a.count);
  drawBarChart(data);
});

const drawBarChart = data => {
  const barHeight = 20;
  const spacing = 10;

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 0)
    .attr("y", (d, i) => i * (barHeight + spacing))
    .attr("width", d => d.count)
    .attr("height", barHeight)
    .attr("fill", "blue");
};


