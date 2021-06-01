const express = require('express')
const router = express.Router()
const Regsumar = require('../db/regsumar')

const siglaDetermination = require('../src/sigla');
router.use(express.json());

// view all curso
router.get('/', express.json(), async (req, res) => {
	
	const cursos = await Regsumar.GetCursos()

	if (!cursos) return res.sendStatus(500) // internal error
	return res.json(
		cursos.map((curso) => ({
			id: curso.id,
			nome: curso.nome,
			sigla:curso.sigla,
			descript: curso.descript,
			coordenador:curso.coordenador
		}))
	)
});

// create a curso
router.post('/create', express.json(), async (req, res) => {
	const { nome,sigla,descript,coordenador } = req.body;
	const cursos = await Regsumar.PostCursos(nome, siglaDetermination(nome), descript, coordenador);

	if(!cursos) return res.sendStatus(404);
	
	return res.json("Cadastro feito com sucesso")
});

// view a curso
router.get('/:id', express.json(), async (req, res) => {
	const { id } = req.params;
	const curso = await Regsumar.GetCursos(id)

	if (!curso) return res.sendStatus(404) // internal error
	
	return res.json(curso)
});

// edit a curso
router.put('/:id', express.json(), async (req, res) => {
	
	const { id } = req.params;
	const { nome, sigla, descript, coordenador} = req.body;
	const cursos = await Regsumar.PutCurso(id,nome, siglaDetermination(nome), descript, coordenador);

	if(!cursos) return res.sendStatus(404);

	return res.json("Curso Alterado.")
});

// delete a curso
router.delete('/:id', express.json(), async (req, res) => {
	
	const { id } = req.params;
	const theSum = await Regsumar.DeleteCurso(id);

	if(!theSum) return res.sendStatus(404);
	
	return res.json("Curso eliminado com sucesso")
});

module.exports = router
