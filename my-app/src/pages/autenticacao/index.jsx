import React from 'react';
import LayoutLogin from '../../components/layout/login';

const HomePage = () => {
  return (
    <LayoutLogin>
      <h1>Welcome to the Home Page!</h1>
      <p>This is some content specific to the Home Page.</p>
    </LayoutLogin>
  );
}

export default HomePage;