import React from 'react';
import TopHeader from '../components/top-header';
import MainHeader from '../components/main-header';
import MainAbout from '../components/main-about';
import Footer from '../components/footer';

export class AboutPage extends React.Component {
  render() {
    return (
      <div className="container">
        <TopHeader/>
        <MainHeader/>
        <MainAbout/>
        <Footer/>
      </div>
    );
  }
}

export default AboutPage;
