// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (array) {
    console.log(array.name);
  });
};
const logDriversByHometown = function (driver, location) {
  driver.forEach(function (array) {
    if(driver.location === location){
      console.log(array.name);}
  });
}