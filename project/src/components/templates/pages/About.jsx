import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Header from '../common/Header';

import Team from '../sections/About/Team';
import MassMedia from '../sections/About/MassMedia';

import OurClients from '../sections/common/OurClients';
import Feedback from '../sections/common/Feedback';
import SocialRow from '../sections/common/SocialRow';
import SubscribeToNews from '../sections/common/SubscribeToNews';

const About = (props) => {
  const {
    subTitle,
    mainTitle,
    mainDescription,
    teamSection,
    massmediaSection,
  } = props;
  return (
    <MainLayout>
      <div className="about">
        <Header className='about__header'/>
        <Team
          mainTitle={mainTitle}
          subTitle={subTitle}
          mainDescription={mainDescription}
          teamSection={teamSection}
        />
        <MassMedia
          massmediaSection={massmediaSection}
        />
        <OurClients />
        <Feedback />
        <SocialRow />
        <SubscribeToNews />
      </div>
    </MainLayout>
  );
};

export default About;
