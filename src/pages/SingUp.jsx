import React from "react";
import { useField } from "../hooks/useField";
import { supabase } from "../supabase";

export const SingUp = () => {
   const { handleInput, inputValue } = useField({
      email: "",
      password: "",
      name: "",
      username: "",
      projects: [{}]
   });

   const { email, password, name, username } = inputValue;

   const register = async (e) => {
      e.preventDefault();
      await supabase.auth.signUp({ email, password });
      await supabase.from("profiles").insert({
         email,
         name,
         username,
         projects: []
      });
   };

   return (
      <main className='flex flex-col justify-center items-center '>
         <h2 className='text-3xl font-koulen'>Inicia sesion</h2>

         <form action='#' onSubmit={register} className='mt-5 font-poppins'>
            <div className='flex flex-col mb-3'>
               <label
                  className='text-sm font-semibold text-gray-800 mb-2'
                  htmlFor='name'
               >
                  Tu nombre
               </label>
               <input
                  onChange={handleInput}
                  className='w-[280px] border-2 p-2 text-sm border-gray-700 rounded-[4px] '
                  type='name'
                  id='name'
                  name='name'
                  placeholder='Gabriel Fernandez'
               />
            </div>
            <div className='flex flex-col mb-3'>
               <label
                  className='text-sm font-semibold text-gray-800 mb-2'
                  htmlFor='username'
               >
                  Nombre de usuario
               </label>
               <input
                  onChange={handleInput}
                  className='w-[280px] border-2 p-2 text-sm border-gray-700 rounded-[4px] '
                  type='username'
                  id='username'
                  name='username'
                  placeholder='@gabo2321'
               />
            </div>
            <div className='flex flex-col mb-3'>
               <label
                  className='text-sm font-semibold text-gray-800 mb-2'
                  htmlFor='email'
               >
                  Correo electronico
               </label>
               <input
                  onChange={handleInput}
                  className='w-[280px] border-2 p-2 text-sm border-gray-700 rounded-[4px] '
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Debe ser un correo valido'
               />
            </div>
            <div className='flex flex-col mb-3'>
               <label
                  className='text-sm font-semibold text-gray-800 mb-2'
                  htmlFor='password'
               >
                  Contraseña
               </label>
               <input
                  onChange={handleInput}
                  className='w-[280px] border-2 p-2 text-sm border-gray-700 rounded-[4px] '
                  type='password'
                  id='password'
                  name='password'
                  placeholder='***************'
               />
            </div>

            <div className='flex justify-center'>
               <button
                  type='submit'
                  className='bg-indigo-600 w-full hover:bg-indigo-700 transition ease-in duration-200 text-white p-3 rounded-[3px] text-sm flex justify-center items-center'
               >
                  <span>Crear cuenta</span>
                  <div className=' transform translate-x-1/2 translate-y-1/2 '>
                     <div className='border-t-transparent border-solid animate-spin  rounded-full border-white border-2 h-4 w-4'></div>
                  </div>
               </button>
            </div>
         </form>
      </main>
   );
};
