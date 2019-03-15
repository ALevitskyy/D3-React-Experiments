export function brush_data(data,brush_domain){
           if (brush_domain===null){
			return data
		}
		return data.slice(brush_domain[0],brush_domain[1])
	                 }
export function get_data_row(data,variable){
   return data.map(function(d, index){
   	      return {"x":index,"y":d[variable]}})
}