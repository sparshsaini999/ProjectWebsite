import styled from 'styled-components';
import { THEME } from '../../../constants/AppConst';

export const StyledAskQuestion = styled.div`
  padding: 80px 0;
  /* background-color: transparent;
  background-image: linear-gradient(rgb(26, 26, 26) 43%, rgb(0, 24, 53) 100%); */
   transition: background 0.3s, border-radius 0.3s, opacity 0.3s; 
  background-color: #f8f8f8;
  color: #000;
  .ask-question__wrapper {
    width: ${THEME?.width};
    max-width: ${THEME?.maxWidth};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${THEME?.borderRadius};

    .ask-question__text-area {
      .ask-question__title {
        font-size: 36px;
        font-weight: 300;
        
      }
    }
    .ask-question__action-area {
      .ask-question__button{
        border-radius: ${THEME?.borderRadius};
&:hover {
          background-color: #41C9E2;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding: 50px 0;

    .ask-question__wrapper {
      flex-direction: column;

      .ask-question__text-area {
        .ask-question__title {
          text-align: center;
          font-size: 24px;
          margin-bottom: 30px;
        }
      }
    }
  }
`;
