// export interface ManufacData{
//     country:string;
//     year:string | number;
//     cropName:string;
//     cropProduction:number |string;
//     yield:number |string;
//     area:number | string;

// }

// src/interface/Manufac.ts
export interface ManufacData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": number | string | null;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number | string | null;
  "Area Under Cultivation (UOM:Ha(Hectares))": number | string | null;
}

type AggregatedData = {
  [year: string]: {
    maxProduction: { crop: string; production: number };
    minProduction: { crop: string; production: number };
  };
};

// Example initialization (adjust based on your actual data structure)
const aggregatedData: AggregatedData = {};