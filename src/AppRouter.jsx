import {
   BrowserRouter as Router,
   Route,
   Routes
} from 'react-router-dom';

// Paginas
import { CreateProject } from './pages/CreateProject';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';

export const AppRouter = () => {
   return (
      <Router>
        <NavBar/>

         {/* Rutas a los componentes */}
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/crear-proyecto' element={<CreateProject />} />
         </Routes>
      </Router>
   );
};
