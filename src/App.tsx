import { BrowserRouter, Routes, Route } from "react-router-dom";
import CropData from "./components/core/CropData";
import FetchData from "./components/core/FetchDataFromApi/FetchData";
import Header from "./components/shared/Header";
import YieldData from "./components/core/YieldData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/data" element={<FetchData />} />
          <Route path="/" element={<CropData />} />
          <Route path="/yield" element={<YieldData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
