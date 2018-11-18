import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Header from '../common/Header';

import CaseBody from '../sections/Case/CaseBody';

import Feedback from '../sections/common/Feedback';

const Cases = (props) => {
  return (
    <MainLayout>
      <div className="case">
        <Header className='case__header'/>
        <CaseBody />
        <Feedback />
      </div>
    </MainLayout>
  );
};

export default Cases;
