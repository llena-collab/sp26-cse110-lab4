let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const property in statistics) {
  // Check if property name starts with 'r' 
  // OR if the value is odd (value modulo 2 is not zero)
  if (property[0] === 'r' || statistics[property] % 2 !== 0) {
    console.log(statistics[property]);
  }
}