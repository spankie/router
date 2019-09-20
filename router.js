class Router {
  constructor() {
    this.routes = {}
    console.log("rotuer created")
  }
  routes;

  bind(route, method, handler) {
    var r = {
      route: route,
      method: method,
      handler: handler
    }
    var thisroute = this.routes[route];
    if (!thisroute) {
      this.routes[route] = {[method]:r};
      return;
    }
    if (!thisroute[method]) {
      this.routes[route][method] = r;
    }
  }

  runRequest(route, method) {
    if (this.routes[route]) {
      var r = this.routes[route][method];
      if (r) return r.handler();
      return "504: Method Not Allowed";
    } else {
      return "404: Not found";
    }
  }
}


var router = new Router;
router.bind("/hello", "POST", function() {
  return "Hello Mr. Isaac Folarin";
})

var response = router.runRequest("/hello", "GET");
console.log(response)
