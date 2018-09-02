// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver){
    if (driver.hometown === location)
    console.log(driver.name);
  });
}

const driversByRevenue = function(drivers) {
  let sortedDrivers = [...drivers]
  return sortedDrivers.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
}

const driversByName = function(drivers) {
  let sortedDrivers = [...drivers]
  return sortedDrivers.sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  });
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}


