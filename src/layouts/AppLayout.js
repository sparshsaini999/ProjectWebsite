import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledAppLayout } from './AppLayout.styled';
import Header from '../components/headers';
import ScrollToTop from '../components/scroll-top';
import SocialIcons from '../components/social-icons';
import Footer from '../components/footer';

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <SocialIcons />
    </StyledAppLayout>
  );
};

export default AppLayout;
