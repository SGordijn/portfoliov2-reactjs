import React from 'react';
import TopHeader from '../components/top-header';
import MainHeader from '../components/main-header';
import MainTeam from '../components/main-team';
import Footer from '../components/footer';

export class TeamPage extends React.Component {
  render() {
    return (
      <div className="container">
        <TopHeader/>
        <MainHeader/>
        <MainTeam/>
        <Footer/>
      </div>
    );
  }
}

export default TeamPage;
