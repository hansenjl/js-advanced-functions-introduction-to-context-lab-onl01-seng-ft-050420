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
  return array.map(createEmployeeRecords)
}