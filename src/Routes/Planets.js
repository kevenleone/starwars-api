const Planets = require('../Controllers/PlanetsController')

module.exports = function(app){
    app.get('/planets', (req, res) => {
        Planets.getAll(app, req, res)
    })
}