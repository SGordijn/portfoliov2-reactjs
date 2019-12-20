import React from 'react';
import Nav from './nav';

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

export class MainHeader extends React.Component {
  render() {
    return (
      <header className="main-header flex-row-between flex-nowrap flex-align-items-center" onLoad={startTime}>
        <a className="logo-container" href="/"><img className="logo" src="img/logo.png" alt="logo"/></a>
        <nav className="main-nav flex-row-around flex-nowrap flex-align-items-center" id="main-nav">
          <Nav/>
          <div className="clock" id="clock"></div>
        </nav>
        <div className="mobile-menu">
        </div>
      </header>
    );
  }
}

export default MainHeader;
