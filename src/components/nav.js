import React from 'react';

export class Nav extends React.Component {
  render() {
    return (
      <ul className="desktop-ul flex-row-around flex-nowrap flex-align-items-center">
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="project">Projects</a></li>
        <li><a href="team">Team</a></li>
      </ul>
    );
  }
}

export default Nav;
