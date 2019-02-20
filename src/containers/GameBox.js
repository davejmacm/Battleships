import React, {Component} from "react";
import GameGrid from "../components/GameGrid";
import GridSquare from '../components/GridSquare';

class GameBox extends Component{

  constructor(props){
    super(props);
    this.state={
      data: this.populateData()
    };

  }

populateData(){
  const newData = []
  for (var i = 0; i < 100; i++) {
    const dataSet = {
      id:i,
      clicked:false
    }
    newData.push(dataSet)
  }
  return newData;
}


  render(){
    return(
      <div>
        <h2>BattleShips</h2>
        <GameGrid data={this.state.data}/>
      </div>
    )
  }


}



export default GameBox;
