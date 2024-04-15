import {BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpresaArea from "./pages/empresa/Index";
import FormularioInscricao from "./pages/vaga/formulario/Index";
import Novo from "./pages/vaga/novo/Index";
import Vagas from './pages/vaga/Index';
import Pagina404 from './pages/utils/error/Index';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpresaArea />}></Route>
          <Route path="/vaga" element={<Vagas />}></Route>
          <Route path="/config/vaga" element={<Novo />}></Route>
          <Route path="/inscricao" element={<FormularioInscricao />}></Route>
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
