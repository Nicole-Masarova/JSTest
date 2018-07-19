

let dataResponse;
// ATTEMPT 2
fetch('data.json').then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  dataResponse = data.issues;
  return dataResponse;
}).catch(err => {
  window.alert('Sorry. An error was thrown.')
});

var str = dataResponse.fields.customfield_10115
str.split('name=').pop().split(',goal=').shift();

return str;
console.log(str);