import React from 'react';
import TopHeader from '../components/top-header';
import MainHeader from '../components/main-header';
import MainHome from '../components/main-home';
import Footer from '../components/footer';

export class HomePage extends React.Component {
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

export default HomePage;
