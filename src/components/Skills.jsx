import React, { useContext, useState } from 'react';
import '../assets/css/skills.css';
import MyContext from '../context/MyContext';


const hardSkills = [
  {
    id: 0,
    name:'HTML',
    description: 'teste HTML'
  },
  {
    id: 1,
    name:'CSS',
    description: 'teste CSS'
  },
  {
    id: 2,
    name:'JAVA-SCRIPT',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis hendrerit efficitur. Donec nec ante leo. In porta eleifend neque sed feugiat. Mauris eget lacus sed quam maximus dictum eu nec mauris. Quisque maximus massa in nulla sagittis tincidunt. Sed aliquam arcu arcu, ac hendrerit metus accumsan a. Nulla rhoncus congue nulla eu vehicula. Etiam ullamcorper congue nisi sed gravida."
  },
  {
    id: 3,
    name:'REACT',
    description: 'teste REACT'
  },
  {
    id: 4,
    name:'BOOTSTRAP',
    description: 'teste BOOTSTRAP'
  },
]

function verifySelect(setIsSelect, id, selectId, setSelectId) {
  console.log(id, 'actual');
  console.log(selectId, 'state');
   if(id === selectId) {
     console.log('comparei');
    setIsSelect(false)
    setSelectId('')
  }
  if (id !== selectId) {
    setIsSelect(true)
  }
}

function Skills() {
  const [isSelect, setIsSelect] = useState(false)
  const [selectId, setSelectId] = useState()
  const {skill, setSkill} = useContext(MyContext)
  return (
    <>
    <section id="skills-section">
      <h2> Languages & Skills </h2>
      <div className="hard-skills">
        <ul>
          {hardSkills.map((skill) => (
          <li
            key={skill.id}
            onClick={() => {
              setSelectId(skill.id)
              verifySelect(setIsSelect, skill.id, selectId, setSelectId)
              setSkill(skill)
              console.log(isSelect)
            }}
          >{skill.name}</li>)
          )}
        </ul>
      </div>
      <div className="skills-description">
        <h3>Try select one skill above!</h3>
        {isSelect && (
          <div className="skill-board">
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
        </div>
        )}
      </div>

    </section>
    </>
  );
}

export default Skills;
