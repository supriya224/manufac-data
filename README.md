# Crop Data Aggregation

This project is a React application that fetches crop data from a local data source and displays it in a table format. The table shows the average yield and average cultivation area for each crop between the years 1950-2020. [Deplopy](https://manufac-data.vercel.app/),

## Features

- Fetch crop data using a custom hook
- Calculate average yield and average cultivation area for each crop
- Display the data in a responsive table

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/manufac-data.git
2.  Cd manufac-data

3.  Yarn install

4.  yarn start

5. ## folder structure
   
   src/
├── components/
│   ├── core/
│   │   ├── fetchdatafromapi/
│   │   │   └── FetchData.tsx
│   │   ├── cropdata/
│   │   │   └── CropData.tsx
│   │   └── yielddata/
│   │       └── YieldData.tsx
│   └── shared/
│       └── header/
│           └── Header.tsx
├── hooks/
│   └── useFetchData.ts
├── interfaces/
│   └── ManufacData.ts
├── pages/
│   └── HomePage.tsx
├── data/
│   └── dataItems.ts
└── App.tsx

## screenshot of getting data
<img width="1440" alt="Screenshot 2024-06-24 at 8 52 09 PM" src="https://github.com/supriya224/manufac-data/assets/52038704/d5770e10-f033-4023-81c3-ddfa26cba318">
<img width="1440" alt="Screenshot 2024-06-24 at 8 52 01 PM" src="https://github.com/supriya224/manufac-data/assets/52038704/ba55841e-ddf8-4126-a370-0a57b1661ca0">

