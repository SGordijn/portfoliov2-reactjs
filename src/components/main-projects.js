import React from 'react';

export class MainProjects extends React.Component {
  render() {
    return (
      <main className="main" role="main">
        <section>
          <article className="article-title flex-row-around flex-align-items-center" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="main-title">Projects</h1>
          </article>

          <article className="article-full flex-column-around flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
            <div className="full-widget flex-column-between flex-wrap flex-align-items-center">
              <h2 className="widget-title">De Virtualisten B.V.</h2>
              <div className="flex-row-around flex-wrap flex-align-items-center">
                <div className="project-image-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
                  <a href="https://www.crusthouse.com/" target="_blank" rel="noopener noreferrer"><img src="img/crusthouse-white.png" alt="Crusthouse"/></a>
                </div>
                <div className="project-image-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
                  <a href="https://www.charlyslunchroom.nl/" target="_blank" rel="noopener noreferrer"><img src="img/charlyslunchroom.png" alt="Charlys Lunchroom"/></a>
                </div>
                <div className="project-image-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
                  <a href="https://palmundo.nl/" target="_blank" rel="noopener noreferrer"><img src="img/palmundo.png" alt="Palmundo"/></a>
                </div>
              </div>
            </div>
          </article>

          <article className="article-full flex-column-around flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
            <div className="full-widget flex-column-between flex-wrap flex-align-items-center">
              <h2 className="widget-title">Personal Projects and Works</h2>
              <div className="project-space flex-row-around flex-wrap flex-align-items-center">
                <div className="project-image-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
                  <a href="https://github.com/SGordijn" target="_blank" rel="noopener noreferrer"><img src="img/githublarge.png" alt="GitHub"/></a>
                </div>
                <div className="project-image-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
                  <a href="https://www.twitch.tv/eclipse_projectile" target="_blank" rel="noopener noreferrer"><img src="img/twitchlogo.png" alt="Twitch.tv/eclipse_projectile"/></a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainProjects;
