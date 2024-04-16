import React from 'react';
import { StyledAskQuestion } from './index.styled';
import { Button } from 'antd';
import { CONTACT_DETAILS } from '../../../constants/AppConst';

const AskQuestion = () => {
  return (
    <StyledAskQuestion>
      <div className='ask-question__wrapper'>
        <div className='ask-question__text-area'>
          <h4 className='ask-question__title'>
            Do You Have Question About Your Project?
          </h4>
        </div>
        <div className='ask-question__action-area'>
          <Button
            type='primary'
            size='large'
            className='ask-question__button'
            href={`tel:${CONTACT_DETAILS?.phone}`}
            
          >
            BOOK A CALL
          </Button>
        </div>
      </div>
    </StyledAskQuestion>
  );
};

export default AskQuestion;
