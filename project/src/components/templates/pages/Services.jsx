import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Header from '../common/Header';

import ServicesRow from '../sections/Services/ServicesRow';
import ServicesList from '../sections/Services/ServicesList';

import Feedback from '../sections/common/Feedback';
import SocialRow from '../sections/common/SocialRow';
import SubscribeToNews from '../sections/common/SubscribeToNews';

const Services = (props) => {
  const {
    subTitle,
    mainTitle,
    mainDescription,
  } = props;
  return (
    <MainLayout>
      <div className="services">
        <Header className='services__header'/>
        <ServicesRow
          subTitle={subTitle}
          mainTitle={mainTitle}
          mainDescription={mainDescription}
        />
        <ServicesList />
        <Feedback />
        <SocialRow />
        <SubscribeToNews />
      </div>
    </MainLayout>
  );
};

export default Services;
