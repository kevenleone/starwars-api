'use strict'
var fs = require("fs");

function login(req, res) {
    var params = req.body;
    var name = params.name;
    var pass = params.pass;
    var status = false;
    var i = 0;
    var login = fs.readFileSync("./json/login.json");
    login = JSON.parse(login);
    while (i < login.length && status === false) {
        console.log(i);
        if (login[i].name === name && login[i].pass === pass) {
            status = true;
        }
        i++;
    }

    if (status) {
        res.status(200).send({ msg: "Login success", status: status });
    } else {
        res.status(200).send({ msg: "User o Pass incorrect", status: status })
    }
}

module.exports = {
    login
};