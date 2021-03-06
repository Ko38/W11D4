import React from 'react';
import BenchIndexItem from "./bench_index_item";

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let bounds = {
        northEast: {
            lat: 37.828805,
            lng: - 122.404218 
          },
          southWest: {
            lat: 37.707435, 
            lng: - 122.512154
          }
      }
    //this.props.fetchBenches();
    this.props.fetchBenches(bounds);

  }

  render() {    
    return (
      <BenchIndexItem benches={this.props.benches} />      
    );
  }
}


export default BenchIndex; 