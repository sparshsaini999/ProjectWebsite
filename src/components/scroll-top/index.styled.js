import { Button } from 'antd';
import styled from 'styled-components';

export const StyledScrollToTop = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: SHOWSCROLLTOTOP 0.25s ease-in-out;

  @keyframes SHOWSCROLLTOTOP {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
