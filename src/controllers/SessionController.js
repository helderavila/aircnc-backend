// index, show, store, update, destroy
const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const { email } = req.body // Buscando o email de dentro do req.body

    let user = await User.findOne({ email }) 

    if (!user){
      user = await User.create({ email }) // Criar no banco de dados o email
    }
    return res.json(user)
  }
}