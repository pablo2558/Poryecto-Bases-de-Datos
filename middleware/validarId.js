const {Client} = require("../models/client")

const validarId = async (req, res, next) => {
    try {
        const cliente = await Client.findById(req.params.id)
        if (cliente !== null) {
            next();
        } else {
            res.status(400).json({msg: "El ID ingresado es incorrecto"})
        }
    } catch (error) {
        res.status(400).json({msg: "Verificar ID, formato incorrecto", error})
    }
} 

module.exports = {validarId}