import React from 'react';
import { StyledTestimonials } from './index.styled';
import TitledHeading from '../../common/heading';
import { Button } from 'antd';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { RiFacebookCircleFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialsCard from './components/TestimonialsCard';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { SOCIAL_MEDIA_DATA } from '../../../constants/AppConst';

const Testimonials = ({ data }) => {
  const navigate = useNavigate();

  return (
    <StyledTestimonials>
      <div className='testimonials__wrapper'>
        <TitledHeading
          title='TESTIMONIALS'
          heading='What Our Clients Say'
          className='testimonials__heading'
        />
        <div className='testimonials__swiper'>
          <div className='testimonials__swiper-wrapper'>
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay
              spaceBetween={20}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {data?.items?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <TestimonialsCard
                    imgUrl={item?.imgUrl}
                    key={item?.id}
                    title={item?.title}
                    designation={item?.designation}
                    content={item?.content}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='testimonials__footer-area'>
          <div className='testimonials__button-area'>
            <Button
              type='primary'
              size='large'
              className='testimonials__button'
              href={data?.button_url}
              onClick={(e) => {
                e.preventDefault();
                navigate(data?.button_url);
              }}
            >
              {data?.button_text}
            </Button>
          </div>
          <div>
            <ul className='testimonials__social-icons'>
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
      </div>
    </StyledTestimonials>
  );
};

export default Testimonials;
