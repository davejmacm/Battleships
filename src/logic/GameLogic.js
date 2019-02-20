// import GridSquare from "../components/GridSquare";

var battleship = [2]



// const id = {props.id}


const hitCheck = function(id){
  battleship.forEach((square) => {
    if (square === id) {
      console.log('Hit');
    }
    else {
      console.log('miss');
    }
  })
}


export default hitCheck;
