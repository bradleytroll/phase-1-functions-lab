// Code your solution in this file!
function distanceFromHqInBlocks(addy) {
    const hq = 42
    if (addy - hq < 0) {
        return ((addy - hq) * -1)
    }
    return addy - hq
};
function distanceFromHqInFeet(addy) {
    const newDist = distanceFromHqInBlocks(addy)
    return newDist * 264;
}; 
function distanceTravelledInFeet(start, destination) {
    const distance = start - destination 
    if (start - destination < 0) {
        return ((start - destination) * -264)     
        }
        return distance * 264
    }

function calculatesFarePrice(start, destination) {
    const fare = distanceTravelledInFeet(start, destination) 
    if (fare <= 400) {
        return 0
    }
    else if (fare <= 2000) {
        return ((fare - 400) * .02)
    }
    else if (fare <= 2500) {
        return 25
    }
    else if (fare > 2500 ) {
        return "cannot travel that far"
    }
    return fare
}
