import React from 'react';
import { StyledOurAchivement } from './index.styled';

const OurAchivement = ({ data }) => {
  return (
    <StyledOurAchivement>
      <div className='achivements__wrapper'>
        {data?.items?.map((item) => (
          <div className='achivements__item' key={item?.id}>
            <div className='achivements__counter-area'>{item?.value}+</div>
            <p className='achivements__title'>{item?.title}</p>
          </div>
        ))}
      </div>
    </StyledOurAchivement>
  );
};

export default OurAchivement;
