var request = new XMLHttpRequest();

request.open("GET", "https://exchangeratesapi.io/api/latest?base=USD", true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(this.responseText);
        if (typeof fx !== "undefined" && fx.rates) {
            fx.rates = data.rates;
            fx.base = data.base;
        } else {
            var fxSetup = {
                rates: data.rates,
                base: data.base
            }
        }
    } else {
        console.log("Oops! An error.");
    }
};


// Send request
request.send();