import React, { useEffect, useRef } from 'react';
import { StyledBannerCarousel } from './index.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerCards from './components/BannerCards';
import { Pagination } from 'swiper/modules';

const BannerCarousel = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        swiper.slideNext();
      },3000);
    };

    const stopAutoScroll = () => {
      clearInterval(interval);
    };

    if (swiper) {
      swiper.on('pointerDown', stopAutoScroll);
      swiper.on('pointerUp', startAutoScroll);
      swiper.on('touchStart', stopAutoScroll);
      swiper.on('touchEnd', startAutoScroll);
      swiper.on('slideChange', startAutoScroll);
    }

    return () => {
      if (swiper) {
        swiper.off('pointerDown', stopAutoScroll);
        swiper.off('pointerUp', startAutoScroll);
        swiper.off('touchStart', stopAutoScroll);
        swiper.off('touchEnd', startAutoScroll);
        swiper.off('slideChange', startAutoScroll);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledBannerCarousel>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <BannerCards
              imgUrl={item?.imgUrl}
              title={item?.title}
              buttonText={item?.buttonText}
              url={item?.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledBannerCarousel>
  );
};

export default BannerCarousel;
