import React from 'react';
import { StyledMobileMenuDrawer } from '../../index.styled';
import NAVIGATION from './../../../../assets/data/header.data.json';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';

const MobileMenuDrawer = ({ open, handleClose }) => {
  return (
    <StyledMobileMenuDrawer placement='left' open={open} onClose={handleClose}>
      <ul>
        {NAVIGATION?.nav_list?.map((item) =>
          item?.sub_nav?.length ? (
            <Collapse
              items={[
                {
                  key: 1,
                  label: item?.title,
                  children: (
                    <ul>
                      {item?.sub_nav?.map((subItem) =>
                        subItem?.sub_nav?.length ? (
                          <Collapse
                            items={[
                              {
                                key: 1,
                                label: subItem?.title,
                                children: (
                                  <ul>
                                    {subItem?.sub_nav?.map((subSubItem) => (
                                      <li key={subSubItem?.id}>
                                        <Link
                                          to={subSubItem?.url}
                                          onClick={handleClose}
                                        >
                                          {subSubItem?.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                ),
                              },
                            ]}
                            expandIconPosition='right'
                            bordered={false}
                          />
                        ) : (
                          <li key={subItem?.id}>
                            <Link to={subItem?.url} onClick={handleClose}>
                              {subItem?.title} {subItem?.sub_nav?.length}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  ),
                },
              ]}
              bordered={false}
              expandIconPosition='right'
            />
          ) : (
            <li key={item?.id}>
              <Link to={item?.url} onClick={handleClose}>
                {item?.title}
              </Link>
            </li>
          ),
        )}
      </ul>
    </StyledMobileMenuDrawer>
  );
};

export default MobileMenuDrawer;
