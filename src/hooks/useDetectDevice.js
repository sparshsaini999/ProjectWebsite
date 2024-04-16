/**
 * HOOK FOR CHECKING THE IF THE DEVICE VIEWPORT SIZE
 */

import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';
import {
  MOBILE_DEVICE_WIDTH,
  SMALL_DESKTOP_WIDTH,
  SMALL_MOBILE_DEVICE_WIDTH,
  SMALL_TABLET_VIEW_WIDTH,
  TABLET_VIEW_WIDTH,
} from './../constants/AppConst';

const useDetectDevice = () => {
  //#region for hooks
  const { width } = useWindowSize();
  //#endregion

  //#region for states
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_DEVICE_WIDTH,
  );
  const [isSmallMobile, setIsSmallMobile] = useState(
    window.innerWidth <= SMALL_MOBILE_DEVICE_WIDTH,
  );
  const [isTablet, setIsTablet] = useState(
    window.innerWidth <= TABLET_VIEW_WIDTH,
  );
  const [isSmallTablet, setIsSmallTablet] = useState(
    window.innerWidth <= SMALL_TABLET_VIEW_WIDTH,
  );
  const [isSmallDesktop, setIsSmallDesktop] = useState(
    window.innerWidth <= SMALL_DESKTOP_WIDTH,
  );
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > SMALL_DESKTOP_WIDTH,
  );
  //#endregion

  //#region for useEffect
  useEffect(() => {
    setIsMobile(width <= MOBILE_DEVICE_WIDTH);
    setIsSmallMobile(width <= SMALL_MOBILE_DEVICE_WIDTH);
    setIsTablet(width <= TABLET_VIEW_WIDTH);
    setIsSmallTablet(width <= SMALL_TABLET_VIEW_WIDTH);
    setIsSmallDesktop(width <= SMALL_DESKTOP_WIDTH);
    setIsDesktop(width > SMALL_DESKTOP_WIDTH);
  }, [width]);
  //#endregion

  return {
    isMobile,
    isSmallMobile,
    isTablet,
    isSmallTablet,
    isSmallDesktop,
    isDesktop,
  };
};

export default useDetectDevice;
