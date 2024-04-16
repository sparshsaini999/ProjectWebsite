import React from 'react';
import { StyledFooter } from './index.styled';
import FooterTitle from './components/FooterTitle';
import FooterLinkItem from './components/FooterLinkItem';
// import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { PiPhoneCallFill } from 'react-icons/pi';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { CONTACT_DETAILS, IMG_PATH, SOCIAL_MEDIA_DATA } from '../../constants/AppConst';
import NAVIGATION from './../../assets/data/header.data.json';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='footer-wrapper'>
        <div className='footer-content-area'>
          <div className='footer__grid'>
            <div className='footer__grid-item'>
              <div className='logo-area'>
                <img
                  src={`${IMG_PATH}${NAVIGATION?.logo}`}
                  alt={NAVIGATION?.logoAlt}
                />
              </div>
              {/* <p className='description-area'>
                We love to design and innovate spaces. Meet us, share your
                requirements and help us create your dream space.
              </p> */}
              <div className='social-links'>
                <ul className='social-links__item'>
                  <li>
                    <a
                      href={SOCIAL_MEDIA_DATA[0]?.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <PiInstagramLogoFill />
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIAL_MEDIA_DATA[1]?.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <RiFacebookCircleFill />
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIAL_MEDIA_DATA[2]?.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <RiLinkedinBoxFill />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer__grid-item'>
              <FooterTitle title='Our Services' />
              <FooterLinkItem title='Residential' />
              <FooterLinkItem title='Healthcare' />
              <FooterLinkItem title='Commercial & Mixed use' />
              <FooterLinkItem title='Institutional Design' />
              <FooterLinkItem title='High End Interiors' />
              <FooterLinkItem title='Project Management' />
            </div>
            <div className='footer__grid-item'>
              <FooterTitle title='Locations' />
              <FooterLinkItem title='Panchkula' />
              <FooterLinkItem title='Chandigarh' />
              <FooterLinkItem title='Mohali' />
            </div>
            <div className='footer__grid-item'>
              <FooterTitle title='Contact' />
              <FooterLinkItem
                title={CONTACT_DETAILS?.phone}
                icon={<PiPhoneCallFill />}
                />
              <FooterLinkItem
                title={CONTACT_DETAILS?.email}
                icon={<FaMailBulk />}
              />
              <FooterLinkItem title='FAQ' />
            </div>
            {/* <div className='footer__grid-item'>
              <FooterTitle title='Visit' />
              <FooterLinkItem
                title='Basement, SCO 61, Sector 12A, Panchkula, Haryana, 134109'
                icon={<FaMapMarkerAlt />}
              />
            </div> */}
          </div>
        </div>
        <div className='horizontal-divider' />
        <div className='footer-bottom-area'>
          <div>&copy; Design Cult. All Rights Reserved.</div>
          <small>~ Kaizen Architecture</small>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
