import React, { useState } from 'react';
import MyContext from "./MyContext";
function MyProvider({ children }) {
  const [skill, setSkill] = useState()
  return (
    <MyContext.Provider value={{skill, setSkill}}>
      { children }
    </MyContext.Provider>
  )
}

export default MyProvider;
