function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  var uri = decodeURIComponent(path);
  return "." + uri.replace(/\.\./g,".");
}
