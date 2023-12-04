// drivers array
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// returnFirstTwoDrivers
const returnFirstTwoDrivers = () => drivers.slice(0, 2);

console.log(returnFirstTwoDrivers());

// returnLastTwoDrivers
const returnLastTwoDrivers = () => drivers.slice(2);

console.log(returnLastTwoDrivers());

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers);
      
// createFareMultiplier
function createFareMultiplier (multiplier) {
    const fareMultiplier = (fare) => fare * multiplier;
    return fareMultiplier;
}

console.log(createFareMultiplier(2)(5));

// fareDoubler
const fareDoubler = createFareMultiplier(2);

console.log(fareDoubler(10));

// fareTripler
const fareTripler = createFareMultiplier(3);

console.log(fareTripler(12));
      
// selectDifferentDrivers(arrayOfDrivers, function)
const selectDifferentDrivers = (drivers, selectingDrivers) => {
    const selectedDrivers = selectingDrivers(drivers);
    return selectedDrivers;
  };
  
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

// drivers array non-destructive checker
console.log("Array: " + drivers);