import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
// import useFetchData from "../../../hooks/useFetchData";

interface ManufacData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": number | string; // Assuming it's either number or string
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number | string; // Assuming it's either number or string
  "Area Under Cultivation (UOM:Ha(Hectares))": number | string; // Assuming it's either number or string
}

const YieldData = () => {
  const { dataSet, loading, error } = useFetchData();
  const [cropData, setCropData] = useState<{ [crop: string]: { averageYield: number; averageCultivationArea: number } }>({});

  useEffect(() => {
    if (!loading && !error && dataSet.length > 0) {
      const cropDataMap: { [crop: string]: { totalYield: number; totalCultivationArea: number; count: number } } = {};

      dataSet.forEach((item) => {
        const cropName = item["Crop Name"];
        const yieldOfCrops = typeof item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] === "number"
          ? item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] : parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || "0");
        const areaUnderCultivation = typeof item["Area Under Cultivation (UOM:Ha(Hectares))"] === "number"
          ? item["Area Under Cultivation (UOM:Ha(Hectares))"] : parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"] || "0");
        const year = item.Year;

        if (!cropDataMap[cropName]) {
          cropDataMap[cropName] = { totalYield: 0, totalCultivationArea: 0, count: 0 };
        }

        cropDataMap[cropName].totalYield += yieldOfCrops;
        cropDataMap[cropName].totalCultivationArea += areaUnderCultivation;
        cropDataMap[cropName].count++;
      });

      const cropDataAverage: { [crop: string]: { averageYield: number; averageCultivationArea: number } } = {};

      Object.keys(cropDataMap).forEach((cropName) => {
        const { totalYield, totalCultivationArea, count } = cropDataMap[cropName];
        const averageYield = totalYield / count;
        const averageCultivationArea = totalCultivationArea / count;
        cropDataAverage[cropName] = { averageYield, averageCultivationArea };
      });

      setCropData(cropDataAverage);
    }
  }, [dataSet, loading, error]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Aggregating the Crop Data</h1>
      <div className="table-container">
        <table className="crop-table">
          <thead>
            <tr>
              <th>Crop</th>
              <th>Average Yield (Kg/Ha) between 1950-2020</th>
              <th>Average Cultivation Area (Ha) between 1950-2020</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cropData).map((cropName) => (
              <tr key={cropName}>
                <td>{cropName}</td>
                <td>{cropData[cropName].averageYield.toFixed(2)}</td>
                <td>{cropData[cropName].averageCultivationArea.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YieldData;
