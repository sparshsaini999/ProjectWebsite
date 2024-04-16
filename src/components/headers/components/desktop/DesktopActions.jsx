import React from 'react';
import { StyledDesktopActions } from '../../index.styled';
import { Button } from 'antd';
import NAVIGATION from './../../../../assets/data/header.data.json';
import { CONTACT_DETAILS } from '../../../../constants/AppConst';

const DesktopActions = () => {
  return (
    <StyledDesktopActions>
      <div className='desktop-actions__wrapper'>
        <Button
          type='primary'
          className='desktop-actions__button'
          href={`tel:${CONTACT_DETAILS?.phone}`}
        >
          {NAVIGATION?.book_a_call?.title}
        </Button>
      </div>
    </StyledDesktopActions>
  );
};

export default DesktopActions;
