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
            <div className="half-widget team-size flex-column-around" data-aos="zoom-in" data-aos-duration="1500">
              <div className="description-container">
                <h2 className="widget-title text-align-center">Eclipse Projectile</h2>
                <img className="wrappedimage-team" src="img/logo.png" alt="Eclipse Projectile" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1500"/>
                <p className="widget-text">Creator of this very website, one of the three founders and regular streamer, Eclipse likes to spend time streaming games and coding websites. The games of his choice are Arma 3, Team Fortress 2, World of Warcraft, Total Accurate Battle Simulator, The Forest and much, much more! He currently spends his time working to get Affiliate Status on Twitch and seeks to use his platform to help others. He is also looking to become an author of a book for the same purpose.</p>
                <p className="widget-text">If you like what you see and want to see his streams, be sure to click on the button below to head to his Twitch.tv channel and click on the follow button.</p>
                <div className="flex-row-center flex-wrap flex-align-items-center">
                  <a className="btn btn-orange btn-shadow" href="https://www.twitch.tv/eclipse_projectile" target="_blank" rel="noopener noreferrer">Twitch</a>
                </div>
              </div>
            </div>

            <div className="half-widget team-size flex-column-around" data-aos="zoom-in" data-aos-duration="1500">
              <div className="description-container">
                <h2 className="widget-title text-align-center">Krozhj Projectile</h2>
                <img className="wrappedimage-team" src="img/Krozhj.jpg" alt="Krozhj Projectile" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1500"/>
                <p className="widget-text">Krozhj, who's actually called Mattias, is a Swedish ex-YouTuber and one of the three founders of Team Projectile. Despite having had little time to make videos due to his fulltime job, he loved to spend his time making gaming videos. His preference of gaming videos included survival and tabletop games, spending his time to drop references of movies and series from time to time.</p>
                <p className="widget-text">Now retired from YouTube, Krozhj aims to be a writer for novels. He might end up posting some pieces of lore or Q&As about his novels on his YouTube channel. If you enjoy lore or gaming videos, be sure to head to his YouTube channel linked below and support him on Patreon as well!</p>
                <div className="flex-row-around flex-wrap flex-align-items-center">
                  <a className="btn btn-orange btn-shadow" href="https://www.youtube.com/channel/UCl1SFR1tMCzNGyisxxlhy6g" target="_blank" rel="noopener noreferrer">YouTube</a>
                  <a className="btn btn-orange btn-shadow" href="https://www.patreon.com/krozhj" target="_blank" rel="noopener noreferrer">Patreon</a>
                </div>
              </div>
            </div>
          </article>

          <article className="article-half flex-row-between flex-wrap flex-align-items-center">
            <div className="half-widget team-size flex-column-around" data-aos="zoom-in" data-aos-duration="1500">
              <div className="description-container">
                <h2 className="widget-title text-align-center">DYEG Media</h2>
                <img className="wrappedimage-team" src="img/DYEGMedia.png" alt="DYEG Media" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1500"/>
                <p className="widget-text">DYEG Media is a form of media in development. DYEG stands for several things, but mainly it's "Do You Even Game". DYEG Media will feature multiple platforms of content, varying from art, games and music to daily endeavors. Look forward to a form of media with a large variety of content. It is here where no content is the same and where many faces and voices will meet to discuss and share interests.</p>
                <p className="widget-text">The main host will be Wolfspirit1993, who's one of the three founders of Team Projectile. He also runs a Twitch.tv channel and a DeviantArt page where he will be promoting both DYEG Media and Team Projectile on both channels. Be sure to check both links below and be sure to follow!</p>
                <div className="flex-row-around flex-wrap flex-align-items-center">
                  <a className="btn btn-orange btn-shadow" href="https://www.twitch.tv/wolfspirit1993" target="_blank" rel="noopener noreferrer">Twitch</a>
                  <a className="btn btn-orange btn-shadow" href="https://www.deviantart.com/wolfspirit1993" target="_blank" rel="noopener noreferrer">DeviantArt</a>
                </div>
              </div>
            </div>
            <div className="half-widget team-size flex-column-around" data-aos="zoom-in" data-aos-duration="1500">
              <div className="description-container">
                <h2 className="widget-title text-align-center">TheBrohman Projectile</h2>
                <img className="wrappedimage-team" src="img/TheBrohman.png" alt="TheBrohman Projectile" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1500"/>
                <p className="widget-text">Daniel, born in 1998 and better known as TheBrohman. He focusses mainly on programming videos or streams, but also enjoys creating gaming content on his channels. He is the first of us four who has reached Affiliate Status on Twitch.tv. That means that he can get subscribers on Twitch, rather than followers.</p>
                <p className="widget-text">TheBrohman is also a fan of watching series, movies, reading books, roleplay in games and writing stories. In time, he wants to rewrite formerly written stories and release them to the public. If you like what you see, be sure to check out the links below to see his videos and streams and be sure to subscribe to both channels!</p>
                <div className="flex-row-around flex-wrap flex-align-items-center">
                  <a className="btn btn-orange btn-shadow" href="https://www.twitch.tv/thebrohman" target="_blank" rel="noopener noreferrer">Twitch</a>
                  <a className="btn btn-orange btn-shadow" href="https://www.youtube.com/user/TheBrohman" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainTeam;
