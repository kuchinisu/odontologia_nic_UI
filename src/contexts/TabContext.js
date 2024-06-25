import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext();

export const useTab = () => useContext(TabContext);

export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('form1');

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};
