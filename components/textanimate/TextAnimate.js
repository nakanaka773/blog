import { useSpring, animated } from '@react-spring/web'
import Link from 'next/link'
import styles from './styles.module.css'

export default function MyComponent() {

  const [springs, api] = useSpring(() => ({
    from: { y: -50 },
  }))

  const [springs3, api3] = useSpring(() => ({
    from: { y: -500 },
  }))


  const handleClick = () => {
    api.start({
      from: {
        y: 0,
      },
      to: {
        y: 185,
      },
    })
  }

  const handleClick3 = () => {
    api3.start({
      from: {
        y: 0,
      },
      to: {
        y: 405,
      },
    })
  }



  return (
    <div>
    <animated.div className={styles.content}
    >
    <animated.div className={styles.tura}
    style={{
        x: -160,
        ...springs3,
        color: '#ff6d6d',
      }}
    >辛</animated.div>
     <animated.div className={styles.bou}
      style={{
        x: -80,
        width: 160,
        height: 20,
        background: '#ff6d6d',
        borderRadius: 40,
        ...springs,
      }}
    />
    <p className={styles.tura}>辛</p>
    
   

    </animated.div>
    <div className={styles.buttonblock}>
    <button className={styles.button} onClick={handleClick}>幸せになるボタン</button>
    <p className={styles.next}>→</p>
    <button className={styles.button} onClick={handleClick3} >現実を知るボタン</button>
    </div>
    
    </div>
    
    
  )
}