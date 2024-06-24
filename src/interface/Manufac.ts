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
    "Crop Production (UOM: t(Tonnes))"?: number | string;
    "Yield Of Crops (UOM: Kg/Ha(Kilogram per Hectare))"?: number | string;
    "Area Under Cultivation (UOM: Ha(Hectares))"?: number | string;
  }
  