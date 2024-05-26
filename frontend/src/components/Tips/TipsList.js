import React, { useEffect, useState } from 'react';
import { getTips } from '../../api/tipsApi';

const TipsList = () => {
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
    <div>
      <h1>Tips</h1>
      <ul>
        {tips.map(tip => (
          <li key={tip.id}>{tip.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipsList;
