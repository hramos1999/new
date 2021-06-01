const express = require('express')
const router = express.Router()
const Regsumar = require('../db/regsumar')

const siglaDetermination = require('../src/sigla');
router.use(express.json());

// view all curs
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
// create a curs
router.post('/create', express.json(), async (req, res) => {
	const { nome,sigla,descript,coordenador } = req.body;
	const cursos = await Regsumar.PostCursos(nome, siglaDetermination(nome), descript, coordenador);
	return res.json("Cadastro feito com sucesso")
});
// view a curso
router.get('/:id', express.json(), async (req, res) => {
	try{
		const { id } = req.params;

		const theSum = await pool.query("SELECT * FROM sumario WHERE id=$1", [id]);
		res.json(theSum.rows[0]);
	}catch(err){
		console.error(err.message);
	}
});

// edit a curso
router.put('/:id', express.json(), async (req, res) => {
	
	const { id } = req.params;
	const { nome, sigla, descript, coordenador} = req.body;
	const cursos = await Regsumar.PutCurso(id,nome, siglaDetermination(nome), descript, coordenador);
	return res.json("Curso Alterado.")
});
// delete a curso
router.delete('/:id', express.json(), async (req, res) => {
	
	const { id } = req.params;
	const theSum = await Regsumar.DeleteCurso(id);
	return res.json("Curso eliminado com sucesso")
});

module.exports = router