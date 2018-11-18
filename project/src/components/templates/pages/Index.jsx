import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Header from '../common/Header';

import FirstSection from '../sections/Index/FirstSection';
import CasesSection from '../sections/Index/CasesSection';
import ReviewsSection from '../sections/Index/ReviewsSection';
import LatestArticles from '../sections/Index/LatestArticles';

import OurClients from '../sections/common/OurClients';
import Feedback from '../sections/common/Feedback';
import SocialRow from '../sections/common/SocialRow';
import SubscribeToNews from '../sections/common/SubscribeToNews';

const Index = (props) => {
  const {
    pagetitle,
    phone,
    subTitle,
    mainTitle,
    mainLink,
    mainDescription,
    casesSection,
    reviewsSection,
    clientsSection,
    latestArticles,
  } = props;
  return (
    <MainLayout>
      <div className="index">
        <Header phone={phone} className='index__header'/>
        <FirstSection
          mainTitle={mainTitle}
          subTitle={subTitle}
          mainLink={mainLink}
          mainDescription={mainDescription}
        />
        <CasesSection casesSection={casesSection}/>
        <ReviewsSection reviewsSection={reviewsSection}/>
        <OurClients />
        <Feedback />
        <SocialRow />
        <LatestArticles />
        <SubscribeToNews />
      </div>
    </MainLayout>
  );
};

export default Index;
