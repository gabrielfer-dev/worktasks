import { createContext } from "react";
import { supabase } from "../supabase";

export const Context = createContext();

const createProject = async (data) => {
   return await supabase.from("projects").insert(data);
};

export const AppContextProvider = ({ children }) => {
   return (
      <Context.Provider value={{ createProject }}>
         {children}
      </Context.Provider>
   );
};
