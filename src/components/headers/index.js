import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import useDetectDevice from './../../hooks/useDetectDevice';

const Header = () => {
  const { isTablet } = useDetectDevice();

  return isTablet ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
