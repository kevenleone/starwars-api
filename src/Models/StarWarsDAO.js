function StarWarsDAO(connection){
    this._connection = connection
}

StarWarsDAO.prototype.getAll = function(callback){
    this._connection.query(`select * from characters`, callback)
}

StarWarsDAO.prototype.getOne = function(name, callback){
    this._connection.query(`select * from characters where name like '%${name}%'`, callback)
}

StarWarsDAO.prototype.setOne = function(data, id, callback){
   this._connection.query(`update characters set ? where id = ${id}`, data, callback)
}

StarWarsDAO.prototype.createOne = function(data, callback){
    this._connection.query(`insert into characters set ?`, data, callback)
}

StarWarsDAO.prototype.deleteOne = function(id, callback){
    this._connection.query(`delete from characters where id = ${id}`, callback)
}

module.exports = function(){
    return StarWarsDAO
}