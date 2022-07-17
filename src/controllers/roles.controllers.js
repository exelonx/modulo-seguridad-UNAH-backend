const { request, response } = require('express');
const Roles = require('../models/roles');
const Usuario = require('../models/usuario');

const getRoles = async (req = request, res = response) => {
    const roles = await Roles.findAll();
    res.json({roles})
}

const getRol = async (req = request, res = response) => {
    
    const { id_rol } = req.params
    
    const rol = await Roles.findByPk( id_rol );
    res.json({ rol })

}

const postRol = async (req = request, res = response) => {
    //body
    const { ROL, DESCRIPCION, CREADO_POR, FECHA_CREACION, MODIFICADO_POR, FECHA_MODIFICACION } = req.body;
    
    try {
        const rol = Roles.build({
            ROL: ROL,
            DESCRIPCION: DESCRIPCION,
            CREADO_POR: CREADO_POR,
            FECHA_CREACION: FECHA_CREACION,
            MODIFICADO_POR: MODIFICADO_POR,
            FECHA_MODIFICACION: FECHA_MODIFICACION
        });

        await rol.save();   //Insertar a DB
        res.json( rol );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

const putRol = async (req = request, res = response) => {
    const { id_rol } = req.params
    const { ROL, DESCRIPCION, CREADO_POR, FECHA_CREACION, MODIFICADO_POR, FECHA_MODIFICACION } = req.body;

    try {

        const rol = await Roles.findByPk( id_rol );
        if(!rol){
            return res.status(404).json({
                msg: 'No existe un rol con el id ' + id_rol
            })
        }
        
        await rol.update({
            ROL: ROL,
            DESCRIPCION: DESCRIPCION,
            CREADO_POR: CREADO_POR,
            FECHA_CREACION: FECHA_CREACION,
            MODIFICADO_POR: MODIFICADO_POR,
            FECHA_MODIFICACION: FECHA_MODIFICACION
        })

        res.json(rol);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }
}

const DeleteRol = async (req = request, res = response) => {
    const { id_rol } = req.params

    try {

        const rol = await Roles.findByPk( id_rol );
        if(!rol){
            return res.status(404).json({
                msg: 'No existe un rol con el id ' + id_rol
            })
        }
        const { ROL } = await Roles.findByPk(id_rol)
        await rol.destroy();

        res.json({
            msg: `El rol: ${ROL} ha sido eliminado`
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error.message
        })
    }  
}

module.exports = {
    getRoles,
    getRol,
    postRol,
    putRol,
    DeleteRol
}