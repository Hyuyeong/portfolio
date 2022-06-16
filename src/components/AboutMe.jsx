import { useState } from 'react';
//import styles from './AboutMe.module.css'

import img1 from '../assets/hyu.png';
import s1 from '../assets/html.png';
import s2 from '../assets/css.png';
import s3 from '../assets/js.png';

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
