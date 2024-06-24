import { useEffect, useState } from "react";
import { ManufacData } from "../interface/Manufac";
import { dataItems } from "../DataItems";
// import { dataitems } from "../DataItems"; // Adjust the path accordingly

const useFetchData = () => {
  const [dataSet, setDataSet] = useState<ManufacData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // No need to fetch data from an API; use the imported data directly
        const result = await Promise.resolve(dataItems); // Use the imported dataitems
        setDataSet(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { dataSet, loading, error };
};

export default useFetchData;
