import React from 'react';

import Footer from '../common/Footer';

const MainLayout = (props) => {
  return (
    <div>
      <div className='wrapper'>
        <div className="main-content">
          {props.children}
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
