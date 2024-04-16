import React from 'react';
import { StyledAboutUs } from './index.styled';
// import { Button } from 'antd';
import { IMG_PATH } from '../../../constants/AppConst';
// import { useNavigate } from 'react-router-dom';

const AboutUs = ({ data }) => {
  // const navigate = useNavigate();

  return (
    <StyledAboutUs>
      <div className='about-us__wrapper'>
        <div className='about-us__left-area'>
          <div className='about-us__banner-image__wrapper'>
            <div className='about-us__banner-image'>
              <img src={`${IMG_PATH}${data?.imgUrl}`} alt='' />
            </div>
          </div>
        </div>
        <div className='about-us__right-area'>
          <h2 className='about-us__title'>
            The Future of the architecture is culture
          </h2>
          <div className='about-us__description'>
            <p>
            Kaizen Architects & Designer was started with one aim in mind: to create and manage
creative and professional Architectural and Project Management solutions.
            </p>
          </div>
          {/* <div className='about-us__footer'>
            <Button
              type='primary'
              size='large'
              className='about-us__button'
              onClick={() => navigate(data?.button_url)}
            >
              {data?.button_text}
            </Button>
          </div> */}
        </div>
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
