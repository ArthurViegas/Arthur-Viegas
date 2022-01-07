import React, { useState } from 'react';
import MyContext from "./MyContext";
function MyProvider({ children }) {
  const [skill, setSkill] = useState()
  const [translate, setTranslate] = useState(false)

  return (
    <MyContext.Provider value={{skill, setSkill, translate, setTranslate}}>
      { children }
    </MyContext.Provider>
  )
}

export default MyProvider;
