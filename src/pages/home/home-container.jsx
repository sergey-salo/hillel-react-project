import React, { useEffect } from 'react';

const HomeContainer = () => {
  useEffect(() => {
    document.title = 'E-Commerce - Home';
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <div>Hello world!</div>
    </div>
  );
};

export default HomeContainer;
