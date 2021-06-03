const express = require('express')
const router = express.Router()

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

	const disciplinas = await Regsumar.GetMultipleDisciplinas()

	if (!disciplinas) return res.sendStatus(500) // internal error
	return res.json(
		disciplinas.map((disciplina) => ({
			id: disciplina.id,
			codigo: disciplina.codigo,
			nome: disciplina.nome,
			sinopse: disciplina.sinopse,
		}))
	)
}) 

router.get("/:id", express.json(), async (req, res) => {

	const {id} = req.params;
	const disciplina = await Regsumar.GetDisciplina(id)

	if (!disciplina) return res.sendStatus(500) // internal error
	return res.json(
		disciplina.map((disciplina) => ({
			id: disciplina.id,
			codigo: disciplina.codigo,
			nome: disciplina.nome,
			sinopse: disciplina.sinopse,
		}))
	)
}) 

module.exports = router

