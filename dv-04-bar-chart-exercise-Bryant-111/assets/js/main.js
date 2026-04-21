console.log("MAIN JS LOADED");

const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 500 1600")
  .style("border", "1px solid black");

d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  console.log("Loaded data:", data);

  data.sort((a, b) => b.count - a.count);
  console.log("Sorted data:", data);

  createBarChart(data);
});

const createBarChart = data => {
  console.log("createBarChart called");

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

