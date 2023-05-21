import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ListDoctor from "./pages/listDoctor";
import ListPatient from "./pages/listPatient";
import Menu from "./components/menu";
import Pelayanan from "./pages/fasilitas/Pelayanan";
import Fasilitas from "./pages/fasilitas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/listdokter" element={<ListDoctor />} />
        <Route path="/listpatient" element={<ListPatient />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/fasilitas/pelayanan" element={<Pelayanan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
