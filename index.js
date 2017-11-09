// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (array) {
    console.log(array.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (array) {
    if(array.location === location){
      console.log(array.name);}
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};