import HomeOne from '@/components/homes/home';
import HomeTwo from '@/components/homes/home-2';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Seasoned Crypto-Dev",
};

const MainHome = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default MainHome;