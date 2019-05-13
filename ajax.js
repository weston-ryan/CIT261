//create a variable to hold the html button item
var button = document.getElementById('fetch');

//add an event listener to button
button.addEventListener('click',function(){

//create an instance of XMLHTTPRequest
var getMyData = new XMLHttpRequest();

//establish the connection
getMyData.open('GET','http://dev.virtualearth.net/REST/v1/Locations?q=san%20francisco&output=json&key=AiHEmAatcY9KyySrdotAy9AkyhZqcGZegE9pRvecG25MQpbShbWNYGmj8YzmLBKj');


//if successfull, then continue
getMyData.onload = function () {

//parse the JSON string returned by the API web service server
var info = JSON.parse(getMyData.responseText);

//print the parsed data into the console for debugging
console.log(info);

//call the function responsible to display the data in the html page
//fillHTMLelement(data);

var cityName = info.resourceSets[0].resources[0].name;
var latitude = info.resourceSets[0].resources[0].point.coordinates[0];
var longitude = info.resourceSets[0].resources[0].point.coordinates[1];

document.getElementById('name').innerHTML = cityName;
document.getElementById('lat').innerHTML = latitude;
document.getElementById('long').innerHTML = longitude;
}

getMyData.send();

});
