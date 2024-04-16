import React, { useState } from 'react';
import { StyledMobileHeader } from './index.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileMenuDrawer from './components/mobile/MobileMenuDrawer';
import NAVIGATION from './../../assets/data/header.data.json';
import { IMG_PATH } from '../../constants/AppConst';
import { Link } from 'react-router-dom';

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  return (
    <StyledMobileHeader>
      <div className='mobile-header__wrapper'>
        <div className='mobile-header__left-area'>
          <div className='mobile-header__logo'>
            <Link to={NAVIGATION?.logoUrl}>
              <img
                className='mobile-header__img'
                src={`${IMG_PATH}${NAVIGATION?.logo}`}
                alt={NAVIGATION?.logoAlt}
              />
            </Link>
          </div>
        </div>
        <div className='mobile-header__right-area'>
          <div className='mobile-header__menu'>
            <button onClick={handleMenu} className='mobile-header__menu-icon'>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      <MobileMenuDrawer open={showMenu} handleClose={handleMenu} />
    </StyledMobileHeader>
  );
};

export default MobileHeader;
