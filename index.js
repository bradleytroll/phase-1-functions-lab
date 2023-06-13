//Redoing lab for extra practice. New code blow; original code commented out below.

function distanceFromHqInBlocks(pickup) {
    const hq = 42
    if (pickup <= hq) {
        return hq - pickup
} else if (pickup > hq) {
        return pickup - hq
}
}

function distanceFromHqInFeet(pickup) {
    const newDist = distanceFromHqInBlocks(pickup) 
    return newDist * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264
    } else if (start < destination) {
        return (destination - start) * 264
    } else if (start === destination) {
        return 0
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
     if (distance <= 400) {
    return 0;
   } else if (distance <= 2000) {
    return (distance - 400) * .02;
   } else if (distance <= 2500) {
    return 25;
   } else if (distance > 2500) {
    return 'cannot travel that far';
   }
}

// Code your solution in this file!
// function distanceFromHqInBlocks(addy) {
//     const hq = 42
//     if (addy - hq < 0) {
//         return ((addy - hq) * -1)
//     }
//     return addy - hq
// };
// function distanceFromHqInFeet(addy) {
//     const newDist = distanceFromHqInBlocks(addy)
//     return newDist * 264;
// }; 
// function distanceTravelledInFeet(start, destination) {
//     const distance = start - destination 
//     if (start - destination < 0) {
//         return ((start - destination) * -264)     
//         }
//         return distance * 264
//     }

// function calculatesFarePrice(start, destination) {
//     const fare = distanceTravelledInFeet(start, destination) 
//     if (fare <= 400) {
//         return 0
//     }
//     else if (fare <= 2000) {
//         return ((fare - 400) * .02)
//     }
//     else if (fare <= 2500) {
//         return 25
//     }
//     else if (fare > 2500 ) {
//         return "cannot travel that far"
//     }
//     return fare
// }
