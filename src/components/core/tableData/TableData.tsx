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
            <strong>Country:</strong> {item.Country || "N/A"} <br />
            <strong>Year:</strong> {item.Year || "N/A"} <br />
            <strong>Crop Name:</strong> {item["Crop Name"] || "N/A"} <br />
            <strong>Crop Production:</strong> {item["Crop Production (UOM:t(Tonnes))"] ?? "N/A"} <br />
            <strong>Yield Of Crops:</strong> {item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] ?? "N/A"} <br />
            <strong>Area Under Cultivation:</strong> {item["Area Under Cultivation (UOM:Ha(Hectares))"] ?? "N/A"}
          </li>
        ))}
      </ul>
  </div>
  );
};

export default TableData;
