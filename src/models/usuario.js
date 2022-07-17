const { DataTypes } = require('sequelize')

const { db } = require('../db/connection')


const Usuario = db.define('TBL_MS_USUARIO', {
    ID_USUARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    USUARIO: {
        type: DataTypes.STRING
    },
    NOMBRE_USUARIO: {
        type: DataTypes.STRING
    },
    ESTADO_USUARIO: {
        type: DataTypes.STRING
    },
    CONTRASEÑA: {
        type: DataTypes.TEXT
    },
    ID_ROL: {
        type: DataTypes.INTEGER
    },
    FECHA_ULTIMA_CONEXION: {
        type: DataTypes.DATE
    },
    PREGUNTA_CONTESTADAS: {
        type: DataTypes.INTEGER
    },
    PRIMER_INGRESO: {
        type: DataTypes.INTEGER
    },
    FECHA_VENCIMIENTO: {
        type: DataTypes.DATE
    },
    CORREO_ELECTRONICO: {
        type: DataTypes.STRING
    },
    CREADO_POR: {
        type: DataTypes.STRING
    },
    FECHA_CREACION: {
        type: DataTypes.DATE
    },
    MODIFICADO_POR: {
        type: DataTypes.STRING
    },
    FECHA_MODIFICACION: {
        type: DataTypes.DATE
    }
},
{
    tableName: 'TBL_MS_USUARIO',
    timestamps: false
})

module.exports = Usuario;