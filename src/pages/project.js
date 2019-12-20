import React from 'react';
import TopHeader from '../components/top-header';
import MainHeader from '../components/main-header';
import MainProject from '../components/main-project';
import Footer from '../components/footer';

export class ProjectPage extends React.Component {
  render() {
    return (
      <div className="container">
        <TopHeader/>
        <MainHeader/>
        <MainProject/>
        <Footer/>
      </div>
    );
  }
}

export default ProjectPage;
