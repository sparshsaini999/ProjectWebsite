import styled from 'styled-components';
import { THEME } from '../../../constants/AppConst';

export const StyledTestimonials = styled.div`
  padding: 40px 0;
  background-color: #efefef;

  .testimonials__wrapper {
    width: ${THEME?.width};
    max-width: ${THEME?.maxWidth};
    margin: 0 auto;

    .testimonials__heading {
      margin-bottom: 30px;
    }

    .testimonials__swiper {
      .testimonials__swiper-wrapper {
        .swiper {
          padding: 0 0 50px;
        }
      }
    }

    .testimonials__footer-area {
      text-align: center;
      margin-top: 20px;

      .testimonials__button-area {
        margin-bottom: 20px;
      }

      .testimonials__social-icons {
        display: flex;
        justify-content: center;
        align-items: center;

        li {
          &:not(:last-child) {
            margin-right: 20px;
          }

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #000;
            color: #fff;
            font-size: 20px;
            transition: 0.3s ease-in-out;

            &:hover {
              background-color: #fff;
              color: #000;
            }
          }
        }
      }
    }
  }
`;

export const StyledTestimonialsCard = styled.div`
  .testimonials-card__wrapper {
    text-align: center;

    .testimonials-card__image-area {
      width: 120px;
      max-width: 120px;
      margin: 0 auto;
      margin-bottom: 20px;

      img {
        object-fit: contain;
        object-position: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .testimonials-card__details-area {
      margin-bottom: 20px;
      .testimonials-card__title {
        font-size: 20px;
        font-weight: 400;
        color: #000;
        margin-bottom: 10px;
      }
      .testimonials-card__designation {
        font-size: 14px;
        font-weight: 500;
        color: #000;
        margin-bottom: 10px;
        text-transform: uppercase;
      }
    }
    .testimonials-card__content-area {
      padding: 30px 20px;
      background-color: #fff;
      border-radius: ${THEME?.borderRadius};
    }
  }
`;
