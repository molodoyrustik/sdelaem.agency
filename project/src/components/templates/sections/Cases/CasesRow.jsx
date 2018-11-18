import React from 'react';

import BreadCrumbs from '../../common/BreadCrumbs';
import CustomLink from '../../common/CustomLink';

const items = [
  {
    title: 'Сайт рекрутингового агентства Intella',
    desc: 'Тексты для сайта, кейсы, редизайн, локализация',
    imgSrc: '/images/content/cases/case-img-small.jpg',
  },
  {
    title: 'Сайт рекрутингового агентства Intella',
    desc: 'Тексты для сайта, кейсы, редизайн, локализация',
    imgSrc: '/images/content/cases/case-img-big.jpg',
  },
  {
    title: 'Сайт рекрутингового агентства Intella',
    desc: 'Тексты для сайта, кейсы, редизайн, локализация',
    imgSrc: '/images/content/cases/case-img-small.jpg',
  },
  {
    title: 'Сайт рекрутингового агентства Intella',
    desc: 'Тексты для сайта, кейсы, редизайн, локализация',
    imgSrc: '/images/content/cases/case-img-small.jpg',
  },
  {
    title: 'Сайт рекрутингового агентства Intella',
    desc: 'Тексты для сайта, кейсы, редизайн, локализация',
    imgSrc: '/images/content/cases/case-img-small.jpg',
  },
  {
    title: 'Сайт рекрутингового агентства Intella',
    desc: 'Тексты для сайта, кейсы, редизайн, локализация',
    imgSrc: '/images/content/cases/case-img-small.jpg',
  },
];

const listItemsRender = (items) => {
  return (
    items.map((item, index) => {
      return (
        <li className="cases-row__item">
          <img src={item.imgSrc} alt="" className="cases-row__item-img"/>
          <div className="cases-row__data-wrap">
            <div className="cases-row__item-title">{item.title}</div>
            <div className="cases-row__item-desc">{item.desc}</div>
          </div>
        </li>
      );
    })
  );
};

