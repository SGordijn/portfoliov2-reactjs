import React from 'react';

export class TopHeader extends React.Component {
  render() {
    return (
      <div className="top-header flex-row-between flex-nowrap flex-align-items-center">
        <p className="top-title">Stephan Gordijn</p>
        <ul className="top-links flex-row-between">
          <li><a href="https://github.com/SGordijn" target="_blank" rel="noopener noreferrer"><img className="top-social-img" alt="GitHub" src="img/github.png"/></a></li>
          <li><a href="https://www.linkedin.com/in/stephan-gordijn-062636171/" target="_blank" rel="noopener noreferrer"><img className="top-social-img" alt="LinkedIn" src="img/linkedin.png"/></a></li>
        </ul>
      </div>
    );
  }
}

export default TopHeader;
