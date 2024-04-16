import React from 'react';
import { StyledDesktopLogo } from '../../index.styled';
import { IMG_PATH } from '../../../../constants/AppConst';
import NAVIGATION from './../../../../assets/data/header.data.json';
import { Link } from 'react-router-dom';

const DesktopLogo = () => {
  return (
    <StyledDesktopLogo>
      <Link to={NAVIGATION?.logoUrl}>
        <img
          className='desktop-logo__img'
          src={`${IMG_PATH}${NAVIGATION?.logo}`}
          alt={NAVIGATION?.logoAlt}
        />
      </Link>
    </StyledDesktopLogo>
  );
};

export default DesktopLogo;
