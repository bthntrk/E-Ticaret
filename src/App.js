import React, { useEffect, useState } from 'react';
import getTrendyolProducts from './api'; 
import getHepsiburadaProducts from './hepsiburada'; 

const App = () => {
  const [trendyolProducts, setTrendyolProducts] = useState([]);
  const [hepsiburadaProducts, setHepsiburadaProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const trendyolData = await getTrendyolProducts();
      const hepsiburadaData = await getHepsiburadaProducts();
      setTrendyolProducts(trendyolData);
      setHepsiburadaProducts(hepsiburadaData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello Web Application with React!</h1>
      <h2>Trendyol Products</h2>
      <ul>
        {trendyolProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <h2>Hepsiburada Products</h2>
      <ul>
        {hepsiburadaProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
