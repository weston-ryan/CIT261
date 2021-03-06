//create a variable to hold the html button item
var button = document.getElementById('fetch');

//add an event listener to button
button.addEventListener('click',function(){
    
//create an instance of XMLHTTPRequest
    var getMyData = new XMLHttpRequest();

    //establish the connection
    getMyData.open('GET','https://dev.virtualearth.net/REST/v1/Locations?q=san%20francisco&output=json&key=AiHEmAatcY9KyySrdotAy9AkyhZqcGZegE9pRvecG25MQpbShbWNYGmj8YzmLBKj');

    //if successfull, then continue
    getMyData.onload = function () {

        //parse the JSON string returned by the API web service server
        var info = JSON.parse(getMyData.responseText);

       //print the parsed data into the console for debugging
        console.log(info);

        // display the data in the html page
        var cityName = info.resourceSets[0].resources[0].name;
        document.getElementById('name').innerHTML = cityName;

        var latitude = info.resourceSets[0].resources[0].point.coordinates[0];
        document.getElementById('lat').innerHTML = latitude;

        var longitude = info.resourceSets[0].resources[0].point.coordinates[1];
        document.getElementById('long').innerHTML = longitude;
    }

    getMyData.send();

});
