import React from 'react';

export class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="project.html">Projects</a></li>
        <li><a href="team.html">Team</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    );
  }
}

export default Nav;
