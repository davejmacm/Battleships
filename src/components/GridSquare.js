import React, {Component} from "react";
import hitCheck from "../logic/GameLogic";
import GameBox from '../containers/GameBox';

const GridSquare = (props) => {

function handleClick(){
  console.log('vdbf', props.id);
  // return (props.id)
  hitCheck(props.id)
}

  return(
    <div className='grid-square'>
      <button onClick={() => {handleClick()}}> {props.id}</button>
    </div>
  )
}

export default GridSquare;
