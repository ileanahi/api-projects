var request = new XMLHttpRequest();

request.open("GET", "https://exchangeratesapi.io/api/latest?base=USD", true);

request.onload = function() {
        var data = JSON.parse(this.response);

        console.log(Object.keys(data));

        // Send request
        request.send();