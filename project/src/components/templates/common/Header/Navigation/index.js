import React from 'react';
import { connect } from 'react-redux';

import CustomLink from '../../CustomLink';

const Navigation = (props) => {
  const { items } = props.menu;
  return (
    <nav className="menu">
      <ul className="menu__list">
        {
          items.map((item, i) => {
            const { title } = item;
            const url = item.url.split('/')[3];
            return (
              <li key={i} className="menu__item">
                <CustomLink text={title} href={url}/>
              </li>
            );
          })
        }
        <li className="menu__item">
          <CustomLink text={'Кейс'} href={'/case'}/>
        </li>
        <li className="menu__item">
          <CustomLink text={'Услуга'} href={'/service'}/>
        </li>
        <li className="menu__item">
          <CustomLink text={'Статья'} href={'/article'}/>
        </li>
      </ul>
    </nav>
  );
};

export default connect((state) => {
  return {
    menu: state.menu.menu,
  };
})(Navigation);
