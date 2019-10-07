import React from 'react';

export class MainAbout extends React.Component {
  render() {
    return (
      <main className="main" role="main">
        <section>
          <article className="article-title">
            <h1 className="main-title">About</h1>
          </article>
          <article className="article-fullwidth">
            <div className="full-widget">
              <h2 className="widget-title">Title</h2>
              <a className="btn" href="#">Click Here</a>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainAbout;
