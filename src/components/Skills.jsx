import React, { useContext, useState } from 'react';
import '../assets/css/skills.css';
import MyContext from '../context/MyContext';
import { hardSkills, hardSkillsPortuguese } from '../helpers/hardSkills';

function verifySelect(setIsSelect, id, selectId, setSelectId, idName) {
  removeColors()
  const skill = document.getElementById(idName)
  skill.style.backgroundColor = '#815cf02d';
  skill.style.color = 'white';
   if(id === selectId) {
    setIsSelect(false)
    setSelectId('')
    removeColors()

  }
  if (id !== selectId) {
    setIsSelect(true)
  }
}

function removeColors() {
  const skills = document.querySelectorAll('.mySkill')
  for ( let i = 0; i < skills.length; i++) {
    skills[i].style.backgroundColor = ""
    skills[i].style.color = ""
};
}

function Skills() {
  const [isSelect, setIsSelect] = useState(false)
  const [selectId, setSelectId] = useState()
  const {skill, setSkill, translate} = useContext(MyContext)
  const setLanguage = () => translate ? hardSkillsPortuguese : hardSkills;
  return (
    <>
    <section id="skills-section">
      <h2> {translate ? 'Linguagens & Habilidades' : 'Languages & Skills'} </h2>
      <div className="hard-skills">
        <ul>
          {setLanguage().map((skill) => (
          <li
            className="mySkill"
            key={skill.id}
            id={skill.name}
            onClick={() => {
              setSelectId(skill.id)
              verifySelect(setIsSelect, skill.id, selectId, setSelectId, skill.name)
              setSkill(skill)
              console.log(isSelect)
            }}
          >{skill.name}</li>)
          )}
        </ul>
      </div>
      <div className="skills-description">
        <h3>{translate ? 'Experimente selecionar uma habilidade!' : 'Try selecting one skill above!'}</h3>
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
