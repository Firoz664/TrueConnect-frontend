// RegistrationLayout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import RegistrationSlider from '../../components/common/slider/RegistrationSlider';

const RegistrationLayout = () => {
  return (
    <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
      <RegistrationSlider />
      <Outlet /> 
    </div>
  );
}

export default RegistrationLayout;
