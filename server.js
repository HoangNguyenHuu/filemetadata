var express = require('express')
var app = express()
var multer = require('multer')
var upload = multer({ dest: 'uploads/' });

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post('/upload', upload.single('userFile'), function(req, res, next) {
    if (req.file !== undefined) {
        var result = {
            size: req.file.size
        };
        res.send(result);
    } else {
        res.send("You sent no file");
    }


});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
