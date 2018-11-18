import React from 'react';
import CustomInput from '../../../common/CustomInput';

const SubscribeToNews = (props) => {
  return (
    <div className="subscribe-to-news">
      <div className="subscribe-to-news__block">
        <div>
          <div className="subscribe-to-news__title">Подпишитесь на новости</div>
          <input type="email" className="subscribe-to-news__input" placeholder='E-mail'/>
        </div>
        <button className="subscribe-to-news__button">Отправить</button>
      </div>
    </div>
  );
};

export default SubscribeToNews;
