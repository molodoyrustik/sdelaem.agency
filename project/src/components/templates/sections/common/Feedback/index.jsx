import React from 'react';
import { connect } from 'react-redux';

import CustomInput from '../../../common/CustomInput';

const Feedback = (props) => {
  const { contactsComponentClassName, formComponentClassName } = props;
  const contactsClassName = contactsComponentClassName === undefined ? '' : contactsComponentClassName;
  const formClassName = formComponentClassName === undefined ? '' : formComponentClassName;
  const {
    phone,
    email,
    skype,
    telegram,
    contactsTitle,
  } = props.social.acf;
  return (
      <div className="feedback">
          <div className={`feedback__contacts ${contactsClassName}`}>
              <div className="feedback__contacts-title">{contactsTitle}</div>
              <ul className="feedback__socials">
                  <li className="feedback__socials-item">
                      <img src="/images/icons/contacts/sms.svg" alt="" className="feedback__socials-img--sms"/>
                      <a href="#" className="feedback__socials-link">{email}</a>
                  </li>
                  <li className="feedback__socials-item">
                      <img src="/images/icons/contacts/skype.svg" alt="" className="feedback__socials-img--skype"/>
                      <a href="#" className="feedback__socials-link">{skype}</a>
                  </li>
                  <li className="feedback__socials-item">
                      <img src="/images/icons/contacts/tg.svg" alt="" className="feedback__socials-img--tg"/>
                      <a href="#" className="feedback__socials-link">{telegram}</a>
                  </li>
                  <li className="feedback__socials-item">
                      <img src="/images/icons/contacts/phone.svg" alt="" className="feedback__socials-img--phone"/>
                      <a href="#" className="feedback__socials-link">{phone}</a>
                  </li>
              </ul>
          </div>
          <div className={`feedback__talk-form ${formClassName}`}>
              <div className="feedback__talk-form-title">Давайте поговорим</div>
              <form action="" className="feedback__form">
                  <CustomInput type='text' className='feedback__input--name' placeholder='Имя'/>
                  <CustomInput type='text' className='feedback__input--email' placeholder='E-mail'/>
                  <CustomInput type='text' className='feedback__input--text' placeholder='Расскажите о себе'/>
                  <button type="submit" className='feedback__btn'>Отправить</button>
              </form>
              <div className="feedback__personal-data">
                  Нажимая на кнопку, вы соглашаетесь
                  <span> на обработку своих персональных данных</span>
              </div>
          </div>
      </div>
  );
};

export default connect((state) => {
  return {
    social: state.social.social,
  };
})(Feedback);
