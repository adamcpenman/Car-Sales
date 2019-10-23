import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

function mapToStateProps(state) {
  return {
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapToStateProps, {})(Total);
