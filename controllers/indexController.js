const {platos} = require('../data/index')

module.exports = {
    index: (req, res) => {
        res.render('index', {
            titulo: "Pimienta & Sal",
            platos
        })
    },

    getOne: (req, res) => {
        let platoId = +req.params.id
        let plato = platos.find(plato => {
         return plato.id === platoId   
        })
        res.render('detalleMenu', {
            titulo: plato.nombre,
            plato
        })
    }
}