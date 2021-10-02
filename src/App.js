import './App.css'
import React from 'react';
import trangchu from './site/trangchu';
import Cview from './control-views/Cview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <>
      <Router>
        <Switch>
          <Route exact path='/' component={trangchu} />
          <Route exact path='/trangchu' render={prop => <Cview {...prop} authRoute='trangchu' />} />
          <Route exact path='/banggia' render={prop => <Cview {...prop} authRoute='banggia' />} />
          <Route exact path='/lichkham' render={prop => <Cview {...prop} authRoute='lichkham' />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
