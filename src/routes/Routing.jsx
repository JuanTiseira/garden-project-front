import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import DashBoard from '@/pages/DashBoard/DashBoard';
import LateralMenu from '@/components/LateralMenu/LateralMenu';
import Plantas from '@/pages/Plantas/Plantas';

function Routing() {
  return (
    <LateralMenu>
  
    <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />

        <Route path="/inicio" element={<DashBoard />} />
        <Route path="/plantas" element={<Plantas />}/>
    </Routes>
    </LateralMenu>

  );
}

export default Routing;
