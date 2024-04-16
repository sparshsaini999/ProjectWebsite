import { Drawer } from 'antd';
import styled from 'styled-components';
import { THEME } from '../../constants/AppConst';

export const StyledDesktopHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fefbf6;
  color: #000;
  z-index: 999;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  .desktop-header__wrapper {
    display: grid;
    grid-template-columns: 20% 60% 20%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 12px;
    align-items: center;

    .desktop-header__left-area {
    }

    .desktop-header__center-area {
    }

    .desktop-header__right-area {
    }
  }
`;

export const StyledMobileHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  color: #fff;
  z-index: 999;

  .mobile-header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .mobile-header__left-area {
      .mobile-header__logo {
        a {
          display: block;
          img {
            display: block;
            width: 100%;
            max-width: 80px;
          }
        }
      }
    }

    .mobile-header__right-area {
      .mobile-header__menu {
        .mobile-header__menu-icon {
          background-color: transparent;
          color: #000;
          border: none;
          font-size: 24px;
        }
      }
    }
  }
`;

export const StyledDesktopLogo = styled.div`
  a {
    display: block;
    max-width: max-content;

    .desktop-logo__img {
      display: block;
      width: 100%;
      max-width: 80px;
    }
  }
`;

export const StyledDesktopNavigation = styled.nav`
  .desktop-navigation-list {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;

    a {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #000;
        transition: width 0.3s;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }

    .desktop-navigation-list__main-li {
      position: relative;

      &:hover {
        .ddl-icon {
          transform: rotate(180deg);
        }
      }

      .desktop-navigation-list__main-anchor {
        color: #000;
        text-decoration: none;
        margin: 0 10px;
        padding: 10px 0;
        position: relative;
        display: flex;
        font-weight: 500;
        letter-spacing: 0.5px;

        .ddl-icon {
          margin-left: 5px;
          transition: transform 0.3s ease-in-out;
        }
      }

      .desktop-navigation-list__submenu-ul {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #000;
        display: none;
        padding: 10px;
        border: 1px solid #fff;
        z-index: 1;
        min-width: 160px;
        animation: fadeIn 0.3s ease-in-out;
        border-radius: ${THEME?.borderRadius};

        .desktop-navigation-list__submain-li {
          border-radius: ${THEME?.borderRadius};
          position: relative;

          .desktop-navigation-list__submain-anchor {
            color: #fff;
            text-decoration: none;
            padding: 10px;
            display: block;

            .ddl-icon {
              margin-left: 5px;
              transform: rotate(0deg);
              transition: transform 0.3s ease-in-out;
            }
          }

          &:hover {
            .ddl-icon {
              transform: rotate(-90deg);
            }
          }

          .desktop-navigation-list__subsubmain-ul {
            position: absolute;
            top: 0;
            left: 100%;
            background-color: #000;
            display: none;
            padding: 10px;
            border: 1px solid #fff;
            z-index: 1;
            border-radius: ${THEME?.borderRadius};

            .desktop-navigation-list__subsubmain-li {
              .desktop-navigation-list__subsubmain-anchor {
                padding: 10px;
                color: #fff;
                text-decoration: none;
                position: relative;
                display: block;
              }
            }
          }

          &:hover {
            .desktop-navigation-list__subsubmain-ul {
              display: block;
            }
          }
        }
      }

      &:hover {
        .desktop-navigation-list__submenu-ul {
          display: block;
        }
      }
    }
  }
`;

export const StyledDesktopActions = styled.div`
  .desktop-actions__wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .desktop-actions__button {
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 0.5px;
      border-radius: ${THEME?.borderRadius};
     

    }
    .desktop-actions__button:hover {
      background-color: #41C9E2;
      color: #41C9E2;
    }
  }
`;

export const StyledMobileMenuDrawer = styled(Drawer)`
  &.ant-drawer-content {
    background-color: ${THEME?.headerBgColor};
    color: ${THEME?.headerColor};

    .ant-drawer-header {
      padding-left: 10px;
      padding-right: 10px;

      .ant-drawer-header-title {
        justify-content: flex-end;

        .ant-drawer-close {
          margin-right: 0;
          color: ${THEME?.headerColor};
        }
      }
    }

    .ant-drawer-body {
      padding: 20px;

      a {
        color: ${THEME?.headerColor};
        display: block;
        padding: 8px 0;
      }

      .ant-collapse {
        .ant-collapse-item {
          .ant-collapse-header {
            padding: 8px 0;
            .ant-collapse-expand-icon {
              color: ${THEME?.headerColor};
            }
            .ant-collapse-header-text {
              color: ${THEME?.headerColor};
            }
          }
        }
      }
    }
  }
`;
