var fs = require("fs");
var path = require("path");
var swapi = require('swapi-node')

function getAll(app, req, res) {
    var connection = app.config.database()
    var StarWarsDAO = new app.src.Models.StarWarsDAO(connection)

    StarWarsDAO.getAll((err, result) => {
        if(err){
            res.send(err)
            return ;
        }
        result.forEach(starwar => {
            var description_min = starwar.description+""
            starwar.description_min = description_min.substr(0, 250)+"..."
        });
        res.status(200).send(result);
        connection.end()
    })
}

function getOne(app, req, res) {
    var connection = app.config.database()
    var StarWarsDAO = new app.src.Models.StarWarsDAO(connection)
    var name = req.params.name;

    StarWarsDAO.getOne(name, (err, result) => {
        if(err){
            res.send(200).send(err)
            return ;
        }

        if(result == ''){
            res.status(400).send('Not found')
            return ;
        }
        res.status(200).send(result)
        connection.end()
    })
}

function setOne(app, req, res) {
    var data = req.body;
    var connection = app.config.database()
    var StarWarsDAO = new app.src.Models.StarWarsDAO(connection)
    var id = req.params.id

    StarWarsDAO.setOne(data, id, (err, result) => {
        if(err){
            console.log(err)
            res.send(err)
            return ;
        }
        res.status(200).send(result);
        connection.end()
    })
}

function CreateOne(app, req, res) {
    var data = req.body;
    var connection = app.config.database()
    var StarWarsDAO = new app.src.Models.StarWarsDAO(connection)
    
    StarWarsDAO.createOne(data, (err, result) => {
        if(err){
            console.log(err)
            res.send(err)
            return ;
        }
        res.status(200).send(result);
        connection.end()
    })
}
function deleteOne(app, req, res) {
    var id = req.params.id;
    var connection = app.config.database()
    var StarWarsDAO = new app.src.Models.StarWarsDAO(connection)

    StarWarsDAO.deleteOne(id, (err, result) => {
        if(err){
            console.log(err)
            res.status(400).send(err)
            return ;
        }

        res.status(200).send(result);
        connection.end()
    })
}

module.exports = {
    getAll,
    getOne,
    setOne,
    CreateOne,
    deleteOne,
};