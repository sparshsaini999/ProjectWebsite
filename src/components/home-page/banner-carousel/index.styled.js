import styled from 'styled-components';
import { THEME } from '../../../constants/AppConst';

export const StyledBannerCarousel = styled.div`
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
    }
  }
`;

export const StyledBannerCards = styled.div`
  .banner-cards__wrapper {
    height: 578px;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      
      object-position: center;
    }

    .banner-cards__content {
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
      color: #fff;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 20px;
      width: 100%;
      height: calc(100% - 40);
      padding-bottom: 40px;

      h2 {
        font-size: 28px;
        line-height: 40px;
        font-weight: 500;
        margin-bottom: 20px;

        span {
          color: ${THEME?.primaryColor};
          text-transform: uppercase;
          font-size: 32px;
          letter-spacing: 1px;
        }
      }
    }
  }

  @media (max-width: 565px) {
    .banner-cards__wrapper {
      height: 750px;
      max-height: 80vh;

      .banner-cards__content {
        h2 {
          font-size: 24px;
          margin-bottom: 15px;
        }
      }
    }
  }
`;
