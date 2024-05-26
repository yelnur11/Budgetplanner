import React, { createContext, useState, useEffect } from 'react';
import { getAlerts } from '../api/alertApi';

export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await getAlerts();
        setAlerts(response.data);
      } catch (error) {
        console.error('Error fetching alerts', error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <AlertContext.Provider value={{ alerts }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
