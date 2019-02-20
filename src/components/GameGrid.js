import React from "react";
import GridSquare from "./GridSquare"

const GameGrid = ({data}) => {

  const dataNodes = data.map( datum => {
    return(
    <GridSquare id={datum.id} clicked={datum.clicked}/>
  )
  })


return(
  <div>{dataNodes}</div>
)

}

export default GameGrid;
