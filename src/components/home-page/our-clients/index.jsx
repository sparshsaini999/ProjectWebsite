import React from 'react';
import { StyledOurClients } from './index.styled';
import TitledHeading from '../../common/heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import ClientsCard from './components/ClientsCard';

const OurClients = ({data}) => {
  return (
    <StyledOurClients>
      <div className='our-clients__wrapper'>
        <TitledHeading
          title='CLIENTS'
          heading='Our Esteemed Clients'
          className='our-clients__heading'
        />
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay
          breakpoints={{
            0: {
              slidesPerView: 2.5,
            },
            360: {
              slidesPerView: 3.5,
            },
            576: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4.5,
            },
            992: {
              slidesPerView: 5.5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          {data?.items?.map((team) => (
            <SwiperSlide key={team?.id}>
              <ClientsCard imgUrl={team?.imgUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledOurClients>
  );
};

export default OurClients;
