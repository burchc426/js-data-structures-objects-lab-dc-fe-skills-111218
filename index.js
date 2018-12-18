const driver = { }

function updateDriverWithKeyAndValue(driver,key, value) {
  driver[key]=value
  driver.name='Sam';
  driver.address= '11 Broadway'
  let updatedDriver = {}
  {return updatedDriver}
  
}

function destructivelyUpdateDriverWithKeyAndValue (driver,key,value) {
 driver[key]=value
  driver.name='Sam';
  driver.address= '12 Broadway'
  {return driver}
}

function deleteFromDriverByKey () {
  
}

function destructivelyDeleteFromDriverByKey () {
  
}