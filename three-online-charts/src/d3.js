import * as d3 from "d3";
export function clean(ref){
  d3.select(ref).select("svg").html("")
}
export function make_plot(data, ref){
    //variable that makes a line
   var linemaker = d3.line()
      .x(function(d){return xScale(d.x)})
      .y(function(d){return yScale(d.y)})
   var length = data.length;
   var indexes = data.map((d)=>{return d.x})
   var minimum = Math.min(...indexes)
   var maximum = Math.max(...indexes)
   //define straightline and scales
   var straight_line =[{"y":0,"x":minimum},
                       {"y":0,"x":maximum}] ;
   var yScale = d3.scaleLinear().domain([-3.14,3.14]).range([20,200]);
   var xScale = d3.scaleLinear().domain([minimum,maximum])
                                .range([40,600]);
    //make axis
   var xAxis = d3.axisTop().scale(xScale);
   var yAxis = d3.axisLeft().scale(yScale);
   // draw straight line
    d3.select(ref)
       .select("svg")
       .append("path")
       .attr("d",linemaker(straight_line))
       .attr("fill","none")
       .attr("stroke", "blue")
       .attr("stroke-width",1 );
    // the only place apart from length where data comes in
    d3.select(ref)
       .select("svg")
       .append("path")
       .attr("d",linemaker(data))
       .attr("fill","none")
       .attr("stroke", "black")
       .attr("stroke-width",3 );
    // dtaw axis
    d3.select(ref)
       .select("svg")
       .append("g")
       .attr("transform","translate(0,220)")
       .call(xAxis);

   d3.select(ref)
       .select("svg")
       .append("g")
       .attr("transform","translate(30,0)")
       .call(yAxis)
    }
export function make_slider(data, ref, callback, default_brush){
  //console.log(data);
  const width = 550;
  const height = 100;
  const height2 = 50;
  var length = data.length;
  var xScale2 = d3.scaleLinear().domain([0,length]).range([40,600]);
  var xAxis2 = d3.axisBottom(xScale2); // xAxis for brush slider
  // Stolen from here http://bl.ocks.org/DStruths/9c042e3a6b66048b5bd4
  var svg = d3.select(ref).select("svg");
  svg.on("mouseover mousedown mouseenter mouseup",() => {
      to_be_updated = false;
       brushed()})
  d3.select(".root").on("mouseover mousedown mouseenter mouseup",() => {
      console.log("over it");
      to_be_updated = true;
       brushed()})
  var context = svg.append("g") // Brushing context box container
    .attr("class", "context")


//append clip path for lines plotted, hiding those part out of bounds
  svg.append("defs")
    .append("clipPath") 
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height)

  var brush = d3.brushX()
    .extent([[xScale2.range()[0], 0], [xScale2.range()[1], height2]])
    .on("brush", brushed)

  context.append("g") // Create brushing xAxis
    .attr("class", "x axis1")
    .attr("transform", "translate(0," + height2 + ")")
    .call(xAxis2)

  var contextArea = d3.area() // Set attributes for area chart in brushing context graph
    .x(function(d) { return xScale2(d.x); }) // x is scaled to xScale2
    .y0(height2) // Bottom line begins at height2 (area chart not inverted) 
    .y1(0); // Top line of area, 0 (area chart not inverted)

  //plot the rect as the bar at the bottom
  context.append("path") // Path is created using svg.area details
    .attr("class", "area")
    .attr("d", contextArea(data)) // pass first categories data .values to area path generator 
    .attr("fill", "#F1F1F2")

    
  //append the brush for the selection of subsection  
  context.append("g")
    .attr("class", "x brush")
    .call(brush)
    .selectAll("rect")
    .attr("height", height2) // Make brush rects same height 
    .attr("fill", "#E6E7E8")
      // Set up brush correctly on rerender
    if(default_brush){
      //Works but results in an infinite loop
      //console.log(d3.select(".brush"));
     d3.select(".brush").call(brush.move,default_brush.map(xScale2));
     } // stolen from here https://bl.ocks.org/clhenrick/282c8e050fd7695fdcf14bda6d352c26 
     var initialized = true;
     var to_be_updated = true;
  function brushed() {
    var brusher = d3.select(ref)
                    .select(".selection")
    // So can convert width into relevant indexes
    // Using the correct scale
    var start = Number(brusher.attr("x"));
    var end = start + Number(brusher.attr("width"));
    var brush_domain = [Math.floor(xScale2.invert(start)),
                        Math.floor(xScale2.invert(end))];
    //console.log(brush_domain);
    //Prevent infinite loop
    if(initialized){
       console.log(to_be_updated);
    callback(brush_domain, to_be_updated);
                    }


    //console.log(brush_domain);
  };
}

