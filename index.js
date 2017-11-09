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

  
}