import React from 'react';
import Nav from './nav';

export class MainHeader extends React.Component {
  render() {
    return (
      <header className="main-header">
        <a className="logo-container" href="index.php"><img className="logo" alt="logo" src="img/logo.png"/></a>
        <nav className="main-nav">
          <Nav/>
        </nav>
        <div class="clock">20:00</div>
      </header>
    );
  }
}

export default MainHeader;
