import React from "react";
import BenchMap from "./bench_map";
import BenchIndex from "./bench_index";
import { Provider } from "react-redux";


const Search = (props) => {
  console.log(props);
  return (
    <div>
        <BenchMap {...props} />
        <BenchIndex {...props} />
    </div>
  );
}

export default Search;