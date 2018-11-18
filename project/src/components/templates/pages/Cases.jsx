import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Header from '../common/Header';

import CasesRow from '../sections/Cases/CasesRow';
import SubscribeToNews from '../sections/common/SubscribeToNews';

const Cases = (props) => {
  return (
    <MainLayout>
      <div className="cases">
        <Header className=''/>
        <CasesRow />
        <SubscribeToNews />
      </div>
    </MainLayout>
  );
};

export default Cases;
