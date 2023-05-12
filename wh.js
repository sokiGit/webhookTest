const wh = "https://ptb.discord.com/api/webhooks/1106641391142047816/S9mr_JuSccLZGQM1DLRr_LcgpKIhyrFrhPEg2PjYPYoELUvjdo1b0ZBjXhyj7163xVmG";
const req = XMLHttpRequest();
const hdrs = {
  username: "Webhook testing",
  avatar_url: "",
  content: "This is a testing message UwU",
  Content-type: "application/json"
}
req.setRequestHeader(JSON.stringify(hdrs));
req.open("POST", wh)
