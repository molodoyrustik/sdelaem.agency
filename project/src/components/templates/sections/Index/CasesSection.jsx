import React from 'react';
import { connect } from 'react-redux';

import CustomLink from '../../common/CustomLink';

const CasesSection = (props) => {
  const items = props.casesSection;
  const ids = [];
  const { posts } = props;
  items.forEach((val, index) => {
    ids.push(val.ID);
  });
  const elements = [];
  for (let i = 0; i < ids.length; i += 1) {
    const post = posts.find((val) => {
      return val.id === ids[i];
    });
    elements.push(post);
  }
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    arr.push(elements.splice(0, 2));
  }
  return (
    <div className="cases-section">
        <ul className="cases-section__list">
          {
            arr.map((val, i) => {
              return (
                <li key={i} className="cases-section__item">
                  {
                    val.map((elem, index) => {
                      const { url } = elem.acf.caseImg;
                      const { caseDescription, caseTitle } = elem.acf;
                      return (
                        <div key={index} className="cases-section__inner">
                          <div className="cases-section__item-img-wrap">
                            <img src={url} alt="" className="cases-section__item-img"/>
                          </div>
                          <div className="cases-section__item-title">{caseTitle}</div>
                          <div className="cases-section__item-desc">{caseDescription}</div>
                        </div>
                      );
                    })
                  }
                </li>
              );
            })
          }
        </ul>
        <CustomLink href='/cases' className='cases-section__link' text='все кейсы'/>
    </div>
  );
};

export default connect((state) => {
  return {
    posts: state.posts.items,
  };
})(CasesSection);
