import React from 'react';
import MyContext from "./MyContext";

function MyProvider({ children }) {
  return (
    <MyContext.Provider value={{}} >
      { children }
    </MyContext.Provider>
  )
}

export default MyProvider;
