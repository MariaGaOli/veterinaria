import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animais from "../pages/Animais";
import Consultas from "../pages/Consultas";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Animais />} />
        <Route path="/consultas" element={<Consultas />} />
      </Routes>
    </BrowserRouter>
  );
}
