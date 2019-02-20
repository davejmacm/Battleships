import React from "react";
import GridSquare from "./GridSquare"

const GameGrid = ({data}) => {

  const dataNodes = data.map( datum => {
    return(
    <GridSquare id={datum.id} clicked={datum.clicked}/>
    // this.addEventListener('onClick', (event) => {
    //   console.log('pressed', data.id);
    // })
  )
  })


return(
  <div className='game-grid'>
    {dataNodes}
  </div>
)

}

export default GameGrid;
