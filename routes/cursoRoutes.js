const express = require('express')
const router = express.Router()

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

	const cursos = await Regsumar.GetCursos()

	if (!cursos) return res.sendStatus(500) // internal error
	return res.json(
		cursos.map((curso) => ({
			id: curso.id,
			sigla: curso.sigla,
			nome: curso.nome,
            conferegrau: curso.conferegrau
		}))
	)
}) 


module.exports = router