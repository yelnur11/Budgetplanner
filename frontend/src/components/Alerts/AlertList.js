import React, { useEffect, useState } from 'react';
import { getAlerts } from '../../api/alertApi';

const AlertList = () => {
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
    <div>
      <h1>Alerts</h1>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>{alert.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlertList;
