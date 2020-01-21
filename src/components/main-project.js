import React from 'react';

export class MainProject extends React.Component {
  render() {
    return (
      <main className="main" role="main">
        <section>
          <article className="article-title flex-row-around flex-align-items-center" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="main-title">Projects</h1>
          </article>
          
          <article className="article-onethird flex-row-between flex-wrap flex-align-items-center">
            <div className="onethird-image-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
              <a href="https://www.crusthouse.com/" target="_blank" rel="noopener noreferrer"><img src="img/crusthouse-white.png" alt="Crusthouse"/></a>
            </div>
            <div className="onethird-image-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
              <a href="https://www.charlyslunchroom.nl/" target="_blank" rel="noopener noreferrer"><img src="img/charlyslunchroom.png" alt="Charlys Lunchroom"/></a>
            </div>
            <div className="onethird-image-widget flex-column-between flex-wrap flex-align-items-center" data-aos="zoom-in" data-aos-duration="1500">
              <a href="https://palmundo.nl/" target="_blank" rel="noopener noreferrer"><img src="img/palmundo.png" alt="Palmundo"/></a>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainProject;
