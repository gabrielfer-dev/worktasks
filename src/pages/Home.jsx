import { NavLink } from 'react-router-dom';

export const Home = () => {
   return (
      <div className='flex flex-col mt-32 justify-center items-center'>
         <h2 className='font-koulen text-3xl'>
            Aun no tienes ningun proyecto
         </h2>
         <NavLink
            to='/crear-proyecto'
            className='bg-indigo-600 px-4 py-3 hover:bg-indigo-700 shadow-lg transition ease-in duration-200 text-white font-poppins mt-4 rounded-md'
         >
            ¡Crear uno!
         </NavLink>
      </div>
   );
};
