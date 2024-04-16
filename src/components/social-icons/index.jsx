import React from 'react';
import { StyledSocialIcons } from './index.styled';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { CONTACT_DETAILS } from '../../constants/AppConst';

const SocialIcons = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      text: 'Chat With Us',
      link: `https://api.whatsapp.com/send/?phone=${CONTACT_DETAILS?.whatsapp}&text&type=phone_number&app_absent=0`,
      bgColor: 'green',
      color: '#fff',
    },
    {
      id: 2,
      icon: <TbPhoneCall />,
      text: 'Call With Us',
      link: `tel:+${CONTACT_DETAILS?.phone}`,
      bgColor: 'blue',
    },
    {
      id: 3,
      icon: <MdOutlineMailOutline />,
      text: 'Email With Us',
      link: CONTACT_DETAILS?.email,
      bgColor: 'red',
      
  iconColor: 'white'
    },
  ];
  return (
    <StyledSocialIcons>
      {socialIcons?.map((item) => (
        <a
          key={item?.id}
          href={item?.link}
          className={`social-icon__item ${item?.bgColor}`}
        >
          <div className='social-icon__icon-area'>{item?.icon}</div>
          <div className='social-icon__text-msg-area'>
            <p>{item?.text}</p>
          </div>
        </a>
      ))}
    </StyledSocialIcons>
  );
};

export default SocialIcons;
