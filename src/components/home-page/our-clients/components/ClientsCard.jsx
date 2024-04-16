import React from 'react';
import { StyledClientsCard } from '../index.styled';
import { IMG_PATH } from '../../../../constants/AppConst';

const ClientsCard = ({ imgUrl }) => {
  return (
    <StyledClientsCard>
      <div className='client-card__wrapper'>
        <div className='client-card__image'>
          <img src={`${IMG_PATH}${imgUrl}`} alt='Our Client' />
        </div>
      </div>
    </StyledClientsCard>
  );
};

export default ClientsCard;
