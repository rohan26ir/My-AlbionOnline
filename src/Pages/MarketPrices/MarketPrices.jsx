import React, { useState, useEffect } from 'react';

const MarketPrices = ({ item, city }) => {
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch market prices from AlbionData API
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError(null);

        // Replace this URL with the actual AlbionData API endpoint
        const response = await fetch(`https://api.albiondataapi.com/v1/stats/market/${city}/${item}?key=YOUR_API_KEY`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setPrices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, [item, city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!prices) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Market Prices for {item} in {city}</h2>
      <ul>
        {prices.map((price, index) => (
          <li key={index}>
            <strong>{price.seller_name}</strong>: {price.price} {price.currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketPrices;
