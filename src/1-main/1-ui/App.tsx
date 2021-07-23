import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import { Login } from './components/Login/Login';
import {Registration} from './components/Registration/Registration';
import {RecoveryPassword} from './components/RecoveryPassword/RecoveryPassword';
import {NewPassword} from './components/NewPassword/NewPassword';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
          <Route path={"/profile"} render={() => <Profile/>}/>
          <Route path={"/login"} render={() => <Login/>}/>
          <Route path={"/registration"} render={() => <Registration/>}/>
          <Route path={"/recovery"} render={() => <RecoveryPassword/>}/>
          <Route path={"/new-password"} render={() => <NewPassword/>}/>
          <Route path={"/404"} render={() => <h1>404:: page not found</h1>}/>
          <Redirect from={"*"} to={"/404"}/>
        </Switch>
      </BrowserRouter>
      <>
        {/*<Main>*/}
      </>
    </div>
  );
}

export default App;
