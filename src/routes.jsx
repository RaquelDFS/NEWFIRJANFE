import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import Template from "./pages/Template";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;