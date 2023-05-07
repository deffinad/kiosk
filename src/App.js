import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ListDoctor from "./pages/listDoctor";
import ListPatient from "./pages/listPatient";
import Menu from "./components/menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/listdokter" element={<ListDoctor />} />
        <Route path="/listpatient" element={<ListPatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
