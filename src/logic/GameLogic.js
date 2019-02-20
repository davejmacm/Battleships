// import GridSquare from "../components/GridSquare";
// var ships = {
//   battleship: [2,3,4,5,6],
//   submarine: [65,75,85],
//   cruiser: [22,23],
//   arbitraryShip: [33,34,35,36]
// }

var ships = [2,3,4,5,6,65,75,85,22,23,33,34,35,36]



// const id = {props.id}


const hitCheck = function(id){
  // const newShips = []
  // ships.forEach((ship) => {
    const index = ships.indexOf(id)
    if (index === -1){
    console.log('miss');
    }
    else {
    console.log('hit');
    }
    // newShips.push(ship)


  // console.log(ships.indexOf(id));
}




export default hitCheck;
