// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (array) {
    console.log(array.name);
  });
};
const logDriversByHometown = function (driver, location) {
  driver.forEach(function (array) {
    if(array.location === location){
      console.log(driver.name);}
  });
}
