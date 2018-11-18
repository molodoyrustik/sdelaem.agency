import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';
import Header from '../common/Header';

import ArticleSection from '../sections/Article/ArticleSection';

const Article = (props) => {
  return (
    <MainLayout>
      <div className="article">
        <Header className='article__header'/>
        <ArticleSection />
      </div>
    </MainLayout>
  );
};

export default Article;
