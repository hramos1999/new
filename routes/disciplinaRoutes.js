const express = require('express')
const router = express.Router()

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

	const disciplinas = await Regsumar.GetDisciplinas()

	if (!disciplinas) return res.sendStatus(500) // internal error
	return res.json(
		disciplinas.map((disciplina) => ({
			id: disciplina.idDocente,
			nome: disciplina.nome,
			nivel: disciplina.nivel,
			ano: disciplina.ano,
		}))
	)
}) 


module.exports = router

