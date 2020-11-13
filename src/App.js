import React from 'react';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Route from './Route';

export default () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Route path="/">
        <Login></Login>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/main">
        <Main></Main>
      </Route>
    </div>
  );
};
