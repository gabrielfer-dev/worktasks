import ImgProfile from "../static/profile.jpg";

export const CreateProject = () => {
   const clickInputFile = () => {
      document.getElementById("projectPic").click();
   };

   return (
      <main className='w-10/12 mx-auto flex mt-16 '>
         <section className='font-poppins mr-40'>
            <h2 className='text-3xl font-koulen'>
               Construye un proyecto nuevo
            </h2>

            <form action='#' className='mt-4'>
               <div className='flex flex-col mb-3'>
                  <label
                     htmlFor='projectName'
                     className='text-sm font-semibold text-gray-800 mb-2'
                  >
                     Nombre del proyecto
                  </label>
                  <input
                     type='text'
                     name='projectName'
                     id='projectName'
                     placeholder='Sitio web de la empresa'
                     className='border-2 p-2 text-sm border-gray-700 rounded-[4px] '
                  />
               </div>

               <div className='flex flex-col mb-3'>
                  <label
                     htmlFor='projectDescription'
                     className='text-sm font-semibold text-gray-800 mb-2'
                  >
                     Escribe una pequeña descripcion
                  </label>
                  <input
                     type='text'
                     name='projectDescription'
                     id='projectDescription'
                     placeholder='...'
                     className='border-2 p-2 text-sm border-gray-700 rounded-[4px] '
                  />
               </div>

               <div className='flex flex-col mt-4'>
                  <label
                     htmlFor='projectPic'
                     className='text-sm w-full font-semibold text-gray-800 mb-2'
                  >
                     Agregale una foto de portada
                  </label>

                  <div>
                     <button
                        type='button'
                        className='mb-4 mt-1 text-grey-500 mr-5 py-3 px-6 rounded-[4px] border-0 text-sm font-medium bg-blue-100 text-blue-700 cursor-pointer'
                        onClick={clickInputFile}
                     >
                        Buscar imagen
                     </button>
                     <input
                        hidden
                        type='file'
                        name='projectPic'
                        id='projectPic'
                     />
                  </div>
               </div>

               <hr />

               <button
                  type='submit'
                  className='bg-indigo-600 hover:bg-indigo-700 transition ease-in duration-200 text-white p-3 rounded-[3px] text-sm mt-4'
               >
                  Crear proyecto
               </button>
            </form>
         </section>

         <section>
            <h2 className='text-3xl font-koulen'>Vista previa</h2>

            <div className='w-[300px] h-[220px] relative bg-gray-600 rounded-md mt-4'>
               <img src='' alt='' />

               <div className='absolute bottom-0 w-full bg-black/[.6] px-4 py-3 rounded-b-md'>
                  <div className='opacity-100 z-10 text-gray-200 font-poppins'>
                     <h3 className='text-lg mb-2'>Project Name</h3>

                     <div className='text-xs flex items-center text-gray-300 justify-between'>
                        <div className='flex items-center '>
                           <img
                              src={ImgProfile}
                              className='rounded-full w-6 mr-2 border-2 border-indigo-500'
                              alt='creador del proyecto'
                           />
                           <p>Gabriel Fernández</p>
                        </div>

                        <div className='flex items-center'>
                           <i className='text-lg mr-1 uil uil-users-alt'></i>
                           <p>3</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
};
