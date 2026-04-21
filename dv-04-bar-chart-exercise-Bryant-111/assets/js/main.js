console.log("MAIN JS LOADED");

const svgWidth = 500;
const svgHeight = 500;
const labelSpace = 100;

const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`)
  .style("border", "1px solid black");

d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  console.log("Loaded data:", data);
  console.log("Length:", data.length);
  console.log("Max:", d3.max(data, d => d.count));
  console.log("Min:", d3.min(data, d => d.count));
  console.log("Extent:", d3.extent(data, d => d.count));

  data.sort((a, b) => b.count - a.count);
  console.log("Sorted data:", data);

  drawBarChart(data);
});

const drawBarChart = data => {
  const xScale = d3.scaleLinear()
    .domain([0, 1100])
    .range([0, 350]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, svgHeight])
    .padding(0.1);

  const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

  barAndLabel
    .append("rect")
    .attr("x", labelSpace)
    .attr("y", 0)
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "blue");

  barAndLabel
    .append("text")
    .text(d => d.brand)
    .attr("x", labelSpace - 10)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "end")
    .style("font-size", "13px");

  barAndLabel
    .append("text")
    .text(d => d.count)
    .attr("x", d => labelSpace + xScale(d.count) + 4)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em")
    .style("font-size", "13px");
};

