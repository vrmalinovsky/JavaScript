var type = ['application/json', 'text/plain', 'text/html'];
var http = require("http");

function reqAuthor(load, answer) {
  var data = "";
  load.on("data", function(chunk) {
    data += chunk;
  });
  load.on("end", function() {
    answer(null, data);
  });
  load.on("error", function(error) {
    answer(error);
  });
}

type.forEach(function(header) {
  var options = {
    hostname: "eloquentjavascript.net",
    path: "/author",
    method: "GET",
    headers: {Accept: header}
  };

  var request = http.request(options, function(answer) {
    reqAuthor(answer, function(error, data) {
      console.log(data);
    })
  });
  request.end();
});