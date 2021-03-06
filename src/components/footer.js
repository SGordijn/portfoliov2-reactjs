import React from 'react';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="footer-section flex-row-around flex-wrap flex-align-center">
          <div className="footer-widget">
            <ul>
              <li className="footer-title">Contact</li>
              <br/>
              <li className="footer-mini-title">Email Address</li>
              <li><a href="mailto:stephangordijn@gmail.com">stephangordijn@gmail.com</a></li>
            </ul>
          </div>
          <div className="footer-widget">
            <ul>
              <li className="footer-title">Important Links</li>
              <br/>
              <li><a href="https://github.com/SGordijn" target="blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/stephan-gordijn-062636171/" target="blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="footer-widget">
            <ul>
              <li className="footer-title">Social Media</li>
              <br/>
              <li><a href="https://www.facebook.com/stephanwesley.gordijn" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/TPEclipse" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/tpeclipse/" target="blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
