import React from 'react';
import TopHeader from './top-header';
import MainHeader from './main-header';
import MainAbout from './main-about';
import Footer from './footer';

export class ContainerAbout extends React.Component {
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

export default ContainerAbout;
