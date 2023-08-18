import React from 'react'
import styles from './Writer.module.css';


const Writer = () => {
  return (
    <div className={styles.writer_box}>
        <div className={styles.writer_img}>
            <img src="/cola.png" alt="Cola bottle" /> 
        </div>
        <p className={styles.name}>なかなか</p>
        <p>関西の大学生です</p>
        <p>コーラが大好きです</p>
    </div>
  )
}

export default Writer