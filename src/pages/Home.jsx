import { useEffect, useId } from "react";
import { NavLink } from "react-router-dom";
import { supabase } from "../supabase";

export const Home = () => {
   const userSuccesLogin = async () => {
      // usuario logeado
      const sessionInfo = await supabase.auth.getSession();
      const { email, id: userId } = sessionInfo.data.session.user;

      // Filtrar usuario por el userId
      const user = await supabase.from("profiles").select("*").eq("userId", userId);

      if (user.data.length === 0) {
         // Llena el campo del userId si no existe aun
         return await supabase.from("profiles").update({ userId }).eq("email", email);
      }
   };

   useEffect(() => {
      userSuccesLogin();
   }, []);

   return (
      <div className='flex flex-col justify-center items-center'>
         <h2 className='font-koulen text-3xl'>Aun no tienes ningun proyecto</h2>
         <NavLink
            to='/crear-proyecto'
            className='bg-indigo-600 px-4 py-3 hover:bg-indigo-700 shadow-lg transition ease-in duration-200 text-white font-poppins mt-4 rounded-md'
         >
            ¡Crear uno!
         </NavLink>
      </div>
   );
};
