import styled from 'styled-components';
import { THEME } from '../../../constants/AppConst';
import { Link } from 'react-router-dom';

export const StyledOurServices = styled.div`
  padding: 40px 0;

  .our-services__wrapper {
    width: ${THEME?.width};
    max-width: ${THEME?.maxWidth};
    margin: 0 auto;

    .our-services__heading {
      margin-bottom: 30px;
    }

    .our-services__grid-area {
      display: grid;
      grid-template-columns: repeat(4, 25%);
      margin-bottom: 30px;

      .our-services__grid-item {
        padding: 0 10px;
        height: 100%;
      }
    }

    .our-services__footer-area {
      text-align: center;

      .our-services__footer-area__title {
        margin-bottom: 25px;
        font-size: 40px;
        font-weight: 400;
        color: ${THEME?.primaryColor};
      }

      .our-services__button {
      }
    }
  }

  @media (max-width: 992px) {
    .our-services__wrapper {
      .our-services__grid-area {
        grid-template-columns: repeat(2, 50%);

        .our-services__grid-item {
          padding-bottom: 20px;
        }
      }
    }
  }

  @media (max-width: 565px) {
    .our-services__wrapper {
      .our-services__grid-area {
        grid-template-columns: repeat(1, 100%);

        .our-services__grid-item {
          padding-left: 0px;
          padding-right: 0px;
        }
      }

      .our-services__footer-area {
        .our-services__footer-area__title {
          font-size: 28px;
          line-height: 1.5;
          font-weight: 500;
        }

        .our-services__button {
        }
      }
    }
  }
`;

export const StyledServicesCard = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;

  .services-card__image-area {
    position: relative;
    overflow: hidden;
    padding-top: 100%;
    display: block;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    .services-card__image-area__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 40px;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      opacity: 0;

      &:hover {
        opacity: 1;
      }
    }
  }

  .services-card__title-area {
    background-color: #272829;
    color: #fff;
    padding: 15px 4px;
    text-align: center;
    flex: 1;
    h3 {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 10px;
      position: relative;
      padding-bottom: 10px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 25%;
        border: 2px solid ${THEME?.primaryColor};
      }
    }

    p {
      font-size: 14px;
      font-weight: 300;
      padding: 0 10px;
    }
  }
`;
