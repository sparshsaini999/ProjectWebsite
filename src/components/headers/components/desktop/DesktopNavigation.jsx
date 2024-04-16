import React from 'react';
import { StyledDesktopNavigation } from '../../index.styled';
import { Link } from 'react-router-dom';
import NAVIGATION from './../../../../assets/data/header.data.json';
import { FaChevronDown } from 'react-icons/fa';

const DesktopNavigation = () => {
  return (
    <StyledDesktopNavigation>
      <ul className='desktop-navigation-list'>
        {NAVIGATION?.nav_list?.map((item) => (
          <li key={item?.id} className='desktop-navigation-list__main-li'>
            <Link
              className='desktop-navigation-list__main-anchor'
              to={item?.url}
            >
              {item?.title}{' '}
              {item?.sub_nav?.length && <FaChevronDown className='ddl-icon' />}
            </Link>
            {item?.sub_nav?.length ? (
              <ul className='desktop-navigation-list__submenu-ul'>
                {item?.sub_nav?.map((subItem) => (
                  <li
                    key={subItem?.id}
                    className='desktop-navigation-list__submain-li'
                  >
                    <Link
                      className='desktop-navigation-list__submain-anchor'
                      to={subItem?.url}
                    >
                      {subItem?.title}{' '}
                      {subItem?.sub_nav?.length && (
                        <FaChevronDown className='ddl-icon' />
                      )}
                    </Link>
                    {subItem?.sub_nav?.length ? (
                      <ul className='desktop-navigation-list__subsubmain-ul'>
                        {subItem?.sub_nav?.map((subSubItem) => (
                          <li
                            key={subSubItem?.id}
                            className='desktop-navigation-list__subsubmain-li'
                          >
                            <Link
                              to={subSubItem?.url}
                              className='desktop-navigation-list__subsubmain-anchor'
                            >
                              {subSubItem?.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </StyledDesktopNavigation>
  );
};

export default DesktopNavigation;
