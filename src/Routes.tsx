
import { 
   Route, 
   Routes, 
   BrowserRouter as Router 
} from "react-router-dom";

import { Home } from './pages/Home';
import { Lista } from './pages/Lista';
import { Contato } from './pages/Contato';
import { Consulta } from "./pages/Consulta";

export function AppRoutes(){
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/lista" element={<Lista/>} />
            <Route path="/consulta-cep" element={<Consulta/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route
                  path="*"
                  element={
                  <main style={{ padding: "1rem" }}>
                     <p>There's nothing here!</p>
                  </main>
                  }
               />
         </Routes>
      </Router>
   )
}