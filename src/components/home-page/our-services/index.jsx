import React from 'react';
import { StyledOurServices } from './index.styled';
import TitledHeading from '../../common/heading';
// import { Button } from 'antd';
import ServicesCard from './components/ServicesCard';
// import { useNavigate } from 'react-router-dom';

const OurServices = ({ data }) => {
  // const navigate = useNavigate();

  return (
    <StyledOurServices>
      <div className='our-services__wrapper'>
        <TitledHeading
          title='OUR FORTE'
          heading='What We Do'
          className='our-services__heading'
        />
        <div className='our-services__grid-area'>
          {data?.items?.map((item) => (
            <div className='our-services__grid-item' key={item?.id}>
              <ServicesCard
                to={item?.to}
                imgUrl={item?.imgUrl}
                title={item?.title}
                text={item?.text}
              />
            </div>
          ))}
        </div>
        {/* <div className='our-services__footer-area'>
          <h2 className='our-services__footer-area__title'>
            {data?.footer_text}
          </h2>
          <Button
            type='primary'
            size='large'
            className='our-services__button'
            href={data?.button_url}
            onClick={(e) => {
              e.preventDefault();
              navigate(data?.button_url);
            }}
          >
            {data?.button_text}
          </Button>
        </div> */}
      </div>
    </StyledOurServices>
  );
};

export default OurServices;
