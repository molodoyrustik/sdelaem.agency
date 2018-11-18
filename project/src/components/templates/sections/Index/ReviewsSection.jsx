import React from 'react';
import { connect } from 'react-redux';

const items = [
  {
    name: 'Гарольд Гарольдович',
    position: 'должность, компания',
    src: '/images/content/ava.jpg',
    review: '«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты, проектируем сайты, делаем контент-маркетинг и проводим PR-кампании. Отвечаем за результат и работаем по заранее»',
  },
  {
    name: 'Гарольд Гарольдович',
    position: 'должность, компания',
    src: '/images/content/ava.jpg',
    review: '«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты, проектируем сайты, делаем контент-маркетинг и проводим PR-кампании. Отвечаем за результат и работаем по заранее»',
  },
  {
    name: 'Гарольд Гарольдович',
    position: 'должность, компания',
    src: '/images/content/ava.jpg',
    review: '«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты, проектируем сайты, делаем контент-маркетинг и проводим PR-кампании. Отвечаем за результат и работаем по заранее»',
  },
  {
    name: 'Гарольд Гарольдович',
    position: 'должность, компания',
    src: '/images/content/ava.jpg',
    review: '«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты, проектируем сайты, делаем контент-маркетинг и проводим PR-кампании. Отвечаем за результат и работаем по заранее»',
  },
];

