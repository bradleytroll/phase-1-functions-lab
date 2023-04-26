// Code your solution in this file!
function distanceFromHqInBlocks(customerDistance) {
    const hq = 42
    if (customerDistance > 42) {
        return customerDistance - hq
    } else if (customerDistance < 42) {
        return hq - customerDistance
    }
}
function distanceFromHqInFeet(customerDistanceInFeet) {
    const feet = distanceFromHqInBlocks(customerDistanceInFeet)
    return feet * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264}
    else if (start < destination) {
        return (destination - start) *264
    }
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0
    }
    else if (distance <= 2000) {
        return (distance - 400)  * .02;
    }
    else if (distance <= 2500) {
        return 25}
    else if (distance > 2500) {
        return 'cannot travel that far'}
    }
