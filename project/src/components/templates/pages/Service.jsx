import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Header from '../common/Header';

import ServiceBody from '../sections/Service/ServiceBody';

import Feedback from '../sections/common/Feedback';

const Service = (props) => {
  return (
    <MainLayout>
      <div className="service">
        <Header className='service__header'/>
        <ServiceBody/>
        <Feedback />
      </div>
    </MainLayout>
  );
};

export default Service;
