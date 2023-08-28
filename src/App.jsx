import "./App.css";
import styled from "styled-components";
import Modal from "./Components/Modal";
import { useState } from "react";

/* let array = [1, 2, 11, 3, 4, "Igor", 5, 6, 2, 11, 8, 9];
const findFunc = (findValue) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === findValue) {
      return array[i];
    } else {
      continue;
    }
  }
};
console.log(findFunc("Igor")); */

// let revArray = [];
/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const revFunc = (array) => {
  let revArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revArr.push(array[i]);
  }
  return revArr;
};
console.log(revFunc(array)); */

/* let copyArray = [];
let array = [1, 2, 3, "igor", 4, 5, 6, 7, 8, 9];
const copyFunc = () => {
  for (let i = 0; i < array.length; i++) {
    copyArray.push(array[i]);
  }
};
copyFunc(); */
/* let array1 = [1,1,23,11,754,9,7,5,0 ,4, 8, 5, 2];
function sortFunc(array) {
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}
console.log(sortFunc(array1)); */

/*  const memo = (fn) => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      return (cache[n] = fn(n));
    }
  };
};

const factorial = memo((x) => {
  console.log(x);
  return !x || x === 1 ? 1 : x * factorial(x - 1);
});

console.log(factorial(6));
console.log(factorial(8));
  */

const data = {
  id: "0",
  array: [
    {
      id: "1",
      array: [{ id: "3", array: [{ id: "5" }] }],
    },
    {
      id: "2",
      array: [{ id: "4" }],
    },
  ],
};

function findValue(id, data) {
  if (id == data.id) {
    return data;
  } else {
    for (let i = 0; i < data.array?.length; i += 1) {
      let result = findValue(id, data.array[i]);
      if (result !== false) {
        return findValue(id, data.array[i]);
      }
    }
    return false;
  }
}

console.log(findValue("3", data));

function App() {
  const [isModal, setIsModal] = useState(false);
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      {isModal && <Modal closeModal={closeModal} />}
      <h2
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => setIsModal(true)}
      >
        Open Modal
      </h2>
    </>
  );
}

export default App;
