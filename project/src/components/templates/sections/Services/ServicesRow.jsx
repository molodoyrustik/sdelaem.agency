import React from 'react';

const ServicesRow = (props) => {
  const {
    subTitle,
    mainTitle,
    mainDescription,
  } = props;
  return (
    <div className="services-row">
        <div className="services-row__subtitle">{subTitle}</div>
        <h2 className="services-row__title">{mainTitle}</h2>
        <div className="services-row__text">{mainDescription}</div>
        <svg className='services-row__svg' width="1400px" height="262px" viewBox="0 0 1400 262" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>D81D959E-83C3-484F-9CF5-48B54B377EF5</title>
          <desc>Created with sketchtool.</desc>
          <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="услуги" transform="translate(0.000000, -639.000000)" stroke="#3C3C3C" strokeWidth={2}>
              <path d="M170.186302,645.2 L218.711927,645.2 L122.353899,849.386667 C111.955551,870.186667 103.636872,883.706667 87.3461262,892.72 C79.0274475,897.226667 64.4697598,900 56.8443044,900 C46.0993444,900 37.0874425,897.92 27.728929,894.8 L42.9798399,853.2 C44.712898,853.893333 53.0315766,856.32 56.8443044,856.32 C61.3502553,856.32 65.1629831,855.626667 68.6290992,853.546667 C77.2943895,848.346667 85.6130682,832.053333 86.652903,829.973333 L0,645.2 L47.8324025,645.2 L109.182658,781.093333 L170.186302,645.2 Z M422.865361,808.48 L469.657929,822 C465.151978,834.826667 458.566357,847.653333 449.207843,859.093333 C426.331477,886.826667 392.016927,900 357.355766,900 C320.614935,900 286.300386,885.093333 265.503689,859.093333 C244.706992,833.786667 236.041702,802.933333 236.041702,770 C236.041702,735.68 245.053604,705.173333 265.503689,680.56 C287.340221,653.173333 321.308159,640 357.355766,640 C393.403374,640 427.0247,653.52 449.207843,680.56 C460.299415,694.426667 467.578259,710.026667 472.08421,724.933333 L423.558584,733.253333 C420.785691,724.586667 417.319575,716.266667 411.773789,709.333333 C399.295771,692.693333 378.499075,684.026667 357.355766,684.026667 C335.865846,684.026667 315.06915,692.693333 302.937743,709.333333 C290.113114,725.626667 286.300386,748.16 285.953774,770 C286.300386,791.84 290.113114,814.026667 302.937743,830.666667 C315.06915,847.306667 335.865846,855.973333 357.355766,855.626667 C378.499075,855.973333 399.295771,847.306667 411.773789,830.666667 C416.626352,824.08 420.43908,816.453333 422.865361,808.48 Z M718.177527,645.2 L718.177527,894.8 L671.038348,894.8 L671.038348,689.573333 L586.811726,689.573333 L570.174368,828.933333 C564.281971,878.853333 539.672547,901.386667 492.879979,894.8 L492.879979,853.2 C515.409734,852.506667 525.114859,839.68 527.54114,818.88 L548.684449,645.2 L718.177527,645.2 Z M923.024075,645.2 L971.549701,645.2 L875.191673,849.386667 C864.793325,870.186667 856.474646,883.706667 840.1839,892.72 C831.865221,897.226667 817.307534,900 809.682078,900 C798.937118,900 789.925216,897.92 780.566703,894.8 L795.817614,853.2 C797.550672,853.893333 805.86935,856.32 809.682078,856.32 C814.188029,856.32 818.000757,855.626667 821.466873,853.546667 C830.132163,848.346667 838.450842,832.053333 839.490677,829.973333 L752.837774,645.2 L800.670176,645.2 L862.020432,781.093333 L923.024075,645.2 Z M1165.6514,645.2 L1165.6514,692.346667 L1049.88312,692.346667 L1049.88312,894.8 L1002.74394,894.8 L1002.74394,645.2 L1165.6514,645.2 Z M1359.40661,645.2 L1401,645.2 L1401,894.8 L1352.82099,894.8 L1352.82099,731.866667 L1238.43915,894.8 L1196.84576,894.8 L1196.84576,645.2 L1244.67816,645.2 L1244.67816,808.133333 L1359.40661,645.2 Z" id="УСЛУГИ" />
            </g>
          </g>
        </svg>
    </div>
  );
};

export default ServicesRow;
