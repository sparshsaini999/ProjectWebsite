import React from 'react';
import { StyledTitledHeading } from './index.styled';

const TitledHeading = ({ title, heading, className }) => {
  return (
    <StyledTitledHeading className={className}>
      <p className='titled_paragraph'>[{title}]</p>
      <h2 className='titled__heading'>{heading}</h2>
    </StyledTitledHeading>
  );
};

export default TitledHeading;
