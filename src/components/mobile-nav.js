import React from 'react';

export class MobileNav extends React.Component {
  render() {
    return (
      <ul className="mobile-ul flex-column-around flex-nowrap flex-align-items-center">
        <li><a href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="projects">Projects</a></li>
        <li><a href="friends">Friends</a></li>
      </ul>
    );
  }
}

export default MobileNav;
