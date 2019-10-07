import React from 'react';
import TopHeader from '../components/top-header';
import MainHeader from '../components/main-header';
import Main404Error from '../components/main-404error';
import Footer from '../components/footer';

export class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="container">
        <TopHeader/>
        <MainHeader/>
        <Main404Error/>
        <Footer/>
      </div>
    );
  }
}

export default NotFoundPage;
