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
              <p className="widget-text">Hello everyone! My name is Stephan Gordijn and welcome to my website! In here, you will learn about who I am, what I can do and what I have to offer.</p>
              <img className="wrappedimage-about" src="img/photo-me.jpg" alt="Stephan Gordijn" data-aos="fade-right" data-aos-duration="1500"/>
              <p className="widget-text">At first, I'm going to let you in on my personal life. I was born in Rotterdam on the 9th of June 1994 at the Erasmus Medical Centre. Ever since my birth, I have lived in a town called Spijkenisse, which is a 15 minute drive from Rotterdam. At the age of 3, I was diagnosed with ASD, or autism spectrum disorder. Throughout my entire life, it has not been the easiest to talk with people, still isn't, but whenever someone lacks in something, they compensate in other things.</p>
              <p className="widget-text">While I lack in communication skills, I compensate with hard work, focus, motivation and an eye for detail. Friends and colleagues often call me sharp, because of my eye for detail, often seeing details and issues others can not. My talents have often aided me in delivering quality and results for whomever required my talents. Other than that, I'm often someone who likes to help out others with problems and give them my insight in order to not only help them, but teach them the how and what, so that they won't have to be stuck with the same issue again.</p>
              <p className="widget-text">As a part of my programming skills, I have learned different Front End tools and languages that  help me create high-quality websites. These include HTML5, CSS3, WordPress, Bootstrap, SCSS, Javascript and ReactJS. I prefer using ReactJS in combination with SCSS, so that I can reuse code and save a lot of time with it. Aside from that, I use techniques that are efficient in creating a good working website. One of my favorites is the Flexbox-Grid technique. Using but a few lines of easily understandable code, I can sort elements out without having to do much. Better yet, they work really well with responsive websites. If you want to see what I have, be sure to head to github.com/SGordijn or head to the Projects page by clicking the link with the same name above in the navigation bar.</p>
              <p className="widget-text">So as you can see, I am very passionate about my work. I like to spend my time creating something that's going to help people out in the long run. That is what brings me to the other hobbies and passions that I have. First, I am, aside from a programmer, a streamer on Twitch.tv under the alias of Eclipse Projectile. I like to play video games and stream them live as opposed to recording them. Recording and editing videos often take a lot of time. Time that I prefer to spend on many other things.</p>
              <p className="widget-text">One of which is writing a book. While I hate reading books, I do like the idea of writing down my personal experiences and document them, so that others, whom are going through rough times, might feel a bit better after reading the book I am looking to make. Life's difficult, but as long as we can help each other out, I am sure that life will be much more enjoyable. As for the rest, to close off what I like to do, I prefer to spend time with my friends. Have a few drinks, make jokes, laugh and just have fun.</p>
              <p className="widget-text">If you want to know more about my Twitch.tv life as Eclipse Projectile, you can find us on the Team page by clicking on the link with the same name above in the navigation bar. There, you will find a short introduction about myself, other members of Team Projectile and the links to each of our channels.</p>
            </div>
          </article>
        </section>
      </main>
    );
  }
}

export default MainAbout;
