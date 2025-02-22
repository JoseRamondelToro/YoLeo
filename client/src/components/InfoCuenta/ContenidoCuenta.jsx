import React from "react";
import { Routes, Route } from "react-router-dom";
import InfoCuenta from "./InfoCuenta";
import PrestamosReservas from "./PrestamosReservas";
import Notifications from "./Notifications";
import Historial from "./Historial";
import Favorites from "./Favorites";

const ContenidoCuenta = () => {
  return (
    <div>
      <Routes>
        <Route path="info" element={<InfoCuenta />} />
        <Route path="loans" element={<PrestamosReservas />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="history" element={<Historial />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default ContenidoCuenta;
