import React from 'react';
import TopHeader from '../components/top-header';
import MainHeader from '../components/main-header';
import MainContact from '../components/main-contact';
import Footer from '../components/footer';

export class ContactPage extends React.Component {
  render() {
    return (
      <div className="container">
        <TopHeader/>
        <MainHeader/>
        <MainContact/>
        <Footer/>
      </div>
    );
  }
}

export default ContactPage;
