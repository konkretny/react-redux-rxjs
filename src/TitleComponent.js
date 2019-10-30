import React from "react";
import { connect } from "react-redux";

const TitleComponent = props => {
  const { title } = props;

  return (
    <div>
      <div>Title: {title}</div>
    </div>
  );
};

//gets title state from store
const mapStateToProps = state => {
  return { title: state.title };
};
//connector
export default connect(mapStateToProps)(TitleComponent);
