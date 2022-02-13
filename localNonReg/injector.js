const http = require('http')

const options = {
    port: 3000,
    host:'localhost',
    path: '/',
    method: 'GET'
}

const req = http.request(options, res => {
    raw_data = '';
    res.on('data',(d) => {
        raw_data += d;
    });
    res.on('end', () =>{
        console.log(res.statusCode);
    });
});

// error handling
req.end();