import React from 'react';
import MyContext from "./MyContext";
const teste = 'oi'
function MyProvider({ children }) {
  return (
    <MyContext.Provider value={{ teste }} >
      { children }
    </MyContext.Provider>
  )
}

export default MyProvider;
