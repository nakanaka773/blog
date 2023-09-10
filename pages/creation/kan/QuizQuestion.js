
import { fontFamily } from '@mui/system';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../../../styles/kan.module.css';
import { motion } from "framer-motion";
import KanHead from './KanHead';
import Animate from './Animate';

function shuffleArray(array) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const QuizQuestion = () => {
  const [question, setQuestion] = useState('「間」を探せ');
  const [options, setOptions] = useState([
    {  fontFamily: 'Noto Sans Japanese' },
    {  fontFamily: 'Noto Serif Japanese' },
    { fontFamily: 'M PLUS Rounded 1c' },
    { fontFamily: 'M PLUS 1p' },
    { fontFamily: 'Sawarabi Mincho' },
    { fontFamily: 'Sawarabi Gothic' },
    { fontFamily: 'Zen Kaku Gothic New' },
    { fontFamily: 'Zen Maru Gothic' },
    { fontFamily: 'BIZ UDPGothic' },
    { fontFamily: 'Shippori Mincho' },
    { fontFamily: 'Kiwi Maru' },
    { fontFamily: 'M PLUS 1' },
    { fontFamily: 'Yuji Mai' },
    { fontFamily: 'Zen Old Mincho' },
    { fontFamily: 'Kosugi' },
    { fontFamily: 'Klee One' },
    { fontFamily: 'Zen Antique' },
    { fontFamily: 'Shippori Mincho B1' },
    { fontFamily: 'Zen Kaku Gothic Antique' },
    { fontFamily: 'M PLUS 2' },
    { fontFamily: 'Kaisei Decol' },
    { fontFamily: 'Zen Kurenaido' },
    { fontFamily: 'Dela Gothic One' },
    { fontFamily: 'RocknRoll One' },
    { fontFamily: 'DotGothic16' },
    { fontFamily: 'Yusei Magic' },
    { fontFamily: 'Mochiy Pop One' },
    { fontFamily: 'Rampart One' },
    { fontFamily: 'New Tegomin' },
    { fontFamily: 'Reggae One' },
    { fontFamily: 'Kaisei Tokumin' },
    { fontFamily: 'BIZ UDPMincho' },
    { fontFamily: 'IBM Plex Sans JP' },
    { fontFamily: 'Potta One' },
    { fontFamily: 'Murecho' },
    { fontFamily: 'Kaisei Opti' },
    { fontFamily: 'BIZ UDGothic' },
    { fontFamily: 'Stick' },
    { fontFamily: 'Hina Mincho' },
    { fontFamily: 'Hachi Maru Pop' },
    { fontFamily: 'Mochiy Pop P One' },
    { fontFamily: 'Yuji Syuku' },
    { fontFamily: 'Kaisei HarunoUmi' },
    { fontFamily: 'Shippori Antique' },
    { fontFamily: 'Yomogi' },
    { fontFamily: 'Train One' },
    { fontFamily: 'Zen Antique Soft' },
    { fontFamily: 'Shippori Antique B1' },
    { fontFamily: 'M PLUS 1 Code' },
    { fontFamily: 'BIZ UDMincho' },
    { fontFamily: 'Yuji Boku' },
    { fontFamily: 'Kosugi Maru' },

  ]);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctText, setCorrectText] = useState('');
  const [fontSizes, setFontSizes] = useState([]);
  const [delay, setDelay] = useState([]);
    const [selectedFontFamily, setSelectedFontFamily] = useState('');
    const [correctCount, setCorrectCount] = useState(0); // 正解数を格納するステート変数
  const [totalQuestions, setTotalQuestions] = useState(0); 


  useEffect(() => {
    // コンポーネントがマウントされたときに選択肢と正解の選択肢のインデックスをシャッフル
    const shuffledOptions = shuffleArray(options);
    const randomCorrectIndex = Math.floor(Math.random() * shuffledOptions.length);

    const randomFontSizes = shuffledOptions.map(() => {
      const randomSize = Math.floor(Math.random() * 8 + 2); // 5から20の間でランダムなフォントサイズを生成
      return randomSize + 'vw';
    });

    const randomDelay = shuffledOptions.map(() => {
      const randomDelay = Math.floor(Math.random() * 0.5  ); // 5から20の間でランダムなフォントサイズを生成
      return randomDelay;
    });


    setOptions(shuffledOptions);
    setCorrectIndex(randomCorrectIndex);
    setCorrectText(shuffledOptions[randomCorrectIndex].fontFamily); // 正解の選択肢のテキストを設定
    setFontSizes(randomFontSizes); 
    setDelay(randomDelay);
  }, []);

  const handleOptionClick = (index) => {
    setSelectedIndex(index);
    setSelectedFontFamily(options[index].fontFamily); 
    

    if (index === correctIndex) {
      setIsCorrect(true);
      setCorrectCount(correctCount + 1); 
    } else {
      setIsCorrect(false);
    }
    setTotalQuestions(totalQuestions + 1);


  };

  

  return (
    <div className={styles.contents}>
      <KanHead fontFamily={correctText} />
      <Animate fontFamily={correctText} />
      

      <form className={styles.content}>
        {options.map((option, index) => (
          <motion.div key={index}
            initial={{ opacity: 0.6 }}
            animate={{ opacity:  1 ,y: [100, 0]}}
            transition={{ duration: 1}}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: [1.2,1.3] }}
            
          >
            <label>
              <input
                type="radio"
                name="option"
                style={{ display: 'none' }}
                checked={selectedIndex === index}
                onChange={() => {}}
              />
              
              <div
                onClick={() => handleOptionClick(index)}
                style={{ fontFamily: option.fontFamily, fontSize: fontSizes[index]  }} // フォントファミリーを適用
              >
                間
              </div>
            </label>
          </motion.div>
        ))}
      </form>

      {isCorrect === true && <p>正解</p>}
      {isCorrect === false && 
        <motion.div className={styles.incorrect}>
          <p>「間」違いです！</p>
          <p>あなたが選んだのは{selectedFontFamily}です</p>
          <p style={{ fontFamily: selectedFontFamily }}>間</p>
        </motion.div>
      }
    </div>
  );
};

export default QuizQuestion;