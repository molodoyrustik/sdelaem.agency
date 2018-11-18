import React, { Component } from 'react';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg onClick={onClick} className={`next-arrow__svg ${className}`} width="45px" height="9px" viewBox="0 0 45 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg onClick={onClick} className={`prev-arrow__svg ${className}`} width="45px" height="9px" viewBox="0 0 45 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
  );
}

class MassMedia extends Component {
  state ={
    width: 92.85714285714286,
    count: 1,
    position: 0,
    listElems: 2,
    marginLeft: 0,
  }

  handleClickPrev = () => {
    const {
      position,
      width,
      count,
      listElems,
    } = this.state;
    let newPos = Math.max(position - width * count, -width * (listElems - count));
    newPos = Math.min(position + width * count, 0);
    this.setState({ position: newPos });
  }

  handleClickNext = () => {
    const {
      position,
      width,
      count,
      listElems,
    } = this.state;
    const newPos = Math.max(position - width * count, -width * (listElems - count));
    this.setState({ position: newPos });
  }

  render() {
    return (
      <div className="mass-media">
        <div className="mass-media__title-wrap">
          <h2 className="mass-media__title">Мы в СМИ</h2>
          <div className="mass-media__controller-wrap">
            <SamplePrevArrow onClick={this.handleClickPrev} className='mass-media__prev-arrow'/>
            <SampleNextArrow onClick={this.handleClickNext} className='mass-media__next-arrow'/>
          </div>
        </div>
        <div className="mass-media__carousel">
          <ul style={{ marginLeft: this.state.position + 'vw' }} ref='list' className="mass-media__list">
            <div className="mass-media__carousel-box">
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
            </div>
            <div className="mass-media__carousel-box">
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
              <li className="mass-media__item">
                <img src="/images/content/about/vc-ru.png" alt="" className="mass-media__item-img"/>
                <div className="mass-media__item-title">Что мы знаем о 16-летних</div>
                <div className="mass-media__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
                <div className="mass-media__item-date">12.09.18</div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default MassMedia;