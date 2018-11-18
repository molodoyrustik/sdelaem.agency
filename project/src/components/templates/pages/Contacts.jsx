import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';

import Header from '../common/Header';
import Feedback from '../sections/common/Feedback';
import SocialRow from '../sections/common/SocialRow';
import SubscribeToNews from '../sections/common/SubscribeToNews';


const Contacts = (props) => {
  return (
    <MainLayout>
      <div className="contacts">
        <Header className='contacts__header'/>
        <Feedback
          contactsComponentClassName='contacts__feedback-contacts'
          formComponentClassName='contacts__feedback-talk-form'
          />
        <SocialRow />
        <SubscribeToNews />
      </div>
    </MainLayout>
  );
};

export default Contacts;
