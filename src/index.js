import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Nav from './Components/nav.js';
import Body from './Components/body.js';
import Footer from './Components/footer.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <React.StrictMode>
    <Nav />
    <Body />
    <Footer/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
