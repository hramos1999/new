const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser');

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

	const sumarios = await Regsumar.GetSumarios()

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

router.post("/create", express.json(), async (req, res) => {

    const { conteudo, biblio, presenca } = req.body;

	const sumario = await Regsumar.PostSumario(conteudo, biblio, presenca);

	if (!sumario) return res.sendStatus(500) // internal error
    return res.json("Cadastro com sucesso.");
	
}) 

router.put("/update", express.json(), async (req, res) => {

    const { idsumario,conteudo, biblio, presenca } = req.body;

	const sumario = await Regsumar.PutSumario(idsumario,conteudo, biblio, presenca);

	if (!sumario) return res.sendStatus(500) // internal error
    return res.json("Sumario updated successfully");
	
}) 

router.delete("/remove", express.json(), async (req, res) => {

    const { idsumario} = req.body;

	const sumario = await Regsumar.DeleteSumario(idsumario);

	if (!sumario) return res.sendStatus(500) // internal error
    return res.json("Sumario removed successfully");
	
}) 

module.exports = router

