const express = require('express')
const router = express.Router()
router.use(express.json());

const Regsumar = require('../db/regsumar')


// view all sumarios
router.get('/', express.json(), async (req, res) => {
	const sumarios = await Regsumar.GetSumarios()

	if (!sumarios) return res.sendStatus(500) // internal error
	return res.json(
		sumarios.map((sumario) => ({
			id:sumario.id,
			id_disciplina:sumario.id_disciplina,
			nrAula:sumario.nrAula,
			validade:sumario.validade, 
			dataRegistro:sumario.dataRegistro, 
			titulo:sumario.titulo, 
			subTopicos:sumario.subTopicos,
		}))
	)
});

// create a sumario
router.post('/create', express.json(), async (req, res) => {

	const { id_disciplina,nrAula,validate, dataRegistro, titulo, subTopicos } = req.body;
	const newSum = await Regsumar.PostSumario(id_disciplina,nrAula,validate, dataRegistro, titulo, subTopicos);

	if(!newSum) return res.sendStatus(500);
	
	return res.json("Cadastro feito com sucesso.");
});

// view a sumario
router.get('/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const sumario = await Regsumar.GetSumarios(id)

	if (!sumario) return res.sendStatus(404) // internal error
	return res.json(sumario)

});

// edit a sumario
router.put('/:id', express.json(), async (req, res) => {

	const { id } = req.params;
	const { nrAula,validate, dataRegistro, titulo, subTopicos } = req.body;
	const putSum = await Regsumar.PutSumario(id,nrAula,validate, dataRegistro, titulo, subTopicos);

	if(!putSum) return res.sendStatus(500);
	
	return res.json("Elemento alterado com sucesso.");
});

// delete a sumario
router.delete('/:id', express.json(), async (req, res) => {
	const { id } = req.params;
	const deletedSumario = await Regsumar.DeleteSumario(id)

	if (!deletedSumario) return res.sendStatus(404) // internal error
	return res.json("Elemento deletado com sucesso.")
});

module.exports = router