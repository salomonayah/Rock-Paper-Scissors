import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './assets/styles/app.style.scss'
import { BrowserRouter, Route , Switch, Redirect } from 'react-router-dom'
import GameWelcomePage from './pages/GameWelcomePage';
import GameMainPage from './pages/GameMainPage';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducers";


const appReducer = createStore(reducer);

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true}  path="/" component={GameWelcomePage}></Route>
      <Route exact={true}  path="/game" component={GameMainPage}></Route>
      <Route path="**" exact>
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
)

const rootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
      <Provider store={appReducer}>
        <Root />
      </Provider>
    </React.StrictMode>,rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
