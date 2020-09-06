import React from 'react';
import TopHeader from '../components/top-header';
import MainHeader from '../components/main-header';
import MainProjects from '../components/main-projects';
import Footer from '../components/footer';

export class ProjectsPage extends React.Component {
  render() {
    return (
      <div className="container">
        <TopHeader/>
        <MainHeader/>
        <MainProjects/>
        <Footer/>
      </div>
    );
  }
}

export default ProjectsPage;
