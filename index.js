const driver = { }

function updateDriverWithKeyAndValue(driver,key, value) {
  name: 'Sam';
  address: '11 Broadway';
  let updatedDriver = {}
  object.assign(driver, updatedDriver)
  {return updatedDriver}
  
}

function destructivelyUpdateDriverWithKeyAndValue (driver,key,value) {
 driver[key]=value
  driver.name='Sam';
  driver.address= '12 Broadway'
  {return driver}
}

function deleteFromDriverByKey () {
  const obj = { foo: "bar" };
 
const newObj = Object.assign({}, obj);
 
newObj;
// => { foo: "bar" }
 
delete newObj.foo;
// => true
 
}

function destructivelyDeleteFromDriverByKey () {
  
}