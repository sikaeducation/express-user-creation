const { Model } = require("objection")
const bcrypt = require("bcryptjs")
const database = require("./database-connection")
Model.knex(database)

class User extends Model {
  static tableName = "user"
  static signup(user){
    return bcrypt.hash(user.password, 12).then(hashedPassword => {
      delete user.password
      user.password_hash = hashedPassword
      return this.query().insert(user)
    })
  }
}

module.exports = User
