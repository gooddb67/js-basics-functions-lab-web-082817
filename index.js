// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location > 42){
    return location - 42;
  }
  else if (location < 42){
    return 42 - location;
  }
}

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(block1, block2){
  if (block2> block1){
    return (block2 - block1) * 264
  }
  else if (block2 < block1) {
    return (block1 - block2) * 264
  }
}

function calculatesFarePrice(start, end){
  if (distanceTravelledInFeet(start, end) > 2500){
    return "cannot travel that far";
  }
  else if (distanceTravelledInFeet(start, end) > 2000){
    return 25;
  }
  else if (distanceTravelledInFeet(start, end) >= 400 && distanceTravelledInFeet(start, end) <= 2000){
    return distanceTravelledInFeet(start, end) * .02;
  }
  else {
    return 0;
  }
}
