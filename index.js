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

function createEmployeeRecords(arr=[]){
  return arr.map(createEmployeeRecords)
}