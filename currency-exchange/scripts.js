var request = new XMLHttpRequest();

request.open("GET", "https://exchangeratesapi.io/api/latest?base=USD", true);

request.onload = function() {
        var data = JSON.parse(this.response);
        Object.keys(data).forEach(function(key) {
            console.log(data[key]);
        });

        // Send request
        request.send();