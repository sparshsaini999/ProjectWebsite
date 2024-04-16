import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledOurTeam = styled.div`
  padding: 50px 0;

  .swiper-backface-hidden {
    padding: 43px 0;

    .swiper-pagination-bullets {
      bottom: -5px;
    }
  }
`;

export const StyledTeamCards = styled(Link)`
  display: block;
  position: relative;

  .team-card__wrapper {
  }

  .image-area {
    position: relative;
    padding-top: 129%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      display: block;
      transition: filter 0.3s ease-in-out;
      filter: grayscale(0%);
    }
  }

  .team-card__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .team-card__overlay__content {
    text-align: center;
  }

  .team-card__overlay__name {
    font-size: 24px;
    color: #fff;
    margin-bottom: 5px;
    padding: 0 15px;
    text-transform: uppercase;
  }

  .team-card__overlay__designation {
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    padding: 0 15px;
  }

  &:hover {
    .image-area {
      img {
        filter: grayscale(100%);
      }
    }
    .team-card__overlay {
      opacity: 1;
    }
  }
`;
