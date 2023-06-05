import React from 'react';
import Header from '../../components/header';
import Content from '../../components/content';
import Footer from '../../components/footer';

export default function withBasicLayout(Component) {
  return (props) => {
    return (
      <div className='App'>
        <Header {...props} />
        <Content {...props}>
          <Component {...props} />
        </Content>
        <Footer {...props} />
      </div>
    );
  };
}
