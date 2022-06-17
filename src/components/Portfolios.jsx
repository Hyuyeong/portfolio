//import {useState} from 'react'
//import styles from './Portfolios.module.css'

import img1 from '../assets/pokemon.png';

const Portfolios = props => {
  return (
    <div className="portfolios">
      <div className="portfolio">
        <img src={img1} alt="" />

        <div>
          <div>text1</div>
          <div>text2</div>
          <div>text3</div>
          <div>text4</div>
          <div>text5</div>
          <div>text6</div>
          <div>text7</div>
        </div>
      </div>
    </div>
  );
};
export default Portfolios;
