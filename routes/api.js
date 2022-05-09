const express = require('express');
const router = express.Router(); 
const {vistaCliente, vistaUnCliente, crearCliente, editarCliente, borrarCliente} = require('../controller/controller.js')
const { check, validationResult, body } = require ("express-validator")
const {validarId} = require("../middleware/validarId")


router.get('/ver', vistaCliente);
router.get("/ver/:id", vistaUnCliente)
router.post('/crear', [
    check("name").not().isEmpty().withMessage("el campo esta vacio").isLength({max:25, min:3}).withMessage("su nombre debe contener al menos 4 letras y menos de 15 caracteres"),
    check("email").not().isEmpty().withMessage("el campo esta vacio").isEmail().withMessage("formato de correo lectronico invalido, ejemplo: example@email.com"),
    check("dni").not().isEmpty().withMessage("el campo esta vacio").isLength({max:8, min:8}).withMessage("debe contener 8 caracteres"),
    check("nationality").not().isEmpty().withMessage("el campo esta vacio")
], crearCliente);
router.put("/editar/:id", [
    check("name").not().isEmpty().withMessage("el campo esta vacio").isLength({max:25, min:3}).withMessage("su nombre debe contener al menos 4 letras y menos de 15 caracteres"),
    check("email").not().isEmpty().withMessage("el campo esta vacio").isEmail().withMessage("formato de correo lectronico invalido, ejemplo: example@email.com"),
    check("dni").not().isEmpty().withMessage("el campo esta vacio").isLength({max:8, min:8}).withMessage("debe contener 8 caracteres"),
    check("nationality").not().isEmpty().withMessage("el campo esta vacio")
], editarCliente)
router.delete("/eliminar/:id", validarId, borrarCliente)

module.exports = router;
