var app = require('./config/loader');
var port = process.env.PORT || 3977;

app.listen(port, function() {
    console.log(`Servidor api rest de express - OK - PORT: ${port}`);
});