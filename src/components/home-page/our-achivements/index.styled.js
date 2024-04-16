import styled from 'styled-components';
import { THEME } from '../../../constants/AppConst';

export const StyledOurAchivement = styled.div`
  background-color: rgba(185, 143, 30, 0.2);
  padding: 20px 0;

  .achivements__wrapper {
    text-align: center;
    width: ${THEME?.width};
    max-width: ${THEME?.maxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .achivements__item {
      width: calc((100% - 30px) / 4);
      background-color: #272829;
      padding: 30px 10px;
      border-radius: ${THEME?.borderRadius};
      transition: 0.3s ease-in-out;

      &:hover {
        transform: scale(1.02);
      }
      .achivements__counter-area {
        font-size: 40px;
        font-weight: 700;
        color: #fff;
      }

      .achivements__title {
        font-size: 16px;
        font-weight: 700;
        color: ${THEME?.primaryColor};
      }
    }
  }

  @media (max-width: 992px) {
    padding: 30px 0;
    .achivements__wrapper {
      
      .achivements__item {
        width: calc((100% - 20px) / 2);
        &:nth-child(1),
        &:nth-child(2) {
          margin-bottom: 20px;
        }
        .achivements__counter-area {
          font-size: 30px;
        }

        .achivements__title {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 565px) {
    .achivements__wrapper {
      .achivements__item {
        width: 100%;
        margin-bottom: 20px;
        .achivements__counter-area {
          font-size: 30px;
        }

        .achivements__title {
          font-size: 14px;
        }
      }
    }
  }
`;
