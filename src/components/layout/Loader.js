import React, { Fragment } from 'react';
import loader from './loader.gif';

const Loader = () => {
  return (
    <Fragment>
      <img src={loader} alt='Loading...' style={loaderStyle} />
    </Fragment>
  );
};

const loaderStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block',
};

export default Loader;
