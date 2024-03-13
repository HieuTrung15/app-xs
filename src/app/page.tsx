"use client"
import TopMenu from '../components/molecules/TopMenu/TopMenu';
import React from 'react';
import SpecialPrize from '@/components/pages/SpecialPrize/SpecialPrize';

const Home = () => {

  return (
    <div>
      <TopMenu />
      <SpecialPrize/>
    </div>
  );
};

export default Home;
