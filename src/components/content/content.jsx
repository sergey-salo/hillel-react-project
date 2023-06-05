import React from 'react';
import Button from '../button';
import logo from '../../logo.svg';

const Content = ({ children }) => {
  const content = children ? (
    children
  ) : (
    <>
      <h2>Content</h2>
      <img src={logo} className='App-logo' alt='logo' />
      <Button key={1} />
    </>
  );

  return (
    <main className='main'>
      <div className='container'>{content}</div>
    </main>
  );
};

export default Content;
