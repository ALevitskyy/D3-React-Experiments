import * as d3 from "d3";
export default function make_plot(data, ref){
    //variable that makes a line
   var linemaker = d3.line()
      .x(function(d){return xScale(d.x)})
      .y(function(d){return yScale(d.y)})
   var length = data.length;
   //define straightline and scales
   var straight_line =[{"y":0,"x":0},{"y":0,"x":length}] ;
   var yScale = d3.scaleLinear().domain([-3.14,3.14]).range([20,200]);
   var xScale = d3.scaleLinear().domain([1,length]).range([40,600]);
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