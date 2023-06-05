import React from 'react';

const Loader = ({ children, isLoading }) => {
  return isLoading ? <div className='loader'>Loading ...</div> : children;
};

export default Loader;
