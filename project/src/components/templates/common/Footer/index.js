import React from 'react';
import { connect } from 'react-redux';

import Logo from '../Header/Logo';

const Footer = (props) => {
  const { items } = props.footerMenu;
  const {
    email,
    vk,
    fb,
    telegram,
  } = props.social.acf;
  return (
    <footer className="footer">
      <div className="footer__list footer__content">
        <div className="footer__element footer__left">
          <div className="footer__element-title footer__logo-wrapper">
            <Logo className='footer__logo-svg'/>
          </div>
          <ul className="footer__element-list">
            <div className="footer__element-item">Сделаем © 2018</div>
            <div className="footer__element-item">При копировании материалов укажите ссылку на сайт.</div>
            <div className="footer__element-item footer__left-last-item">Политика конфиденциальности</div>
          </ul>
        </div>
        <div className="footer__element footer__service">
          <div className="footer__element-title">Услуги</div>
          <ul className="footer__element-list">
            {
              items.map((item, i) => {
                return (
                  <li key={i} className="footer__element-item">
                    <a className='footer__element-item-link' href="">{item.title}</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="footer__element footer__cases">
          <div className="footer__element-title">Последние кейсы</div>
          <ul className="footer__element-list">
            <li className="footer__element-item">
              Бесплатная реклама на сайте VC.ru: как написать статью, чтобы попасть в «популярное»
            </li>
            <li className="footer__element-item">
              Бесконечный контент-план: 205 готовых тем для блога
            </li>
            <li className="footer__element-item">
              Бесконечный контент-план: 205 готовых тем для блога
            </li>
          </ul>
        </div>
        <div className="footer__element footer__contacts">
          <div className="footer__element-title">Наши контакты</div>
          <ul className="footer__element-list">
            <li className="footer__element-item">hello@sdelaem.agency</li>
            <li className="footer__element-item">ad-text</li>
            <li className="footer__element-item">@web_txt</li>
            <li className="footer__element-item">+7 988 350 27 32</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__socials">
          <ul className="footer__socials-list">
            <li className="footer__socials-item">
              <a href={`http://${fb.trim()}`} className="footer__socials-link footer__socials-link--fb">{fb}</a>
            </li>
            <li className="footer__socials-item">
              <a href={`http://${email.trim()}`} className="footer__socials-link footer__socials-link--mail">{email}</a>
            </li>
            <li className="footer__socials-item">
              <a href={`http://${vk.trim()}`} className="footer__socials-link footer__socials-link--vk">{vk}</a>
            </li>
            <li className="footer__socials-item">
              <a href={`http://${telegram.trim()}`} className="footer__socials-link footer__socials-link--telegram">{telegram}</a>
            </li>
          </ul>
        </div>
        <div className="footer__by">
          <div className="footer__by-text">With love from</div>
            <div className="footer__by-svg-wrap">
              <svg className='footer__by-svg' width="33px" height="15px" viewBox="0 0 33 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>D623FBC2-630B-4C1D-B867-CA15D64FBBFD</title>
                <desc>Created with sketchtool.</desc>
                <defs />
                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" opacity="0.900000036">
                  <g id="главная" transform="translate(-1268.000000, -6693.000000)" fill="#DDDDDD">
                    <g id="футер" transform="translate(0.000000, 6273.000000)">
                      <g id="Group" transform="translate(1268.000000, 420.000000)">
                        <path d="M16,1 L16,14 C16,14.5522847 15.5522847,15 15,15 L14.6691358,15 C14.1168511,15 13.6691358,14.5522847 13.6691358,14 L13.6691358,5.35427807 L9.06882403,14.335566 C8.89774213,14.6695729 8.55405901,14.8796791 8.17878629,14.8796791 L7.85959305,14.8796791 C7.48491073,14.8796791 7.14166466,14.6702268 6.97030478,14.3370263 L2.35061728,5.35427807 L2.35061728,14 C2.35061728,14.5522847 1.90290203,15 1.35061728,15 L1,15 C0.44771525,15 6.76353751e-17,14.5522847 0,14 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L1.4680252,2.22044605e-16 C1.84052322,1.53617829e-16 2.18214784,0.207041214 2.35451827,0.537258122 L8.01975309,11.3903743 L13.6655373,0.538467567 C13.8376834,0.207581074 14.1796725,6.85168118e-17 14.5526606,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 Z M7.08119099,0.716027053 C7.63427741,0.154529726 8.50341322,0.154529726 9.05649964,0.716027053 C9.60958606,1.2574709 9.60958606,2.13982384 9.05649964,2.70132117 C8.50341322,3.24276502 7.63427741,3.24276502 7.08119099,2.70132117 C6.54785766,2.13982384 6.54785766,1.2574709 7.08119099,0.716027053 Z" id="Mike-&-Asha" />
                        <path d="M27.2408646,0.61689556 L32.7137587,13.8126179 C32.8954005,14.2505753 32.6876156,14.7528597 32.2496582,14.9345015 C32.1453994,14.9777426 32.033637,15 31.9207667,15 L31.3096161,15 C30.902077,15 30.5353094,14.7526866 30.382537,14.3748656 L29.2811665,11.6510695 L22.7263228,11.6510695 L21.6070809,14.3795208 C21.4531063,14.7548748 21.0876054,15 20.6818976,15 L20.0769099,15 C19.6058289,15 19.2239423,14.6181134 19.2239423,14.1470324 C19.2239423,14.0352089 19.2459303,13.9244766 19.288655,13.8211369 L24.7473799,0.617927432 C24.9020058,0.243928398 25.2668093,7.40476532e-16 25.6715122,6.66133815e-16 L26.3171596,1.11022302e-15 C26.7214559,1.03595499e-15 27.0859769,0.243444978 27.2408646,0.61689556 Z M26.0233699,3.68983957 L23.6290857,9.52540107 L28.3980289,9.52540107 L26.0233699,3.68983957 Z" id="Combined-Shape" transform="translate(26.001712, 7.500000) rotate(-180.000000) translate(-26.001712, -7.500000) " />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default connect((state) => {
  return {
    footerMenu: state.footerMenu.footerMenu,
    social: state.social.social,
  };
})(Footer);
