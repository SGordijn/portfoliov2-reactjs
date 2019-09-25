import React from 'react';
import TopHeader from './top-header';
import MainHeader from './main-header';
import MainHome from './main-home';
import Footer from './footer';

export class ContainerHome extends React.Component {
  render() {
    return (
      <div className="container">
        <TopHeader/>
        <MainHeader/>
        <MainHome/>
        <Footer/>
      </div>
    );
  }
}

export default ContainerHome;
