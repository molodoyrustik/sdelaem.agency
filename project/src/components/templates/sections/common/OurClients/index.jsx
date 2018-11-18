import React, { Component } from 'react';
import shortid from 'shortid';
import Slider from 'react-slick';
import {
  Tooltip,
} from 'react-tippy';
import 'react-tippy/dist/tippy.css';


const items = [
  {
    src: '/images/content/our-clients/logo-1.png',
  },
  {
    src: '/images/content/our-clients/logo-1.png',
  },
  {
    src: '/images/content/our-clients/logo-2.png',
  },
  {
    src: '/images/content/our-clients/logo-3.png',
  },
  {
    src: '/images/content/our-clients/logo-4.png',
  },
  {
    src: '/images/content/our-clients/logo-5.png',
  },
  {
    src: '/images/content/our-clients/logo-1.png',
  },
  {
    src: '/images/content/our-clients/logo-2.png',
  },
  {
    src: '/images/content/our-clients/logo-3.png',
  },
  {
    src: '/images/content/our-clients/logo-4.png',
  },
  {
    src: '/images/content/our-clients/logo-5.png',
  },
  {
    src: '/images/content/our-clients/logo-1.png',
  },
  {
    src: '/images/content/our-clients/logo-2.png',
  },
  {
    src: '/images/content/our-clients/logo-3.png',
  },
  {
    src: '/images/content/our-clients/logo-4.png',
  },
  {
    src: '/images/content/our-clients/logo-5.png',
  },
  {
    src: '/images/content/our-clients/logo-1.png',
  },
];

const arr = [];
const { length } = items;

for (let i = 0; i < Math.ceil(length / 8); i += 1) {
  arr.push(items.splice(0, 8));
}

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div className='our-clients__custom-slide' {...props}>
        {props.children}
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={'next-arrow'}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg className='next-arrow__svg' width="45px" height="9px" viewBox="0 0 45 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>1EB54E91-9A6D-4DAE-A048-F426DEF3B534</title>
        <desc>Created with sketchtool.</desc>
        <defs />
        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g id="главная" transform="translate(-717.000000, -3507.000000)" stroke="#FFFFFF" strokeWidth={2}>
            <g id="наши-клиенты" transform="translate(-112.000000, 3046.000000)">
              <g id="Group-11" transform="translate(750.000000, 462.000000)">
                <g id="Group-9" transform="translate(79.000000, 0.000000)">
                  <path d="M0.996844725,3.5 L40.6146186,3.5" id="Line-2" strokeLinecap="square" />
                  <polyline id="Path-2" points="37.3040285 0.0665689045 43.1369734 3.57896038 37.9265041 7.09135186" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={'prev-arrow'}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
    <svg className='prev-arrow__svg' width="45px" height="9px" viewBox="0 0 45 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>1EB54E91-9A6D-4DAE-A048-F426DEF3B534</title>
        <desc>Created with sketchtool.</desc>
        <defs />
        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g id="главная" transform="translate(-717.000000, -3507.000000)" stroke="#FFFFFF" strokeWidth={2}>
            <g id="наши-клиенты" transform="translate(-112.000000, 3046.000000)">
              <g id="Group-11" transform="translate(750.000000, 462.000000)">
                <g id="Group-9" transform="translate(79.000000, 0.000000)">
                  <path d="M0.996844725,3.5 L40.6146186,3.5" id="Line-2" strokeLinecap="square" />
                  <polyline id="Path-2" points="37.3040285 0.0665689045 43.1369734 3.57896038 37.9265041 7.09135186" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const OurClients = (props) => {
  return (
    <div className='our-clients'>
      <div className='our-clients__title'>Наши клиенты</div>
      <ul className='our-clients__slider'>
        <Slider {...settings}>
          {
            arr.map((slides, index) => {
              return (
                <CustomSlide key={index} index={index}>
                  {
                    slides.map((item, i) => {
                      return (
                        <li key={i} className='our-clients__item'>
                          <Tooltip
                              key={shortid.generate()}
                              position='top'
                              className='tooltip-overlay'
                              html={(
                                <div className='tooltip'>
                                  <div className="tooltip__content">
                                    Делимся опытом и рассказываем,
                                    каково это — быть Digital-агентством
                                  </div>
                                </div>
                              )}
                            >
                              <div className='our-clients__item-img-wrap'>
                                <img src={item.src} alt='' className='our-clients__item-img'/>
                              </div>
                            </Tooltip>
                        </li>
                      );
                    })
                  }
                </CustomSlide>
              );
            })
          }
        </Slider>
      </ul>
    </div>
  );
};

export default OurClients;
