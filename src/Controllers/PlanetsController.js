const swapi = require('swapi-node')

function getAll(app, req, res){
    swapi.getVehicle().then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

module.exports = {
    getAll
}