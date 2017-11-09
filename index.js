// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (array) {
    console.log(array.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (array) {
    if(array.hometown === hometown){
      console.log(array.name);}
  });
};
