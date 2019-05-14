var button = document.getElementById('fetch');

button.addEventListener('click',function(){

    var getMyData = new XMLHttpRequest();

    getMyData.open('GET','http://dev.virtualearth.net/REST/v1/Locations?q=san%20francisco&output=json&key=AiHEmAatcY9KyySrdotAy9AkyhZqcGZegE9pRvecG25MQpbShbWNYGmj8YzmLBKj');

    getMyData.onload = function () {

        var info = JSON.parse(getMyData.responseText);

        console.log(info);

        var cityName = info.resourceSets[0].resources[0].name;
        document.getElementById('name').innerHTML = cityName;

        var latitude = info.resourceSets[0].resources[0].point.coordinates[0];
        document.getElementById('lat').innerHTML = latitude;

        var longitude = info.resourceSets[0].resources[0].point.coordinates[1];
        document.getElementById('long').innerHTML = longitude;
    }

    getMyData.send();

});
