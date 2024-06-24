import React from "react";
import useFetchData from "../../../hooks/useFetchData";

const FetchData = () => {
  const { dataSet, loading, error } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full flex">
      <h1>All fetch Data</h1>
      <div className="flex">
        {dataSet.map((item, index) => (
          <div key={index} className="">
            <p>
              <strong>Country:</strong> {item.Country || "N/A"} <br />
            </p>
            <p>
              <strong>Year:</strong> {item.Year || "N/A"} <br />
            </p>
            <p>
              <strong>Crop Name:</strong> {item["Crop Name"] || "N/A"} <br />
            </p>
            <p>
              <strong>Crop Production:</strong>
              {item["Crop Production (UOM:t(Tonnes))"] ?? "N/A"} <br />
            </p>
            <p>
              <strong>Yield Of Crops:</strong>{" "}
              {item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] ?? "N/A"}
            </p>
            <p>
              <strong>Area Under Cultivation:</strong>{" "}
              {item["Area Under Cultivation (UOM:Ha(Hectares))"] ?? "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
