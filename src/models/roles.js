const { DataTypes } = require('sequelize')

const { db } = require('../db/connection')


const Roles = db.define(`TBL_MS_ROLES`, {
    ID_ROL: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ROL: {
        type: DataTypes.STRING
    },
    DESCRIPCION: {
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
}, {
    tableName: 'TBL_MS_ROLES',
    timestamps: false,
})

Roles.removeAttribute('id');

module.exports = Roles;