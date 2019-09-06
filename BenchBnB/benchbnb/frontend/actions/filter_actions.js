import { fetchBenches } from "../util/bench_api_util"

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const receiveBenches = (bounds) => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

export const updateBounds = (bounds) => {
  return (dispatch) => {
    return dispatch(receiveBenches(bounds));
    // return fetchBenches(bounds.northEast, bounds.southEast).then((benches) => {
    //   return dispatch(receiveBenches(bounds));
    // });
  };
};