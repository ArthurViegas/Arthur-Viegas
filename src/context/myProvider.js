import React from 'react';
import myContext from "./myContext";

function myProvider({ children }) {
  return (
    <myContext.Provider value={{}} >
      { children }
    </myContext.Provider>
  )
}

export default myProvider;
