import React from 'react';
import { StyledTeamCards } from '../index.styled';
import { IMG_PATH } from '../../../../constants/AppConst';

const TeamCards = ({ imgUrl, name, designation, to }) => {
  return (
    <StyledTeamCards to={to}>
      <div className='team-card__wrapper'>
        <div className='image-area'>
          <img src={`${IMG_PATH}${imgUrl}`} alt={name} />
        </div>
        <div className='team-card__overlay'>
          <div className='team-card__overlay__content'>
            <h3 className='team-card__overlay__name'>{name}</h3>
            <p className='team-card__overlay__designation'>[{designation}]</p>
          </div>
        </div>
      </div>
    </StyledTeamCards>
  );
};

export default TeamCards;
