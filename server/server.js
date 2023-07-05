const express = require('express');
const bodyParser = require('body-parser');
var dao = require("./data_access");

// server app
var app = express();

//Parse JSON body
app.use(bodyParser.json());


app.get("/planets", (req, {}, res) => {
    dao.call('planets', {}, (result) => {
        if (result.results !== undefined) {
            res.send(result.results);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

app.get("/characters", (res) => {
    dao.findAllCharacters((result) => {
        if (result !== undefined) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

// findOneBook
// app.get("/books/:isbn", (req, res) => {
//     dao.call('findBook', { isbn: req.params.isbn }, (result) => {
//         if (result.book !== undefined) {
//             res.send(result.book);
//         } else {
//             res.statusCode = 404;
//             res.end();
//         }
//     });
// });


// start the rest service
var port = 4000;
console.log('service opening on port: ' + port)
app.listen(port);