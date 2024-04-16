import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMG_PATH, THEME } from '../../constants/AppConst';

export const StyledFooter = styled.footer`
  background-color: ${THEME?.primaryColor};
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${IMG_PATH}banners/footer-bg-banner.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center bottom;
  color: ${THEME?.primaryColorContrast};

  .footer-wrapper {
    .footer-content-area {
      padding: 30px 0;
      width: ${THEME?.width};
      margin: 0 auto;
      max-width: ${THEME?.maxWidth};

      .footer__grid {
        display: grid;
        grid-template-columns: repeat(4, 25%);

        .footer__grid-item {
          padding-right: 15px;
        }
      }
    }

    .footer-bottom-area {
      max-width: max-content;
      margin: 0 auto;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      padding: 15px 0;

      small {
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        display: block;
        text-align: center;
        margin-top: 5px;
      }
    }
  }

  .logo-area {
    margin-bottom: 30px;
    img {
      max-width: 100%;
      width: 80px;
      height: auto;
    }
  }

  .description-area {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .social-links {
    .social-links__item {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-start;

      li {
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: ${THEME?.primaryColorContrast};
          color: ${THEME?.primaryColor};
          font-size: 20px;
          transition: 0.3s ease-in-out;
          margin-right: 20px;

          &:hover {
            background-color: ${THEME?.primaryColor};
            color: ${THEME?.primaryColorContrast};
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .social-links {
      .social-links__item {
        justify-content: center;

        li {
          &:last-child {
            a {
              margin-right: 0;
            }
          }
        }
      }
    }

    .footer-wrapper {
      .footer-content-area {
        .footer__grid {
          display: flex;
          flex-wrap: wrap;

          .footer__grid-item {
            padding-right: 0;

            &:nth-child(1) {
              margin-bottom: 30px;
              width: 100%;
            }

            &:nth-child(2) {
              margin-bottom: 30px;
              width: 50%;
              padding-right: 15px;
            }

            &:nth-child(3) {
              width: 50%;
              margin-bottom: 30px;
            }

            &:nth-child(4) {
              margin-bottom: 30px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 565px) {
    .footer-wrapper {
      .footer-content-area {
        .footer__grid {
          .footer__grid-item {
            text-align: center;
            &:nth-child(1) {
              width: 100%;
              .logo-area {
                text-align: center;
                img {
                  margin: auto;
                }
              }
            }

            &:nth-child(2) {
              width: 100%;
              padding-right: 0;
            }

            &:nth-child(3) {
              width: 100%;
            }

            &:nth-child(4) {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

export const StyledFooterTitle = styled.div`
  margin-bottom: 20px;

  h6.footer-title {
    font-size: 16px;
    font-weight: 400;
    color: ${THEME?.primaryColorContrast};
  }

  @media (max-width: 565px) {
    h6.footer-title {
      font-size: 28px;
    }
  }
`;

export const StyledFooterLinkItem = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  display: block;

  .link-wrapper {
    display: flex;
    align-items: center;
    padding: 3px 0;

    .icon-area {
      margin-right: 10px;
      font-size: 18px;
    }

    .title-area {
      position: relative;
      font-size: 14px;
      font-weight: 400;
      white-space: wrap;
      word-break: break-all;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0%;
        border-top: 1px solid ${THEME?.primaryColorContrast};
        transition: width 0.3s ease-in-out;
      }
    }
  }

  &:hover {
    .title-area {
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 565px) {
    .link-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      .icon-area {
      }

      .title-area {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
`;
