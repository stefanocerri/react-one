import React, { Fragment } from "react";
import "../scss/loader.scss";

const Loader = () => {
  return (
    <Fragment>
      <div className="loader is-loading">
        <div className="icon" />
      </div>
    </Fragment>
  );
};

export default Loader;
