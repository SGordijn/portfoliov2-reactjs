import React from 'react';
import TopHeader from '../components/top-header';
import MainHeader from '../components/main-header';
import MainFriends from '../components/main-friends';
import Footer from '../components/footer';

export class FriendsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <TopHeader/>
        <MainHeader/>
        <MainFriends/>
        <Footer/>
      </div>
    );
  }
}

export default FriendsPage;
