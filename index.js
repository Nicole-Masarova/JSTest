let dataResponse;

// let datafromJSON = JSON.parse('data.json');
// let dataFromJSON1 = JSON.parse('/data.json');
// console.log('datafromJSON: ', datafromJSON);
// console.log('datafromJSON1: ', datafromJSON1);


function fetchJsonArray () {
return fetch('data.json').then(response => {
  return response.json();
}).then(data => {
  console.log('data from response: ', data);
  dataResponse = data;
  return dataResponse;
}).catch(err => {
  window.alert('Sorry. An error was thrown.')
});	
}

function extractString(foo){
	// return foo.split('name=').pop().split(',goal=').shift();
	let subStr = foo.split('name=').pop().split(',goal=').shift();
	console.log(subStr);
	return subStr;
}


let foo = fetchJsonArray().then(dataArray => {
	console.log('[0].fields.customfield_10115[0]: ', dataArray[0].fields.customfield_10115[0]);
	let bar = extractString(dataArray[0].fields.customfield_10115[0]);
});

// var str = dataResponse[0].fields.customfield_10115[0]; //this was recieving issue when the fetch wasn't a function because the promise had not finished by the time the javascript had reached this line. It was able to keep going while the promise was comopleted so DataResponse was not defined yet.
// var str2 = dataResponse[1].fields.customfield_10115[0];


// extractString(str);
// extractString(str2);