const ReviewsRow = (props) => {
  const items = props.reviewsSection;
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
  return (
    <div className="reviews-section">
      <div className="reviews-section__title">Отзывы о нас</div>
      <ul className="reviews-section__list">
        {
          elements.map((item, index) => {
            const { url } = item.acf.reviewImg;
            const { reviewPosition, reviewText, reviewname } = item.acf;
            return (
              <li key={index} className="reviews-section__item">
                <div className="reviews-section__item-img-wrap">
                  <img src={url} alt="" className="reviews-section__item-img"/>
                </div>
                <div className="reviews-section__user-wrap">
                  <div className="reviews-section__item-name">{reviewname}</div>
                  <div className="reviews-section__item-position">/{reviewPosition}</div>
                  <div className="reviews-section__item-review">{reviewText}</div>
                </div>
              </li>
            );
          })
        }
      </ul>
      <svg className='reviews-section__bg-svg' width="1400px" height="285px" viewBox="0 0 1400 285" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>B058A2B3-FFFD-44D4-AD20-6C3BFC27F09C</title>
        <desc>Created with sketchtool.</desc>
        <defs />
        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g id="главная" transform="translate(0.000000, -2855.000000)" stroke="#3C3C3C" strokeWidth={2}>
            <g id="Group-8" transform="translate(-49.000000, 2856.000000)">
              <path d="M131.239003,282.032242 C92.5065753,282.032242 54.9022764,266.990522 31.5876111,237.659169 C9.77711772,211.33616 0,177.116248 0,141.016121 C0,104.915994 9.77711772,70.320039 31.5876111,43.9970297 C55.2783194,14.2896336 92.1305323,0 131.239003,0 C170.347474,0 206.823644,14.6656766 230.890395,43.9970297 C253.829018,71.8242109 261.72592,104.915994 262.478006,141.016121 C261.72592,178.62042 253.076932,210.584074 230.890395,237.659169 C206.071558,267.742608 168.843302,282.032242 131.239003,282.032242 Z M131.239003,233.898739 C154.553669,234.274782 176.740205,224.873707 190.277752,206.823644 C203.8153,188.773581 208.327816,164.706829 208.327816,141.016121 C208.327816,117.325413 203.8153,92.8826183 190.277752,75.2085978 C176.740205,57.1585343 154.553669,47.7574596 131.239003,48.1335026 C107.924338,47.7574596 85.3617585,57.1585343 72.2002539,75.2085978 C58.2866633,92.8826183 54.1501904,117.325413 53.7741474,141.016121 C54.1501904,164.706829 58.2866633,188.773581 72.2002539,206.823644 C85.3617585,224.873707 107.924338,234.274782 131.239003,233.898739 Z M471.180836,73.3283829 L471.180836,118.453542 L404.621227,118.453542 L404.621227,276.391597 L353.479381,276.391597 L353.479381,118.453542 L286.919772,118.453542 L286.919772,73.3283829 L471.180836,73.3283829 Z M500.135433,121.461885 C504.271905,100.779521 517.057367,86.1138445 533.979302,77.8408987 C548.268935,70.6960819 569.327343,67.687738 586.249277,67.687738 C603.923298,67.687738 625.733791,71.4481679 638.519253,77.8408987 C660.329746,88.7461454 671.987079,107.548295 673.867293,132.367132 C673.867293,147.032809 670.482907,157.938055 662.586004,169.595388 C673.867293,180.876678 678.379809,197.422569 678.003766,213.592418 C677.25168,239.539384 662.209961,259.469662 641.527596,270.374909 C624.981705,278.647855 604.675384,281.656199 586.249277,281.656199 C566.695042,281.656199 546.012677,278.271812 530.970958,270.374909 C510.288593,260.221748 500.135433,243.675857 495.622917,224.121621 L545.636634,211.712203 C547.140806,218.104934 550.525193,222.993493 556.165838,226.753922 C562.934612,231.266438 574.591944,233.522696 586.249277,233.522696 C597.90661,233.522696 608.811856,230.890395 615.956673,226.753922 C623.10149,222.61745 626.109834,218.85702 626.109834,210.960117 C626.109834,200.05487 618.965017,194.414225 605.803512,192.910053 C599.786825,192.157967 593.018051,191.405881 586.249277,191.405881 L566.695042,191.405881 L566.695042,151.921368 L586.249277,151.921368 C592.265965,151.921368 598.658696,151.545325 604.299341,150.417196 C619.34106,147.408852 621.973361,141.768207 621.973361,134.62339 C621.973361,129.734831 618.588974,124.470229 613.324372,121.461885 C606.555598,117.701456 596.778481,115.445198 586.249277,115.445198 C575.720073,115.445198 565.19087,117.701456 559.174182,121.461885 C553.533537,125.222315 551.653322,127.854616 550.901236,133.495261 L500.135433,121.461885 Z M719.367748,73.3283829 L771.26168,73.3283829 L771.26168,138.007777 L811.49828,138.007777 C829.172301,138.007777 848.350493,143.272379 861.888041,156.433883 C875.425588,169.219345 882.194362,188.773581 882.194362,207.57573 C882.194362,226.001836 875.425588,245.180029 861.888041,257.965491 C848.350493,271.126995 829.172301,276.391597 811.49828,276.391597 L719.367748,276.391597 L719.367748,73.3283829 Z M902.500684,73.3283829 L953.64253,73.3283829 L953.64253,276.391597 L902.500684,276.391597 L902.500684,73.3283829 Z M771.26168,186.517323 L771.26168,228.634137 L809.618065,228.634137 C815.25871,228.258094 820.523312,226.001836 824.283742,221.865364 C828.044172,218.104934 830.30043,212.840332 830.30043,207.57573 C830.30043,202.311128 828.044172,197.422569 824.659785,193.662139 C820.899355,189.149624 815.634753,186.517323 809.618065,186.517323 L771.26168,186.517323 Z M1006.28754,74.0804688 L1108.19519,73.3283829 C1125.86921,73.3283829 1142.79114,77.4648558 1155.20056,87.2419735 C1170.24228,98.8993061 1178.51523,114.693112 1178.51523,134.247347 C1178.51523,143.648422 1176.63501,152.673454 1172.49854,160.946399 C1170.61833,163.954743 1168.73811,166.963087 1166.48185,169.595388 C1173.25063,174.85999 1178.89127,181.628764 1182.6517,189.525666 C1186.78817,197.422569 1189.04443,206.823644 1189.04443,215.848676 C1189.04443,233.898739 1180.0194,251.948803 1165.72977,263.230092 C1156.32869,270.374909 1140.53489,276.391597 1129.62964,276.391597 L1006.28754,276.391597 L1006.28754,74.0804688 Z M1058.18147,113.18894 L1058.18147,155.681797 L1108.19519,155.681797 C1115.34001,155.681797 1120.22857,153.42554 1123.989,147.408852 C1126.6213,142.896336 1127.37338,138.38382 1126.99734,134.247347 C1126.6213,130.110874 1126.6213,125.974401 1123.989,121.461885 C1119.85252,115.069155 1115.71605,113.18894 1108.19519,113.18894 L1058.18147,113.18894 Z M1058.18147,194.790268 L1058.18147,237.283126 L1119.10044,237.283126 C1125.49317,237.283126 1130.75777,234.650825 1134.5182,229.01018 C1137.1505,224.497664 1137.52654,219.985149 1137.52654,215.848676 C1137.52654,212.088246 1137.1505,207.57573 1134.5182,203.063214 C1130.75777,197.422569 1126.6213,194.790268 1119.10044,194.790268 L1058.18147,194.790268 Z M1230.40837,73.3283829 L1282.30231,73.3283829 L1282.30231,138.007777 L1322.53891,138.007777 C1340.21293,138.007777 1359.39112,143.272379 1372.92867,156.433883 C1386.46621,169.219345 1393.23499,188.773581 1393.23499,207.57573 C1393.23499,226.001836 1386.46621,245.180029 1372.92867,257.965491 C1359.39112,271.126995 1340.21293,276.391597 1322.53891,276.391597 L1230.40837,276.391597 L1230.40837,73.3283829 Z M1413.54131,73.3283829 L1464.68316,73.3283829 L1464.68316,276.391597 L1413.54131,276.391597 L1413.54131,73.3283829 Z M1282.30231,186.517323 L1282.30231,228.634137 L1320.65869,228.634137 C1326.29934,228.258094 1331.56394,226.001836 1335.32437,221.865364 C1339.0848,218.104934 1341.34105,212.840332 1341.34105,207.57573 C1341.34105,202.311128 1339.0848,197.422569 1335.70041,193.662139 C1331.93998,189.149624 1326.67538,186.517323 1320.65869,186.517323 L1282.30231,186.517323 Z" id="Отзывы" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default connect((state) => {
  return {
    posts: state.posts.items,
  };
})(ReviewsRow);
