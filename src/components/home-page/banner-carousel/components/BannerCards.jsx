import React from 'react';
import { StyledBannerCards } from '../index.styled';
import { IMG_PATH } from '../../../../constants/AppConst';
// import { Button } from 'antd';

const BannerCards = ({ imgUrl, title, buttonText, url }) => {
  return (
    <StyledBannerCards>
      <div className='banner-cards__wrapper'>
        <img src={`${IMG_PATH}${imgUrl}`} alt={title} />
        <div className='banner-cards__content'>
          <h2 className='banner-cards__title'>{title}</h2>
          {/* <Button type='primary' size='large' href={url}>
            {buttonText}
          </Button> */}
        </div>
      </div>
    </StyledBannerCards>
  );
};

export default BannerCards;
