// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let distanceInBlocks = Math.abs(42 - location);
    return distanceInBlocks;
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);

    if(distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02; 
    }else if(distance > 2000 && distance <= 2500){
        return 25;
    }else if(distance > 2500){
        return "cannot travel that far"
    }
    // Distance between 400 and 2000 feet, price is 0.02 per foot
    // Distance over 2000 and 2500 feet is flat fare
    // Distance over 2500 feet is not allowed "cannot travel that far"
}

console.log("This is the distanceFromHqInBlocks function.");
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(10));

console.log("This is the distanceFromHqInFeet function.");
console.log(distanceFromHqInFeet(50));

console.log("This is distanceTravelledInFeet function.");
console.log(distanceTravelledInFeet(34,50));

console.log("This is the travel fare calculation function")
console.log(calculatesFarePrice(1,8));
