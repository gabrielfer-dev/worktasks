import { useContext, useState } from "react";
import { Context } from "../context/AppContext";
import { supabase } from "../supabase";
import slug from "slug";

export const CreateProject = () => {
   const { createProject } = useContext(Context);

   const [inputValue, setInputValue] = useState({
      title: "",
      description: "",
      url: "",
      tasks: [{}],
      participants: [{}],
      userId: ""
   });

   const handleInput = (e) => {
      return setInputValue({
         ...inputValue,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const sessionInfo = await supabase.auth.getSession();
      const { id: userId } = sessionInfo.data.session.user;

      // Crear url
      inputValue["url"] = slug(inputValue["title"]);

      // Agregar userId
      inputValue["userId"] = userId;

      createProject(inputValue);
   };

   return (
      <main className='flex justify-center items-center'>
         <section className='font-poppins'>
            <h2 className='text-3xl font-koulen'>Construye un proyecto nuevo</h2>

            <form action='#' onSubmit={handleSubmit} className='mt-4'>
               <div className='flex flex-col mb-3'>
                  <label
                     htmlFor='title'
                     className='text-sm font-semibold text-gray-800 mb-2'
                  >
                     Nombre del proyecto
                  </label>
                  <input
                     type='text'
                     onChange={handleInput}
                     name='title'
                     id='title'
                     placeholder='Sitio web de la empresa'
                     className='border-2 p-2 text-sm border-gray-700 rounded-[4px] '
                  />
               </div>

               <div className='flex flex-col mb-3'>
                  <label
                     htmlFor='description'
                     className='text-sm font-semibold text-gray-800 mb-2'
                  >
                     Escribe una pequeña descripcion
                  </label>
                  <input
                     type='text'
                     onChange={handleInput}
                     name='description'
                     id='description'
                     placeholder='...'
                     className='border-2 p-2 text-sm border-gray-700 rounded-[4px] '
                  />
               </div>

               <hr />

               <div className='flex justify-end'>
                  <button
                     type='submit'
                     className='bg-indigo-600 hover:bg-indigo-700 transition ease-in duration-200 text-white p-3 rounded-[3px] text-sm mt-4'
                  >
                     Crear proyecto
                  </button>
               </div>
            </form>
         </section>
      </main>
   );
};
