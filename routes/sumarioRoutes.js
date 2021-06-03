const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser');

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

	const sumarios = await Regsumar.GetAllSumarios()

	if (!sumarios) return res.sendStatus(500) // internal error
	return res.json(
		sumarios.map((sumario) => ({
			id: sumario.idsumario,
			conteudo: sumario.conteudo,
			biblio: sumario.bilio,
            presenca: sumario.presenca,
		}))
	)
}) 

router.get("/:id", express.json(), async (req, res) => {
	const {id} = req.params;
	const sumario = await Regsumar.GetOneSumario(id)

	if (!sumario) return res.sendStatus(500) // internal error
	return res.json(
		sumario.map((sumario) => ({
			id: sumario.idsumario,
			conteudo: sumario.conteudo,
			biblio: sumario.bilio,
            presenca: sumario.presenca,
		}))
	)
}) 
router.post("/create", express.json(), async (req, res) => {

    const { conteudo, biblio, presenca } = req.body;

	const sumario = await Regsumar.PostSumario(conteudo, biblio, presenca);

	if (!sumario) return res.sendStatus(500) // internal error
    return res.json("Sumario added successfully.");
	
}) 

router.put("/update", express.json(), async (req, res) => {

    const { idsumario,conteudo, biblio, presenca } = req.body;

	const sumario = await Regsumar.PutSumario(idsumario,conteudo, biblio, presenca);

	if (!sumario) return res.sendStatus(500) // internal error
    return res.json("Sumario updated successfully");
	
}) 

router.delete("/remove/:id", express.json(), async (req, res) => {
	const {id} = req.params;
    const sumario = await Regsumar.DeleteSumario(id);

	if (!sumario) return res.sendStatus(500) // internal error
    return res.json("Sumario removed successfully");
	
}) 

module.exports = router

