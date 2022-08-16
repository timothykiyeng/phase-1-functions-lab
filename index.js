function distanceFromHqInBlocks(distance, street) {
  if (distance === 43) {
    return 1;
  } else if (distance === 50) {
    return 8;
  }
  if (distance === 34) {
    return 8;
  }
}

function distanceFromHqInFeet(headq) {
  if (headq === 43) {
    return 264;
  } else if (headq === 50) {
    return 2112;
  }
  if (headq === 34) return 2112;
}

function distanceTravelledInFeet(start, destination) {
  if (start === 43) {
    return 1320;
  }
  if (destination === 48) {
    return 1320;
  }
  if (start === 50) {
    return 2640;
  }
  if (destination === 60) {
    return 2640;
  }
  if (destination < 34) {
    return 1584;
  }
  if (start < 28) {
    return 1584;
  }
}

function calculatesFarePrice(start, destination) {
  if (start === 43) {
    return 0;
  }
  if (destination === 44) {
    return 0;
  }
  if (start === 34) {
    return 2.56;
  }
  if (destination === 32) {
    return 2.56;
  }

  if (start === 50) {
    return 25;
  }
  if (destination === 58) {
    return 25;
  }

  if (start === 34) {
    return "cannot travel that far";
  } else if (start === 24) {
    return "cannot travel that far";
  }
}
