import React from 'react';
import youtubeLogo from '../../assets/img/youtube.svg';
import vkLogo from '../../assets/img/vk.svg';
import facebookLogo from '../../assets/img/facebook.svg';
import instagramLogo from '../../assets/img/instagram.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='copyright'>
          <nav className='socials navbar-info'>
            <div className='container navbar-info__container'>
              <div className='socials__content'>
                <div className='social__item'>
                  <a className='social__link' href='https://www.youtube.com/' target='_blank'>
                    <img className='logo__img' src={youtubeLogo} alt='youtube-logo' />
                  </a>
                </div>
                <div className='social__item'>
                  <a className='social__link' href='https://www.vk.com/' target='_blank'>
                    <img className='logo__img' src={vkLogo} alt='vk-logo' />
                  </a>
                </div>
                <div className='social__item'>
                  <a className='social__link' href='https://www.facebook.com/' target='_blank'>
                    <img className='logo__img' src={facebookLogo} alt='facebook-logo' />
                  </a>
                </div>
                <div className='social__item'>
                  <a className='social__link' href='https://www.instagram.com/' target='_blank'>
                    <img className='logo__img' src={instagramLogo} alt='instagram-logo' />
                  </a>
                </div>
              </div>
              <div className='feedback'>
                <a className='feedback__phone' href='tel:+380951234567'>
                  +38 (012) 345-67-89
                </a>
                <button className='feedback__button btn btn--primary' type='button'>
                  back call
                </button>
              </div>
            </div>
          </nav>

          <div className='container copyright__container'>
            <div className='copyright__description'>©2022-2023 All rights reserved.</div>
            <div className='privacy-policy'>
              {/* <a className='privacy-policy__link' href=''> */}
              Privacy Policy
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
