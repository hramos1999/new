const express = require('express')
const router = express.Router()
router.use(express.json());

const Regsumar = require('../db/regsumar');
const siglaDetermination = require('../src/sigla');


// view all disciplina
router.get('/', express.json(), async (req, res) => {
	const disciplinas = await Regsumar.GetDisciplinas()

	if (!disciplinas) return res.sendStatus(500) // internal error
	return res.json(
		disciplinas.map((disciplina) => ({
			id:disciplina.id,
            id_turma:disciplina.id_turma,
            nome:disciplina.nome, 
            sigla:disciplina.sigla, 
            descript:disciplina.descript,
		}))
	)
});

// create a disciplina
router.post('/create', express.json(), async (req, res) => {

	const { nome, sigla, descript } = req.body;
	const newDisc = await Regsumar.PostDisciplina(nome, siglaDetermination(nome), descript);

	if(!newDisc) return res.sendStatus(500);
	
	return res.json("Cadastro feito com sucesso.");
});

// view a Disciplina
router.get('/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const disciplina = await Regsumar.GetDisciplinas(id)

	if (!disciplina) return res.sendStatus(404) // internal error
	return res.json(disciplina)

});

// edit a disciplina
router.put('/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const { nome, sigla, descript } = req.body;
	const putDisc = await Regsumar.PutDisciplina(id,nome, sigla, descript);

	if(!putDisc) return res.sendStatus(500);
	
	return res.json("Elemento alterado com sucesso.");
});

// delete a disciplina
router.delete('/:id', express.json(), async (req, res) => {
	const { id } = req.params;
	const deletedDisc = await Regsumar.DeleteDisciplina(id)

	if (!deletedDisc) return res.sendStatus(404) // internal error
	return res.json("Elemento deletado com sucesso.")
});

module.exports = router;
