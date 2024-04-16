import styled from 'styled-components';
import { THEME } from '../../../constants/AppConst';

export const StyledAboutUs = styled.div`
  padding: 40px 0;
  background-color: #f8f8f8;

  .about-us__wrapper {
    width: ${THEME?.width};
    max-width: ${THEME?.maxWidth};
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;

    .about-us__left-area {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .about-us__banner-image__wrapper {
        max-width: 500px;
        width: 100%;

        .about-us__banner-image {
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
            border-radius: ${THEME?.borderRadius};
            transition: transform 0.5s ease-in-out;

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }

    .about-us__right-area {
      padding: 10px;
      .about-us__title {
        font-size: 35px;
        color: ${THEME?.primaryColor};
        margin-bottom: 30px;
        font-weight: 600;
        text-transform: uppercase;
      }

      .about-us__description {
        p {
          margin-bottom: 15px;
        }
      }
    }

    .about-us__footer {
      margin-top: 30px;
    }
  }

  @media (max-width: 992px) {
    .about-us__wrapper {
      display: flex;
      flex-direction: column-reverse;
      text-align: center;

      .about-us__left-area {
        margin-top: 20px;
        justify-content: center;
        width: 100%;
      }
    }
  }

  @media (max-width: 565px) {
    .about-us__wrapper {
      .about-us__left-area {
        padding-left: 0px;
        padding-right: 0px;
      }
      .about-us__right-area {
        padding-left: 0px;
        padding-right: 0px;
        .about-us__title {
          font-size: 30px;
        }
      }
    }
  }
`;