const CasesRow = (props) => {
  return (
    <div className="cases-row">
      <div className="cases-row__subtitle">НАШИ КЕЙСЫ</div>
      <h2 className="cases-row__title">Уже сделали</h2>
      <BreadCrumbs />
      <div className="cases-row__wrapper-list">
        <ul className="cases-row__list">
          <li className="cases-row__item">
            <img src={items[0].imgSrc} alt="" className="cases-row__item-img"/>
            <div className="cases-row__data-wrap">
              <div className="cases-row__item-title">{items[0].title}</div>
              <div className="cases-row__item-desc">{items[0].desc}</div>
            </div>
          </li>
          <li className="cases-row__item">
            <img src={items[0].imgSrc} alt="" className="cases-row__item-img"/>
            <div className="cases-row__data-wrap">
              <div className="cases-row__item-title">{items[0].title}</div>
              <div className="cases-row__item-desc">{items[0].desc}</div>
            </div>
          </li>
          <li className="cases-row__item">
            <img src={items[0].imgSrc} alt="" className="cases-row__item-img"/>
            <div className="cases-row__data-wrap">
              <div className="cases-row__item-title">{items[0].title}</div>
              <div className="cases-row__item-desc">{items[0].desc}</div>
            </div>
          </li>
          <li className="cases-row__item">
            <img src={items[0].imgSrc} alt="" className="cases-row__item-img"/>
            <div className="cases-row__data-wrap">
              <div className="cases-row__item-title">{items[0].title}</div>
              <div className="cases-row__item-desc">{items[0].desc}</div>
            </div>
          </li>
          <li className="cases-row__item">
            <img src={items[0].imgSrc} alt="" className="cases-row__item-img"/>
            <div className="cases-row__data-wrap">
              <div className="cases-row__item-title">{items[0].title}</div>
              <div className="cases-row__item-desc">{items[0].desc}</div>
            </div>
          </li>
          <li className="cases-row__item">
            <img src={items[0].imgSrc} alt="" className="cases-row__item-img"/>
            <div className="cases-row__data-wrap">
              <div className="cases-row__item-title">{items[0].title}</div>
              <div className="cases-row__item-desc">{items[0].desc}</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="cases-row__main-link-wrap">
        <CustomLink href="#" className='cases-row__main-link' text="Больше"/>
      </div>
      <svg className='cases-row__svg' width="1400px" height="377px" viewBox="0 0 1400 377" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>19453865-6261-4A4F-94B4-AD19A2CDB09C</title>
        <desc>Created with sketchtool.</desc>
        <defs />
        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g id="кейсы" transform="translate(0.000000, -2177.000000)" stroke="#3C3C3C" strokeWidth={2}>
            <path d="M89.467182,2420.53145 L50.1952568,2420.53145 L50.1952568,2547.10377 L-4,2547.10377 L-4,2264.08491 L50.1952568,2264.08491 L50.1952568,2379.25786 L89.467182,2379.25786 L160.156647,2264.08491 L224.562605,2264.08491 L136.593492,2399.69811 L232.41699,2547.10377 L167.618313,2547.10377 L89.467182,2420.53145 Z M448.411637,2317.54403 L317.243406,2317.54403 L317.243406,2378.86478 L424.848482,2378.86478 L424.848482,2432.3239 L317.243406,2432.3239 L317.243406,2493.64465 L448.411637,2493.64465 L448.411637,2547.10377 L263.833588,2547.10377 L263.833588,2264.08491 L448.411637,2264.08491 L448.411637,2317.54403 Z M646.341297,2178 L687.576819,2178 C687.576819,2212.59119 659.693752,2240.5 625.134458,2240.5 C590.575164,2240.5 562.692097,2212.59119 562.692097,2178 L603.927618,2178 C603.927618,2189.79245 613.35288,2199.22642 625.134458,2199.22642 C636.916035,2199.22642 646.341297,2189.79245 646.341297,2178 Z M687.576819,2264.08491 L734.703129,2264.08491 L734.703129,2547.10377 L680.115153,2547.10377 L680.115153,2362.35535 L550.5178,2547.10377 L503.39149,2547.10377 L503.39149,2264.08491 L557.586746,2264.08491 L557.586746,2448.83333 L687.576819,2264.08491 Z M993.504082,2449.22642 L1046.52118,2464.5566 C1041.41583,2479.10063 1033.95417,2493.64465 1023.35075,2506.61635 C997.431275,2538.06289 958.552069,2553 919.280143,2553 C877.651903,2553 838.772697,2536.09748 815.209542,2506.61635 C791.646386,2477.92138 781.828405,2442.93711 781.828405,2405.59434 C781.828405,2366.67925 792.039106,2332.08805 815.209542,2304.17925 C839.950854,2273.12579 878.437341,2258.18868 919.280143,2258.18868 C960.122946,2258.18868 998.216713,2273.51887 1023.35075,2304.17925 C1035.91776,2319.90252 1044.16487,2337.59119 1049.27022,2354.49371 L994.289521,2363.92767 C991.147767,2354.10063 987.220574,2344.66667 980.937066,2336.80503 C966.799173,2317.93711 943.236018,2308.11006 919.280143,2308.11006 C894.93155,2308.11006 871.368395,2317.93711 857.623221,2336.80503 C843.092608,2355.27987 838.772697,2380.83019 838.379977,2405.59434 C838.772697,2430.35849 843.092608,2455.51572 857.623221,2474.38365 C871.368395,2493.25157 894.93155,2503.07862 919.280143,2502.68553 C943.236018,2503.07862 966.799173,2493.25157 980.937066,2474.38365 C986.435136,2466.91509 990.755047,2458.2673 993.504082,2449.22642 Z M1225.60011,2360.38994 C1256.62493,2360.38994 1284.90072,2375.32704 1301.39492,2398.12579 C1313.1765,2413.84906 1320.63817,2433.89623 1320.24545,2453.55031 C1319.85273,2473.2044 1313.1765,2493.25157 1301.39492,2508.97484 C1290.00607,2525.09119 1273.11914,2536.88365 1254.26861,2542.77987 C1245.23607,2545.53145 1235.41809,2547.10377 1225.60011,2547.10377 L1096.39548,2547.10377 L1096.39548,2264.08491 L1149.80529,2264.08491 L1149.80529,2360.38994 L1225.60011,2360.38994 Z M1355.59018,2264.08491 L1409,2264.08491 L1409,2547.10377 L1355.59018,2547.10377 L1355.59018,2264.08491 Z M1266.05019,2453.55031 C1266.44291,2444.11635 1262.90844,2435.07547 1257.41037,2427.60692 C1249.16326,2416.60063 1235.81081,2410.31132 1225.20739,2410.31132 L1149.80529,2410.31132 L1149.80529,2496.78931 L1225.20739,2496.78931 C1236.20353,2496.78931 1248.37783,2490.10692 1255.83949,2481.45912 C1262.51572,2473.99057 1265.65747,2463.77044 1266.05019,2453.55031 Z" id="КЕЙСЫ" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default CasesRow;
