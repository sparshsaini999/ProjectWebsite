import React from 'react';
import { StyledFooterLinkItem } from '../index.styled';
import { FaAngleRight } from 'react-icons/fa6';

const FooterLinkItem = ({ icon, title, to, className }) => {
  return (
    <StyledFooterLinkItem to={to} className={className}>
      <div className='link-wrapper'>
        <div className='icon-area'>{icon ? icon : <FaAngleRight />}</div>
        <div className='title-area'>{title}</div>
      </div>
    </StyledFooterLinkItem>
  );
};

export default FooterLinkItem;
