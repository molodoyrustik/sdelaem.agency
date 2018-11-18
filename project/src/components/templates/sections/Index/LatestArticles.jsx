import React from 'react';

import CustomLink from '../../common/CustomLink';

const LatestArticles = (props) => {
  return (
    <div className="latest-articles">
      <div className="latest-articles__top-wrapper">
        <h2 className='latest-articles__title'>Последние статьи в блоге</h2>
        <CustomLink text='перейти в блог' href='#' className='latest-articles__link'/>
      </div>
      <ul className="latest-articles__list">
        <li className="latest-articles__item">
          <div className="latest-articles__item-title">«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков.</div>
          <div className="latest-articles__item-desc">«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты…</div>
          <div className="latest-articles__item-date">12.09.18</div>
        </li>
        <li className="latest-articles__item">
          <div className="latest-articles__item-title">«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков.</div>
          <div className="latest-articles__item-desc">«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты…</div>
          <div className="latest-articles__item-date">12.09.18</div>
        </li>
        <li className="latest-articles__item">
          <div className="latest-articles__item-title">«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков.</div>
          <div className="latest-articles__item-desc">«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты…</div>
          <div className="latest-articles__item-date">12.09.18</div>
        </li>
      </ul>
    </div>
  );
};

export default LatestArticles;
