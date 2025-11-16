import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Consultas from "./pages/Consultas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/consultas/*" element={<Consultas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
