import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Formt7 = () => {
  // State to store API response
  const [data, setData] = useState(null);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your API endpoint URL
      const response = await axios.get('https://dummyjson.com/products');
      setData(response.data); // Store the API response in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to render table rows with product information
  const renderTableRows = () => {
    if (data && data.length > 0) {
      return data.map((product, index) => (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          {/* Add more columns as needed */}
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan="3">No data available</td>
        </tr>
      );
    }
  };

  return (
    <div>
      {/* Display the fetched data in a table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            {/* Add more headers for additional columns */}
          </tr>
        </thead>
        <tbody>
          {data ? (
            renderTableRows()
          ) : (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Formt7;
