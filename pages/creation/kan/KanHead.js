import React from 'react';
import styles from './kanhead.module.css'

export default function KanHead(props) {
  return (
    <div className={styles.header} style={{ fontFamily: props.fontFamily }}>
        <p className={styles.title}>間を探せ</p>
      
    </div>
  );
}