import { createContext } from "react";
import { supabase } from "../supabase";

export const Context = createContext();

const createProject = async (data) => {
   const a = await supabase.from("projects").insert(data);
   console.log(a);
};

export const AppContextProvider = ({ children }) => {
   return <Context.Provider value={{ createProject }}>{children}</Context.Provider>;
};
