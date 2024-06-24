import React from "react";
import useFetchData from "../../../hooks/useFetchData";
// import useFetchData from "./path-to-your-hook-file"; // Adjust the path accordingly

const TableData = () => {
  const { dataSet, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
    <h1>Crop Data</h1>
    <ul>
      {dataSet.map((item, index) => (
        <li key={index}>
          <strong>Country:</strong> {item.Country} <br />
          <strong>Year:</strong> {item.Year} <br />
          <strong>Crop Name:</strong> {item["Crop Name"]} <br />
          <strong>Crop Production:</strong> {item["Crop Production (UOM: t(Tonnes))"]} <br />
          <strong>Yield Of Crops:</strong> {item["Yield Of Crops (UOM: Kg/Ha(Kilogram per Hectare))"]} <br />
          <strong>Area Under Cultivation:</strong> {item["Area Under Cultivation (UOM: Ha(Hectares))"]}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default TableData;
