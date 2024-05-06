
import React from 'react';
import styled from 'styled-components';

const OldScrollContainer = styled.div`
  // width: 80%;
  // margin: 40px auto;
  background-image: url('/assets/images/scroll.png');
  background-size: cover;
  // padding: 20px;
`;

const ScrollContent = styled.div`
  overflow-y: auto;
  // padding: 20px;
  // max-height: 700px;
`;

const OldScroll = ({ children }) => {
  return (
    <OldScrollContainer className='px-16 sm:px-28 md:py-8 2xl:px-32 w-full md:w-4/5 absolute top-20 md:top-36'>
      <ScrollContent className='md:child:my-5 child:my-5 p-1 px-2 md:p-5 h-[580px] xl:h-[600px] 2xl:h-[75vh] scroll-bar'>{children}</ScrollContent>
    </OldScrollContainer>
  );
};

export default OldScroll;