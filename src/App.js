import React, { useEffect, useState } from "react";
import axios from "axios";

const DataDisplay = () => {
  const [data, setData] = useState([]);

  // Fetch data from Django API
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/get_image") // Replace with your endpoint
      .then(response => {
        console.log(response)
        setData(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Data from Django</h1>
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} ></img>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataDisplay;
