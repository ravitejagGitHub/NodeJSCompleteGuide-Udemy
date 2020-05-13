const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.headers);


    
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('        <head>');
        res.write('            <title> Node Js </title>');
        res.write('        </head>');
        res.write('        <body>');
        res.write(`           
            <form action="/message" method="POST">
            <input type="text" /> 
            <button type=""submit> Send ... </button></form>
        `);
        res.write('        </body>');
        res.write('    </html>');
        return res.end();
    }

    if (req.url === '/message' && req.method == "POST") {
        fs.writeFileSync('message.txt', 'dummy');
        res.statusCode = 302; // Redirect found.
        res.setHeader('Location','/test'); // new location path.
        return res.end();
    }

    res.write('<html>')
    res.write('        <head>');
    res.write('            <title> Node Js </title>');
    res.write('        </head>');
    res.write('        <body>');
    res.write('            Welcome, Hello Worldl!!!!!!!!!!!!!');
    res.write('        </body>');
    res.write('    </html>');
    return res.end();

    //  process.exit(1);
})

server.listen(3000, '127.0.0.1', () => {
    console.log(`Server Runnig ... ${process.env.PORT}`);
});