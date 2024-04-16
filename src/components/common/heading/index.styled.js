import styled from 'styled-components';
import { THEME } from '../../../constants/AppConst';

export const StyledTitledHeading = styled.div`
  text-align: center;

  .titled_paragraph {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    color: #555;
  }
  
  .titled__heading {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 600;
    color: #000;
    margin-top: 5px;
    color: ${THEME?.primaryColor};
  }

  @media (max-width: 565px) {
    .titled__heading {
      font-size: 25px;
    }
  }
`;
