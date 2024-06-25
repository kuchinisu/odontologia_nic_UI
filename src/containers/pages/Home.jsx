import React from 'react';
import Layout from "../../components/Layout/Layout";

import Registros from '../../components/Home/Registros';
import Consultas from '../../components/Home/Consultas';

import { useTab } from '../../contexts/TabContext';
import { useState } from 'react';

const Home = () => {
    
  const { selectedTab } = useTab();

  return (
    <Layout>
      <div>

        {selectedTab === 'w1' && (
          <Registros/>
        )}


        {selectedTab === 'w2' && (
          <Consultas/>
        )}

        
        {selectedTab === 'w3' && (
          <div>
            <h2>Formulario 3</h2>
          </div>
        )}
        {selectedTab === 'w4' && (
          <div>
            <h2>Formulario 4</h2>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
