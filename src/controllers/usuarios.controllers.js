const { request, response } = require('express');
const Roles = require('../models/roles');
const Usuario = require('../models/usuario');

const getUsuarios = async (req = request, res = response) => {
    const usuarios = await Usuario.findAll();
    res.json({usuarios})
}

const getUsuario = async (req = request, res = response) => {
    res.send('holi');
}

const postUsuario = async (req = request, res = response) => {
    res.send('holi');
}

const putUsuario = async (req = request, res = response) => {
    res.send('holi');
}

const banUsuario = async (req = request, res = response) => {
    res.send('holi');
}

module.exports = {
    getUsuarios,
    getUsuario,
    postUsuario,
    putUsuario,
    banUsuario
}