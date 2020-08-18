// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour] ){
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(array){
  console.log(array)
  debugger
  return array.map((el)=> createEmployeeRecords(el))
}