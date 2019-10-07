import React from 'react';

export class MainHome extends React.Component {
  render() {
    return (
      <main className="main" role="main">
        <section>
          <article className="article-title">
            <h1 className="main-title">Welcome</h1>
          </article>
          <article className="article-2x2">
            <div className="half-widget">
              <h2 className="widget-title">Title</h2>
              <a className="btn" href="#">Click Here</a>
            </div>
            <div className="half-widget">
              <h2 className="widget-title">Title</h2>
              <a className="btn" href="#">Click Here</a>
            </div>
            <div className="half-widget">
              <h2 className="widget-title">Title</h2>
              <a className="btn" href="#">Click Here</a>
            </div>
            <div className="half-widget">
              <h2 className="widget-title">Title</h2>
              <a className="btn" href="#">Click Here</a>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainHome;
