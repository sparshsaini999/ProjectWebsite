import React from 'react';
import { StyledServicesCard } from '../index.styled';
import { IMG_PATH } from '../../../../constants/AppConst';
import { FaPlus } from 'react-icons/fa6';

const ServicesCard = ({ to, imgUrl, title, text }) => {
  return (
    <StyledServicesCard to={to}>
      <div className='services-card__image-area'>
        <img src={`${IMG_PATH}${imgUrl}`} alt={title} />
        <div className='services-card__image-area__overlay'>
          <FaPlus />
        </div>
      </div>
      <div className='services-card__title-area'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </StyledServicesCard>
  );
};

export default ServicesCard;
