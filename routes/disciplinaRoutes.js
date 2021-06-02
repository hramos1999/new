const express = require('express')
const router = express.Router()

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async(req, res) => {

    const diciplinas = await Regsumar.GetDisciplinas()

    if (!diciplinas) return res.sendStatus(500) // internal error
    return res.json(
        diciplinas.map((disciplina) => ({
            id: disciplina.id,
            codigo: disciplina.codigo,
            nome: disciplina.nome,
            sinopse: disciplina.sinopse,
        }))
    )
})


module.exports = router