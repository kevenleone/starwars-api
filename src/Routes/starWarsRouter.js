var StarWars = require('../Controllers/starwarsControllers')

module.exports = function(app){

    app.get('/starwars', (req, res) => {
        StarWars.getAll(app, req, res)        
    })

    app.get('/starwars/:name', (req, res) => {
        StarWars.getOne(app, req, res)        
    })

    app.put('/starwars/:id', (req, res) => {
        StarWars.setOne(app, req, res)        
    })

    app.post('/starwars', (req, res) => {
        StarWars.CreateOne(app, req, res)        
    })

    app.delete('/starwars/:id', (req, res) => {
        StarWars.deleteOne(app, req, res)        
    })
}
