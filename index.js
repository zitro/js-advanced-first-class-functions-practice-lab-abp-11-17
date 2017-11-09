// Code your solution in this file!

const logDriverNames = function (driver) {
  driver.forEach(function (array) {
    console.log(array.name);
  });
};

const logDriversByHometown = function (driver, hometown) {
  driver.forEach(function (array) {
    if(array.hometown === hometown){
      console.log(array.name);}
  });
};

const driversByRevenue = function (driver){
  return driver.slice().sort(function (driver1, driver2){
return driver1.revenue - driver2.revenue;

  });
};

const driversByName = function (driver){
  return driver.sort(function (array){
return array.name;

  });
};
