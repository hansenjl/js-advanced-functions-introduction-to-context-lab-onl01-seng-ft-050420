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

function createEmployeeRecords(arr){
  return arr.map(createEmployeeRecord)
}

function createTimeInEvent(guy,dateStamp){
  let hour = dateStamp.split(" ")[1].split('').slice(2).join("")
  let date = dateStamp.split(" ")[0]
  return {
    ...guy, 
    timeInEvents: [...timeInEvents, {type: "TimeIn", hour: hour, date: date}]
    
  }
}