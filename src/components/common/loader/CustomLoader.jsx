import React from 'react';
import { StyledCustomLoader } from './index.styled';
import { Spin } from 'antd';

export const CustomLoader = ({ size = 'default' }) => {
  return (
    <StyledCustomLoader>
      <div className='loader'>
        <Spin size={size} />
      </div>
    </StyledCustomLoader>
  );
};
