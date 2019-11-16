import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path={routes.READER} component={Reader} />
          <Redirect to={routes.READER} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
