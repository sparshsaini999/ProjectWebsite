import React from 'react';
import { StyledDesktopHeader } from './index.styled';
import DesktopLogo from './components/desktop/DesktopLogo';
import DesktopNavigation from './components/desktop/DesktopNavigation';
import DesktopActions from './components/desktop/DesktopActions';

const DesktopHeader = () => {
  return (
    <StyledDesktopHeader>
      <div className='desktop-header__wrapper'>
        <div className='desktop-header__left-area'>
          <DesktopLogo />
        </div>
        <div className='desktop-header__center-area'>
          <DesktopNavigation />
        </div>
        <div className='desktop-header__right-area'>
          <DesktopActions />
        </div>
      </div>
    </StyledDesktopHeader>
  );
};

export default DesktopHeader;
