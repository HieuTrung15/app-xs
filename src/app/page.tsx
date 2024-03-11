"use client"
import TopMenu from '../components/molecules/TopMenu/TopMenu';
import React from 'react';
import GiaiDB from '@/components/pages/GiaiDB';

const Home = () => {

  return (
    <div>
      <TopMenu />
      <GiaiDB/>
    </div>
  );
};

export default Home;
