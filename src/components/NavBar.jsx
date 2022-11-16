import { NavLink } from "react-router-dom";
import ProfileImg from "../static/profile.jpg";

export const NavBar = () => {
   return (
      <nav className='w-10/12 mx-auto flex justify-between items-center py-6'>
         <h1 className='font-bold text-oranage-900 font-koulen text-4xl'>
            App Name
         </h1>

         <div className='text-gray-900 font-poppins flex items-center'>
            <NavLink
               to='/'
               className={({ isActive }) =>
                  "font-medium hover:text-indigo-600 transition duration-200 ease-in mr-6 " +
                  (isActive ? "text-indigo-600" : "")
               }
            >
               Inicio
            </NavLink>
            <NavLink
               to='/crear-proyecto'
               className={({ isActive }) =>
                  "font-medium hover:text-indigo-600 transition duration-200 ease-in mr-6 " +
                  (isActive ? "text-indigo-600" : "")
               }
            >
               Crear Proyecto
            </NavLink>
            <NavLink
               to='/unirse'
               className={({ isActive }) =>
                  "font-medium hover:text-indigo-600 transition duration-200 ease-in mr-6 " +
                  (isActive ? "text-indigo-600" : "")
               }
            >
               Unirse a un Proyecto
            </NavLink>

            <NavLink
               to='/perfil'
               className='bg-white p-1 rounded-full shadow-md hover:shadow-lg border border-gray-200 transition duration-200 ease-in '
            >
               <img
                  src={ProfileImg}
                  className='rounded-full object-fill w-10 h-10'
                  alt='Imagen de perfil'
               />
            </NavLink>
         </div>
      </nav>
   );
};
