import React from 'react';
import { StyledFooterTitle } from '../index.styled';

const FooterTitle = ({ title }) => {
  return (
    <StyledFooterTitle>
      <h6 className='footer-title'>{title}</h6>
    </StyledFooterTitle>
  );
};

export default FooterTitle;
