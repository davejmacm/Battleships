import React, {Component} from "react";
import GameGrid from "../components/GameGrid";
import GridSquare from '../components/GridSquare';

class GameBox extends Component{

  constructor(props){
    super(props);
    this.state={
      data: [{
        id:0,
        clicked:false},
        {id:1,
        clicked:false},
        {id:2,
        clicked:false},
        {id:3,
        clicked:false}
      ]
    };

  }



  render(){
    return(
      <div>
        <h2>BattlesShips</h2>
        <GameGrid data={this.state.data}/>
      </div>
    )
  }


}



export default GameBox;
