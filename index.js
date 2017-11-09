// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (array) {
    console.log(array.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (array) {
    if(array.hometown === location){
      console.log(array.name);}
  });
};
