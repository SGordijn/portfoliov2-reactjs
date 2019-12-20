import React from 'react';

export class MainTeam extends React.Component {
  render() {
    return (
      <main className="main" role="main">
        <section>
          <article className="article-title flex-row-around flex-align-items-center" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="main-title">Team</h1>
          </article>
          <article className="article-half flex-row-between flex-wrap flex-align-items-center">
            <div className="half-widget" data-aos="zoom-in" data-aos-duration="1500">
              <h2 className="widget-title text-align-center">Eclipse Projectile</h2>
              <img className="wrappedimage-team" src="img/logo.png" alt="Eclipse Projectile" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1500"/>
              <p className="widget-text">Creator of this very website, one of the founders and regular streamer, Eclipse likes to spend time streaming games and coding websites. The games of his choice are Arma 3, Team Fortress 2, World of Warcraft, Total Accurate Battle Simulator and The Forest. He currently spends his time working to get Affiliate Status on Twitch and seeks to use his platform to help others. He is also looking to become an author of a book for the same purpose.</p>
              <p className="widget-text">If you like what you see and want to see his streams, be sure to click on the button below to head to his Twitch.tv channel and click on the follow button.</p>
              <div className="flex-row-center flex-wrap flex-align-items-center">
                <a className="btn btn-orange" href="https://www.twitch.tv/eclipse_projectile" target="_blank" rel="noopener noreferrer">Twitch</a>
              </div>
            </div>
            <div className="half-widget" data-aos="zoom-in" data-aos-duration="1500">
              <h2 className="widget-title text-align-center">Krozhj Projectile</h2>
              <img className="wrappedimage-team" src="img/Krozhj.jpg" alt="Krozhj Projectile" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1500"/>
              <p className="widget-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </article>
          <article className="article-half flex-row-between flex-wrap flex-align-items-center">
            <div className="half-widget" data-aos="zoom-in" data-aos-duration="1500">
              <h2 className="widget-title text-align-center">DYEG Media</h2>
              <img className="wrappedimage-team" src="img/DYEGMedia.png" alt="DYEG Media" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1500"/>
              <p className="widget-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="half-widget" data-aos="zoom-in" data-aos-duration="1500">
              <h2 className="widget-title text-align-center">TheBrohman Projectile</h2>
              <img className="wrappedimage-team" src="img/TheBrohman.png" alt="TheBrohman Projectile" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1500"/>
              <p className="widget-text">Daniel, one of the founders and also known as TheBrohman, is a retarded guy born in 1998 (A millenial for you boomers out there). He focusses mainly on programming videos or streams, but also does gaming content on his channels. He is the first of us four who has reached Affiliate Status on Twitch.tv. That means that he can get subscribers on Twitch, rather than followers.</p>
              <p className="widget-text">If you are interested in seeing his content, click on the buttons below to head to the channels.</p>
              <div className="flex-row-around flex-wrap flex-align-items-center">
                <a className="btn btn-orange" href="https://www.twitch.tv/thebrohman" target="_blank" rel="noopener noreferrer">Twitch</a>
                <a className="btn btn-orange" href="https://www.youtube.com/user/TheBrohman" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainTeam;
