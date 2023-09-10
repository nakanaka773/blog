import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import React from 'react';
import styles from './animate.module.css';

export default function Animate({ closeNav, fontFamily }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleHover() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={styles.box} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack={1.0} flipSpeedBackToFront={1.0}>
        <div onClick={handleHover}>
          <div  className={styles.correct} style={{ fontFamily: fontFamily }}>
            <p className={styles.text}>間</p>
          </div>
        </div>
        <div onClick={handleHover}>
          <div className={styles.correct} style={{ fontFamily: fontFamily }}>
            <p className={styles.name}>{fontFamily}</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};
