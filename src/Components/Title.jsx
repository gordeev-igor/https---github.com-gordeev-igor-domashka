import React, { Children, useRef, useState } from "react"
import styled, { keyframes } from "styled-components";


const rotateAnimation = keyframes`
0% {
  transform: rotateY(-100px);
}
100%  {
  transform: rotateY(0px);
}
`

const Title = (props ) => {
  return (
    < >
      <StyledTitle {...props} />

    </>

  )
};


const StyledTitle = styled.h1`
  font-size:40px;
  color:${props => props.color};

  &:hover { 
    cursor: pointer;
    animation: ${ rotateAnimation } 5s infinite linear;}
 

`


export default Title