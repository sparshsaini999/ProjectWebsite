import React from 'react';
import { StyledTestimonialsCard } from '../index.styled';
import { IMG_PATH } from '../../../../constants/AppConst';

const TestimonialsCard = ({ title, imgUrl, designation, content }) => {
  return (
    <StyledTestimonialsCard>
      <div className='testimonials-card__wrapper'>
        <div className='testimonials-card__image-area'>
          <img src={`${IMG_PATH}${imgUrl}`} alt={title} />
        </div>
        <div className='testimonials-card__details-area'>
          <h6 className='testimonials-card__title'>{title}</h6>
          <p className='testimonials-card__designation'>{designation}</p>
        </div>
        <figure className='testimonials-card__content-area'>{content}</figure>
      </div>
    </StyledTestimonialsCard>
  );
};

export default TestimonialsCard;
