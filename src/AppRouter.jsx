import {
   BrowserRouter as Router,
   Route,
   Routes
} from "react-router-dom";

// Paginas
import { CreateProject } from "./pages/CreateProject";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { AppContextProvider } from "./context/AppContext";
import { SingUp } from "./pages/SingUp";

export const AppRouter = () => {
   return (
      <AppContextProvider>
         <Router>
            <NavBar />

            {/* Rutas a los componentes */}
            <Routes>
               <Route path='/' element={<Home />} />
               <Route
                  path='/crear-proyecto'
                  element={<CreateProject />}
               />
               <Route path='/crear-cuenta' element={<SingUp />} />
            </Routes>
         </Router>

         <footer className='flex justify-center mb-10 text-gray-800'>
            <p>App 2022. by Gabriel Fernandez</p>
         </footer>
      </AppContextProvider>
   );
};
