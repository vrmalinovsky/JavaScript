var http = require("http");

	function readStreamAsString(stream, callback) {
	  var content = "";
	  stream.on("data", function(chunk) {
		content += chunk;
	  });
	  stream.on("end", function() {
		callback(null, content);
	  });
	  stream.on("error", function(error) {
		callback(error);
	  });
	}

	var options = {
		hostname: "localhost",
		port: 8000,
		path: "/temp",
		method: "MKCOL"
	};

	var request = http.request(options, function(response) {
	readStreamAsString(response, function(error, content) {
	  console.log(content);
	})
	}); 
request.end();