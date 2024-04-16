import React, { useEffect, useState } from 'react';
import { StyledOurProjects } from './index.styled';
import TitledHeading from '../../common/heading';
import { IMG_PATH } from '../../../constants/AppConst';
import { Button } from 'antd';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OurProjects = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openLightbox, setOpenLightbox] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('show')) {
      setOpenLightbox(true);
      setIndex(parseInt(queryParams.get('show'), 10));
    } else {
      setOpenLightbox(false);
    }
  }, [location.search]);

  const closeLightbox = () => {
    navigate(-1);
  };

  return (
    <StyledOurProjects>
      <div className='our-projects__wrapper'>
        <TitledHeading
          title='OUR PORTFOLIO'
          heading='Introducing Our Projects'
          className='our-projects__heading'
        />
        <div className='our-projects__projects-grid'>
          {data?.items?.map((item, index) => (
            <Link
              to={`?show=${index}`}
              className='our-projects__projects-grid__item'
              key={item?.id}
            >
              <img src={`${IMG_PATH}${item?.imgUrl}`} alt={item?.title} />
            </Link>
          ))}
        </div>
        <div className='our-projects__footer-action-area'>
          <Button
            type='primary'
            size='large'
            className='our-projects__button'
            href={data?.button_url}
            onClick={(e) => {
              e.preventDefault();
              navigate(data?.button_url);
            }}
          >
            {data?.button_text}
          </Button>
        </div>
      </div>
      <Lightbox
        index={index}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
        open={openLightbox}
        close={closeLightbox}
        plugins={[Fullscreen, Counter, Thumbnails, Zoom]}
        slides={data?.items?.map((item) => ({
          src: `${IMG_PATH}${item?.imgUrl}`,
          caption: item?.title,
        }))}
      />
    </StyledOurProjects>
  );
};

export default OurProjects;
