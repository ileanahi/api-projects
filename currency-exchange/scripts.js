var request = new XMLHttpRequest();

request.open("GET", "https://api.coinbase.com/v2/prices/spot?currency=USD", true);

request.onload = function() {
    var data = JSON.parse(this.response);
    data.forEach(money => {
        console.log(money.data.currency);
    });
}

// Send request
request.send();