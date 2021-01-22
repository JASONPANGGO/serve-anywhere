#!/usr/bin/env node

const http = require('http')
const path = require('path')
const fs = require('fs')
const PORT = process.argv.find(e => !isNaN(Number(e))) || 3000
http.createServer((req, res) => {
    const staticUrl = req.url === '/' ? path.join(process.cwd(), '/index.html') : path.join(process.cwd(), path.resolve(req.url))
    fs.readFile(staticUrl, { encoding: 'binary' }, (err, data) => {
        if (!err) {
            res.writeHead(200, 'OK')
            res.write(data)
        } else {
            res.writeHead(404, 'Not Found')
            res.write('404 Nothing to serve')
        }
        res.end()
    })
}).listen(PORT)
console.log(`Serve at http://localhost:${PORT}`);