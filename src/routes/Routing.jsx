import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import DashBoard from '@/pages/DashBoard/DashBoard';
import LateralMenu from '@/components/LateralMenu/LateralMenu';
import Plantas from '@/pages/Plantas/Plantas';
import SobreNosotros from '@/pages/SobreNosotros/SobreNosotros';
import Administracion from '@/pages/Administracion/Administracion';

function Routing() {
  return (
    <LateralMenu>
  
    <Routes>
        <Route path="*" element={<DashBoard />} />
        <Route path="/test" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />

        <Route path="/inicio" element={<DashBoard />} />
        <Route path="/plantas" element={<Plantas />}/>
        <Route path="/sobre-nosotros" element={<SobreNosotros />}/>
        <Route path="/administracion" element={<Administracion />}/>
    </Routes>
    </LateralMenu>

  );
}

export default Routing;
