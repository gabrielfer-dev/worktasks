import React, { useState } from "react";

export const useField = (initialState) => {
   const [inputValue, setInputValue] = useState(initialState);

   const handleInput = (e) => {
      return setInputValue({
         ...inputValue,
         [e.target.name]: e.target.value
      });
   };

   return { inputValue, handleInput };
};
