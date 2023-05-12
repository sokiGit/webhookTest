console.log("Hello, World!");

function run() {
  console.log("start");
  const core = require(['@actions/core'], function(foo) {});
  const wh = core.getInput('WH');
  const req = XMLHttpRequest();
  const hdrs = {
    'username': "Webhook testing",
    'avatar_url': "",
    'content': "This is a testing message UwU",
    'Content-type': "application/json"
  }
  req.setRequestHeader(JSON.stringify(hdrs));
  req.open("POST", wh);
  console.log("finish");
}

run();
