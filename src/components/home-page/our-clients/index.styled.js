import styled from 'styled-components';
import { THEME } from '../../../constants/AppConst';

export const StyledOurClients = styled.div`
  padding: 50px 0 30px;
  .our-clients__wrapper {
    width: ${THEME?.width};
    max-width: ${THEME?.maxWidth};
    margin: 0 auto;

    .our-clients__heading {
      margin-bottom: 20px;
    }
  }
`;

export const StyledClientsCard = styled.div`
  .client-card__wrapper {
    .client-card__image {
      position: relative;
      overflow: hidden;
      padding-top: 100%;
      width: 120px;
      max-width: 120px;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
`;
