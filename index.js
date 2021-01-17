'use strict';

const http = require('http')
const path = require('path')
const fs = require('fs')
const PORT = 3000
http.createServer((req, res) => {
    const staticUrl = req.url === '/' ? path.join(process.cwd(), '/index.html') : path.join(process.cwd(), path.resolve(req.url))
    fs.readFile(staticUrl, { encoding: 'binary' }, (err, data) => {
        if (!err) {
            res.writeHead(200, 'OK')
            res.write(data)
        } else {
            res.writeHead(404, 'Not Found')
        }
        res.end()
    })
}).listen(PORT)
console.log(`Serve at http://localhost:${PORT}`);