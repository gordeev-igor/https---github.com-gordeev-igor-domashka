import React, { useRef, useState } from "react"
import ComponentTest from "./Input";

const Counter = (props) => {
  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();



  const addNewPost = () => {
    console.log(title);
    console.log(bodyInputRef.current.value);
  }


  return (
    <div >
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addNewPost} > Нажать</button>
      <div>
        <input
          ref={bodyInputRef}
          type="text"
        />
        <button onClick={addNewPost}>Нажать</button>
      </div>

    </div>

  )
};


export default Counter