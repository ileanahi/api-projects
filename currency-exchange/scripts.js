var request = new XMLHttpRequest();

request.open("GET", "https://exchangeratesapi.io/api/latest?base=USD", true);

request.onload = function() {
    var data = JSON.parse(this.response);
    data.forEach(money => {
        console.log(money.rates);
    });
}

// Send request
request.send();