import { fetchBenches as getBenches, createBench} from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
}

export const fetchBenches = (bounds) => {

  return (dispatch) => {
    return getBenches(bounds.northEast, bounds.southWest).then(benches => {
      return dispatch(receiveBenches(benches));
    });
  };
}
window.fetchBenches = fetchBenches;
//window.store.dispatch(fetchBenches()).then( benches => console.log(benches))

// export receiveBenches = dispatch => (fetchBenches().then(benches =>  dispatch)

