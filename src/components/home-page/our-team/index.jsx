import React from 'react';
import { StyledOurTeam } from './index.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamCards from './components/TeamCards';
import { Pagination } from 'swiper/modules';
import TitledHeading from '../../common/heading';

const OurTeam = ({ data }) => {
  return (
    <StyledOurTeam>
      <TitledHeading title='Our professional' heading='Meet Our Skilled Team' />
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {data?.items?.map((team) => (
          <SwiperSlide key={team?.id}>
            <TeamCards
              name={team?.name}
              designation={team?.designation}
              imgUrl={team?.imgUrl}
              to={team?.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledOurTeam>
  );
};

export default OurTeam;
