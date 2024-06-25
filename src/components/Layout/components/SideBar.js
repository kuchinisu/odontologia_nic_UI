import { Link } from "react-router-dom";
import React from 'react';
import { useTab } from '../../../contexts/TabContext';

const SideBar = () => {
  const { setSelectedTab } = useTab();

  const handleTabClickVentana = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="flex-1">
        <Link to={'/'}>
          <a className="btn btn-ghost text-xl">UrsiFi</a>
        </Link>
      </div>
      <div className="font-bold text-xl mt-16" onClick={() => handleTabClickVentana('w1')}>
        Registro
      </div>
      <div className="font-bold text-xl mt-24" onClick={() => handleTabClickVentana('w2')}>
        Consulta
      </div>
      <div className="font-bold text-xl mt-24 mb-5" onClick={() => handleTabClickVentana('w3')}>
        Identificación
      </div>
      <div className="font-bold text-xl mt-24 mb-10" onClick={() => handleTabClickVentana('w4')}>
        Historial
      </div>
    </div>
  );
};

export default SideBar;
