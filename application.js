//API link:
//https://www.commercialloandirect.com/rates-api.html

function loadXMLDoc(){
    var e;e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),e.onreadystatechange=function(){4==e.readyState&&200==e.status&&(document.getElementById("KeyMarketRates").innerHTML=e.responseText);console.log(e.responseText);},e.open("POST","https://www.commercialloandirect.com/rates-api.php",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("Prime=Y&Libor30Day=N&Libor90Day=N&Libor6Month=N&Libor1Year=N&Swap3Year=N&Swap5Year=N&Swap7Year=N&Swap10Year=N&Treasury5Year=Y&Treasury7Year=N&Treasury10Year=N&SBA10Year=N&SBA20Year=N&Bordered=Y&Center=Y&RightCol=Y&LeftCol=Y&ColorText=0000ff&Width=050&WidthCol1=050&WidthCol2=050&TbColor=90ee90&BdColor=228b22")}
loadXMLDoc();





/*
function createSavings() {
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You need to save  " + sessionStorage.clickcount + " months to afford the " + itemWanted;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
*/

//creating another function trying to do a calculation
function createSavings() {
    var i1 = document.getElementById("paycheck").value;
    var i2 = document.getElementById("otherIncome").value;
    var e1 = document.getElementById("utilities").value;
    var e2 = document.getElementById("mortgage").value;
    var e3 = document.getElementById("insurance").value;
    var intemCost = document.getElementById("itemCost");

    //Use an API and grab the interest rate using a child element
    var ratesRow = document.getElementsByClassName("ratesRow");
    var parsedIntRate = ratesRow[0].children[1].innerText;
    var intRate = parsedIntRate.replace("%","");

    //  get the value out of a select list
    var itemWanted = document.getElementById("itemWanted").value;

    //var total = (i1 + i2) - (e1 + e2 + e3);
    var manyMonths = itemCost / ((i1 + i2) - (e1 + e2 + e3));
    console.log(intRate);



    var resultText = "You need to save " + manyMonths + " months to afford the " + itemWanted;
    document.getElementById("result").innerHTML = resultText



    // this part hides/shows the cantAffordThis.giff
    var x = document.getElementById("cantAffordThis.gif");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

