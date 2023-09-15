import React from 'react'
import { useState } from 'react'

export default function State() {
    const [index, setIndex] = useState(0);
    function hundleClick(){
        setIndex(index+1);
    }
  return (
    <div>
        <button onClick={hundleClick}>ボタンを押す</button>
        <p>{index}</p>
        <p>{index}</p>
    </div>
  )
}
