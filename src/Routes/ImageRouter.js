var Image = require('../Controllers/ImageController')

module.exports = function(app){
    app.get('/starwars/img/:pst/:name', (req, res) => {
        Image.getImageFile(app, req, res)        
    })
}
