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






var result = [];
array.reduce(function (res, value) {
    if (!res[value.Id]) {
        res[value.Id] = {
            qty: 0,
            Id: value.Id
        };
        result.push(res[value.Id])
    }
    res[value.Id].qty += value.qty
    return res;
}, {});

const getTotalRevenue = function (products) {
  let totalPrice = 0;
 
  products.forEach(function (product) {
    totalPrice += product.price;
  });
 
  return totalPrice;
};