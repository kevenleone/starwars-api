var fs = require("fs");
var path = require("path");

function getImageFile(app, req, res) {
    var imageFile = req.params.name;
    var pst = req.params.pst;
    var path_file = `./src/Image/${pst}/${imageFile}`;

    fs.readFile(path_file, (err, content) => {
        if(err){
            res.send({err: 'Image not found, bro !'});
            return ;
        }
        res.writeHead(200, { 'content-type' : 'image/jpg'});
        res.end(content);
    })
}

module.exports = {
    getImageFile
}