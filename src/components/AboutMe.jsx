import { useState } from 'react';
//import styles from './AboutMe.module.css'

import img1 from '../assets/hyu.png';
import s1 from '../assets/html.png';
import s2 from '../assets/css.png';
import s3 from '../assets/js.png';
import s4 from '../assets/mongodb.png';
import s5 from '../assets/nodeJS.png';
import s6 from '../assets/Npm.png';
import s7 from '../assets/GitHub-logo.png';
import s8 from '../assets/react.jpg';
import s9 from '../assets/mongoose.png';
import s10 from '../assets/sass.png';

const data = [
  {
    id: s1,
    skill: '★★★★★',
  },
  {
    id: s2,
    skill: '★★★★★',
  },
  {
    id: s3,
    skill: '★★★★★',
  },
  {
    id: s4,
    skill: '★★',
  },
  {
    id: s5,
    skill: '★★★★',
  },
  {
    id: s6,
    skill: '★★★★★',
  },
  {
    id: s7,
    skill: '★★★★★',
  },
  {
    id: s8,
    skill: '★★★',
  },
  {
    id: s9,
    skill: '★★★',
  },
  {
    id: s10,
    skill: '★★★★★',
  },
];

const AboutMe = props => {
  const [skillBtn, setSkillBtn] = useState(false);
  const skillBtnHandler = e => {
    setSkillBtn(prev => !prev);
  };

  const skill = data.map(item => {
    return (
      <div className="skill" key={item.id}>
        <img src={item.id} alt={item.id} />
        <span className="star">{item.skill}</span>
      </div>
    );
  });

  return (
    <div className="aboutme">
      about me
      <img src={img1} alt="" />
      <button onClick={skillBtnHandler} className="skill-btn">
        Skills
      </button>
      {skillBtn && <div className="skills">{skill}</div>}
    </div>
  );
};
export default AboutMe;
