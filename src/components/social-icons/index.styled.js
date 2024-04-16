import styled from 'styled-components';
import { THEME } from '../../constants/AppConst';

export const StyledSocialIcons = styled.div`
  position: fixed;
  top: 50%;
  right: -100px;
  z-index: 999;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .social-icon__item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    margin-bottom: 5px;
    border-radius: ${THEME?.borderRadius} 0 0 ${THEME?.borderRadius};

     &.green {
      background-color: #25d366;
      color: #fff;
    }

    &.blue {
      background-color: #007aff;
      color: #fff;
    }

    &.red {
      background-color: #ea4335;
      color: #fff;
    } 

    &:hover {
      animation: SHOWSOCIALICONS 0.25s ease-in-out forwards;
    }

    .social-icon__icon-area {
      width: 40px;
      height: 40px;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      bgColor: 'green',
      iconColor: 'white'
    }

    .social-icon__text-msg-area {
      width: 100px;
      font-size: 14px;
    }
  }

  @keyframes SHOWSOCIALICONS {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-100px);
    }
  }
`;
