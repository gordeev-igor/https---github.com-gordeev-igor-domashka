import { useState } from "react";
import styled from "styled-components";

function ComponentTest(props) {
  const [value, setValue] = useState('Введите текст')
  const [likes, setLikes] = useState(0);
  function increment() {
    setLikes(likes + 1)
  };
  function decrement() {
    setLikes(likes - 1)
  };

  return (
    <Wrapper >
      <h1>{likes}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <div > {props.post.title}</div>
      <div> {props.post.name}</div>
      <div> {props.post.surname}</div>
      <div> {props.post.age}</div>


    </Wrapper>
  )
}

const Wrapper = styled.div`
`;

export default ComponentTest