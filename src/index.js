import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import AOS from 'aos';

// import ContainerHome from './containerhome';
// import ContainerAbout from './containerabout';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
AOS.init();
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <ContainerAbout/>,
//   document.getElementById('aboutpage')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
