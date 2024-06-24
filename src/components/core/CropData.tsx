import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";


interface CropData {
  crop: string;
  production: number;
}

interface AggregatedData {
  [year: string]: {
    maxProduction: CropData;
    minProduction: CropData;
  };
}

const CropData = () => {
  const { dataSet, loading, error } = useFetchData();
  const [aggregatedData, setAggregatedData] = useState<AggregatedData>({});

  useEffect(() => {
    if (!loading && !error && dataSet.length > 0) {
      const dataByYear: AggregatedData = {};

      dataSet.forEach((item) => {
        const year = item.Year;
        const cropName = item["Crop Name"];
        const cropProduction = item["Crop Production (UOM:t(Tonnes))"];

        // Check for null or undefined values and handle accordingly
        const production = typeof cropProduction === "number" ? cropProduction : parseFloat(cropProduction || "0");

        if (!dataByYear[year]) {
          dataByYear[year] = {
            maxProduction: { crop: "", production: -Infinity },
            minProduction: { crop: "", production: Infinity },
          };
        }

        if (production > dataByYear[year].maxProduction.production) {
          dataByYear[year].maxProduction = { crop: cropName, production };
        }

        if (production < dataByYear[year].minProduction.production) {
          dataByYear[year].minProduction = { crop: cropName, production };
        }
      });

      setAggregatedData(dataByYear);
    }
  }, [dataSet, loading, error]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
    <h3> Table by aggregating the Crop Data</h3>
    <div className="table-container">
      <table className="crop-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production</th>
            <th>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(aggregatedData).map((year) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{aggregatedData[year]?.maxProduction.crop || "N/A"}</td>
              <td>{aggregatedData[year]?.minProduction.crop || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default CropData;
