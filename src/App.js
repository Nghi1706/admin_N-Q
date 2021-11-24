import './App.css'
import React from 'react';
import Trangchu from './site/trangchu';
import Banggia from './site/banggia';
import Lichkham from './site/lichkham';
import Dieuchinh from './site/Dieuchinh';
import Cview from './control-views/Cview';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' render={() => {
            return localStorage.getItem("accessToken") ? <Trangchu /> : <Redirect to="/login" />
          }} />
          <Route exact path='/banggia' render={() => {
            return localStorage.getItem("accessToken") ? <Banggia /> : <Redirect to="/login" />
          }} />
          <Route exact path='/lichkham' render={() => {
            return localStorage.getItem("accessToken") ? <Lichkham /> : <Redirect to="/login" />
          }} />
          <Route exact path='/dieuchinh' render={() => {
            return localStorage.getItem("accessToken") ? <Dieuchinh /> : <Redirect to="/login" />
          }} />
          <Route exact path='/login' render={prop => <Cview {...prop} authRoute='login' />} />
        </Switch>
      </Router>
    </>
    //<Route exact path='/banggia' render={prop => <Cview {...prop} authRoute='banggia' />} />
    //<Route exact path='/lichkham' render={prop => <Cview {...prop} authRoute='lichkham' />} />
  );
}

export default App;
