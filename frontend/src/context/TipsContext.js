import React, { createContext, useState, useEffect } from 'react';
import { getTips } from '../api/tipsApi';

export const TipsContext = createContext();

const TipsProvider = ({ children }) => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await getTips();
        setTips(response.data);
      } catch (error) {
        console.error('Error fetching tips', error);
      }
    };

    fetchTips();
  }, []);

  return (
    <TipsContext.Provider value={{ tips }}>
      {children}
    </TipsContext.Provider>
  );
};

export default TipsProvider;
