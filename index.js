const fs = require('fs')
const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/vegetables') {

        fs.readFile('response.json', 'utf-8', (err, data) => {

            res.writeHead(200, { 'content-type': 'application/json' });

            if (err) {

                res.write(err);

                res.end();

            } else {

                res.write(data);

                res.end();

            }

        });

    }

});


const PORT = 8080;

server.listen(PORT, () => {

    console.log(`server is running on PORT ${PORT}`);

});