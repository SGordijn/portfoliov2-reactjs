import React from 'react';

export class TopHeader extends React.Component {
  render() {
    return (
      <div className="top-header">
        <p>eclipseprojectile@gmail.com</p>
        <ul className="top-links">
          <li><a href="https://github.com/SGordijn" target="_blank"><img className="top-social-img" alt="GitHub" src="img/github.png" target="_blank"/></a></li>
          <li><a href="https://www.linkedin.com/in/stephan-gordijn-062636171/" target="_blank"><img className="top-social-img" alt="LinkedIn" src="img/linkedin.png" target="_blank"/></a></li>
        </ul>
      </div>
    );
  }
}

export default TopHeader;
