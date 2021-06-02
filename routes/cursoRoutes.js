const express = require('express')
const router = express.Router()

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

	const cursos = await Regsumar.GetCursos()

	if (!cursos) return res.sendStatus(500) // internal error
	return res.json(
		cursos.map((curso) => ({
			id: curso.idCurso,
			nome: curso.nome,
			sigla: curso.sigla,
		}))
	)
}) 


module.exports = router

