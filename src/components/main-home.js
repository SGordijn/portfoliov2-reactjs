import React from 'react';

export class MainHome extends React.Component {
  render() {
    return (
      <main className="main" role="main">
        <section>
          <article className="article-title flex-row-around flex-align-items-center" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="main-title">Welcome</h1>
          </article>
          <article className="article-half flex-row-between flex-wrap flex-align-items-center">
            <div className="half-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
              <h2 className="widget-title">Projects</h2>
              <p className="widget-text center-text">In this page, you will get to see a small collection of projects that I have worked on and/or completed.</p>
              <a className="btn btn-orange" href="/project">Click Here</a>
            </div>
            <div className="half-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
              <h2 className="widget-title">Team Projectile</h2>
              <p className="widget-text center-text">Want to know more about the group of YouTubers and Twitch streamers that I am part of? This is the place to read all about it!</p>
              <a className="btn btn-orange" href="/team">Click Here</a>
            </div>
            <div className="half-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
              <h2 className="widget-title">LinkedIn</h2>
              <p className="widget-text center-text">Do you want to see my skills in one place? Check out my profile on LinkedIn!</p>
              <a className="btn btn-orange" href="https://www.linkedin.com/in/stephan-gordijn-062636171/" target="_blank" rel="noopener noreferrer">Click Here</a>
            </div>
            <div className="half-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
              <h2 className="widget-title">GitHub</h2>
              <p className="widget-text center-text">This is the place where I put my code in, including the code of this very website. If you have suggestions for websites or code, let me know!</p>
              <a className="btn btn-orange" href="https://github.com/SGordijn" target="_blank" rel="noopener noreferrer">Click Here</a>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainHome;
