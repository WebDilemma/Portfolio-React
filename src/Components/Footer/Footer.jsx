import React, { useEffect, useState } from 'react';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';
const Footer = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 960);

  const updateMedia = () => {
    setMobile(window.innerWidth < 960);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
  return <>{isMobile ? <MobileFooter /> : <DesktopFooter />}</>;
};

export default Footer;
