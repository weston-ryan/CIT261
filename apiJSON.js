var container = document.getElementBy Id("jsonGet");

function jsonGetDemo() {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://api.openaq.org/v1/cities');

    myRequest.onload = function() {
        var myData = JSON.parse(myRequest.responseText);
        var htmlString = "";
        console.log(myData);

        for (i=0, i < myData.results.length; i++){
            htmlString += "<p><br> City= " myData.results[i].city + "</b> &nbsp: Country= " + myData.results[i].country + " Count= " +
                myData.results[i].count + "</p>";
        }
        container.insertAdjacentHTML('beforeend', htmlString);
    };
    myRequest.send();
}
