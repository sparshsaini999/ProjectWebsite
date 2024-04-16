import styled from 'styled-components';
import { THEME } from '../../../constants/AppConst';

export const StyledOurProjects = styled.div`
  background-color: #f8f8f8;
  padding: 40px 0;

  .our-projects__wrapper {
    width: ${THEME?.width};
    max-width: ${THEME?.maxWidth};
    margin: 0 auto;

    .our-projects__heading {
      margin-bottom: 30px;
    }

    .our-projects__projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 33.33%);

      .our-projects__projects-grid__item {
        position: relative;
        overflow: hidden;
        padding-top: 100%;
        margin: 5px;
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

    .our-projects__footer-action-area {
      padding-top: 30px;
      text-align: center;
    }
  }

  @media (max-width: 767px) {
    .our-projects__wrapper {
      .our-projects__projects-grid {
        grid-template-columns: repeat(2, 50%);
      }
    }
  }

  @media (max-width: 565px) {
    .our-projects__wrapper {
      .our-projects__projects-grid {
        grid-template-columns: repeat(1, 100%);

        .our-projects__projects-grid__item {
          margin: 6px 0;
        }
      }
    }
  }
`;
