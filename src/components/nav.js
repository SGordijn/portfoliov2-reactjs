import React from 'react';

export class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="project">Projects</a></li>
        <li><a href="team">Team</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    );
  }
}

export default Nav;
