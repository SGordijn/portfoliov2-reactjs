import React from 'react';

export class MainAbout extends React.Component {
  render() {
    return (
      <main className="main" role="main">
        <section>
          <article className="article-title" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="main-title">About</h1>
          </article>
          <article className="article-full flex-column-around flex-align-items-center" data-aos="fade-up" data-aos-duration="1500">
            <div className="full-widget">
              <p className="widget-text">Hello everyone! My name is Stephan Gordijn and welcome to my website! In here, you will learn about who I am, what I can do and what I have to offer!</p>
              <img className="wrappedimage-about" src="img/photo-me.jpg" alt="Stephan Gordijn" data-aos="fade-right" data-aos-duration="1500"/>
              <p className="widget-text">To kick things off, I would like to start with my personal life. I was born in Rotterdam on 9 June 1994. At the age of 3, I have been diagnosed with ASD, better known as Autism Spectrum Disorder. Ever since, I have worked hard to prepare myself for the world ahead of me. Now, I am able to live like everybody else and do the things that I like to do.</p>
              <p className="widget-text">Even though I may not be the biggest talker, I compensate that with hard work, focus, motivation and an eye for detail. My friends and colleagues often call me a sharpminded individual, because I tend to look at problems and look at what could have caused them.</p>
              <p className="widget-text">Since my last education, that ended in July 2019, I have been programming with HTML5, CSS3 and ReactJS. My preference goes to ReactJS in combination with SCSS, so that I can use pieces of code several times, allowing me to save time and be able to complete projects quicker. A good example would be the navigation bar on this very website. Normally, for each page, you would have to go through every HTML file to change a single bit of navigation. Now, though, I need to make a single change to a single file and it would apply to the navigation bar on every single page. If you want to see more, I suggest you go to my GitHub page, which can be found at the bottom of the website.</p>
              <p className="widget-text">So as you can see, I am very passionate about my work and the code that I wrote for my website. I am currently working on learning React Native to create apps and perhaps even publish them on app stores. An oppertunity that I like to take with both hands. Aside from all that, I also stream a lot as Eclipse from Team Projectile. It's often about games and just having a lot of fun playing these games. The games in question include Holdfast: Nations At War, Satisfactory and more. Alongside finding a job, I am hoping to become big on Twitch too, mainly because I like chatting with viewers and entertain them as well.</p>
              <p className="widget-text">So to summarize, my life is one of doing different things, playing around with them to make my life that little bit more interesting. I like to enjoy my life, hanging out with friends, playing video games, streaming them and to program random things just for the joy of it. The only things left to achieve are a fulltime job for a long time and a residence of my own. If you want to see what I have to offer in regards to programming or other things, there are links at the bottom of the website that you can check out.</p>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainAbout;
