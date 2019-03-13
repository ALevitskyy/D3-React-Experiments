export function random_vector(length){
    var result = [];
    for(var i=1; i<length; i++) {result.push(
        {"y": get_random_number(),"x": i})}
    return result
        }

function get_random_number(){
    var a = Math.random()
    a = a-0.5
    a = a*2*3.14
    return a
        }
        
function get_random_array(){
    return {"x":get_random_number(),
            "y":get_random_number(),
            "z":get_random_number()}
        }