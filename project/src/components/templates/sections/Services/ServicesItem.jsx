import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItem = (props) => {
  const { title, desc, srcImg, } = props;
  return (
    <li className="services__item">
      <div className="services__item-wrapp">
        <div className="services__item-title">{title}</div>
        <div className="services__item-desc">{desc}</div>
        <Link to='#' className="services__link">
          <svg className='services__arrow' width="45px" height="14px" viewBox="0 0 45 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>0F33B7DB-F5B9-494D-9320-BD13E24CD21B</title>
            <desc>Created with sketchtool.</desc>
            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <g id="services-arrow" transform="translate(-824.000000, -1298.000000)" stroke="#545454" strokeWidth={2}>
                <g id="Group-31" transform="translate(44.000000, 926.000000)">
                  <g id="Group-25" transform="translate(453.000000, 81.000000)">
                    <g id="Group-9" transform="translate(327.000000, 292.000000)">
                      <path d="M0.996844725,5.4375 L40.6146186,5.4375" id="Line-2" strokeLinecap="square" />
                      <polyline id="Path-2" points="37 0 42.8329449 5.70763615 37.6224756 11.4152723" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
      <div className="services__item-svg-wrap">
        <img src={srcImg} alt="" className="services__item-img"/>
      </div>
    </li>
  );
};

export default ServicesItem;
