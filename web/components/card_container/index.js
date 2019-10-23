import React, { useEffect, useState } from 'react';

const CardContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://106.10.55.220:3000/api/room`)
      .then(res => res.json())
      .then(json => setData(json.rows))
      .catch(err => {
        console.log(err);
        setData({ message: 'error' });
      });
  }, []);

  return <>{data}</>;
};

export default CardContainer;
