export const NEW_DATA = "NEW_DATA";
export const NEW_BRUSH = "NEW_BRUSH";

export function new_data_point(data_point) {
    // Can put socket listener to ComponentDidMount
    return {
        type: NEW_DATA,
        payload: data_point
    };
}

export function new_brush(brush_range) {
    return {
        type: NEW_BRUSH,
        payload: brush_range
    };
}