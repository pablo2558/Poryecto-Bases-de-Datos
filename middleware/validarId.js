const {Client} = require("../models/client")

const validarId =  (req, res, next) => {
    const cliente = Client.findById(req.params.id)
    if (cliente.name !== null) {
        next();
    }
    res.json({msg: "el ID es invalido"})
} 

module.exports = {validarId}