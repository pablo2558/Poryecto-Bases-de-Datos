const { json } = require('express/lib/response');
const res = require('express/lib/response');
const {Client} = require("../models/client")
const { check, validationResult, body } = require ("express-validator")

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaCliente = async (req, res) => {
    const cliente = await Client.find()
    res.json({cliente})
}

const vistaUnCliente = async (req, res) => {
    try {
        const cliente = await Client.findById(req.params.id)
        res.json({cliente}) 
    } catch (error) {
        res.status(400).json({msg: "error con el id", error})
    }
}

const crearCliente = async (req, res)=>{
    const error = validationResult(req)
    try {
        if (error.isEmpty()) {
            const {name, dni, email, nationality} = req.body
            const cliente = new Client({name, dni, email, nationality});
            await cliente.save()
            res.status(201).json({cliente, msg: "Datos guardados exitosamente"}) 
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({msg: "este nombre de usuario ya existe en la base de datos", err})
    }
}

const editarCliente = async (req, res) => {
    const error = validationResult(req)
    if (error.isEmpty()) {
        const {id} = req.params
        const cliente = req.body
        await Client.findByIdAndUpdate(id, req.body)
        res.status(202).json({cliente, msg: "Cliente editado exitosamente"}) 
    } else {
        res.status(400).json({ errors: error.array() });
    }
} 

const borrarCliente = async (req, res) => {
    try {
        const cliente = await Client.findByIdAndDelete(req.params.id)
        res.json({msg: "Cliente eliminado exitosamente", cliente}) 
    } catch (error) {
        res.status(400).json({msg: "problemas a la hora de borrar la informacion", error})
    }
} 


module.exports = {vistaUno, vistaCliente, vistaUnCliente, crearCliente, editarCliente, borrarCliente}