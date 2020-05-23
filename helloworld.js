var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Welcome Message"
   response.end(' First Web App Deployment with Ansible Playbook by Vanessa Settle on 5.23.2020\n')
}).listen(3000)

// Console will print the message
console.log('Server running')