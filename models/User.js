const {db,DataType, DataTypes,Model} = require('../db');



class User extends Modal {}

User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
},{
    sequalize: db
})

module.exports = User 