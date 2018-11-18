import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Header from '../common/Header';

import BlogSection from '../sections/Blog/BlogSection';

import SubscribeToNews from '../sections/common/SubscribeToNews';

const About = (props) => {
  return (
    <MainLayout>
      <div className="blog">
        <Header className=''/>
        <BlogSection />
        <SubscribeToNews />
      </div>
    </MainLayout>
  );
};

export default About;
