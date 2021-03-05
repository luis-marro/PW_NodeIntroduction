// Node file to create a new server with node

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    const method = req.method;
    let baseUrl = 'http://' + req.headers.host + '/';
    const currentUrl = new URL(req.url, baseUrl);
    const pathName = currentUrl.pathname;
    const searchParams = currentUrl.searchParams;
    if (method === 'GET' && pathName > '/hello') {
        res.writeHead(200, {'Content-Type':'application/json'});
        let name = searchParams.name;
        let responseName = JSON.stringify({
            name : name,
        })
        res.write(responseName);
        res.end();
    }else{
        res.writeHead(200, {'Content-Tyoe': 'application/JSON'});
        let responseText = JSON.stringify({
            message : "Laboratorio 3 Progra Web ! ",
        })
        res.write(responseText);
        res.end();
    }
}).listen(8080);

