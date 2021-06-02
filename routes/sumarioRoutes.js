const express = require('express')
const router = express.Router()

const Regsumar = require('../db/regsumar')
const DB = require('../db/db')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

	const Sumarios = await Regsumar.GetSumarios()

	if (!Sumarios) return res.sendStatus(500) // internal error
	return res.json(
		Sumarios.map((sumarios) => ({
			idsumario: sumarios.idsumario,
			conteudo: sumarios.conteudo,
			biblio: sumarios.biblio,
			presenca: sumarios.presenca,
			aula: sumarios.aula,
		}))
	)
}) 


router.delete("/delete/:id", express.json(), async (req, res) => {

	const {id} = req.params
	const sumario = await Regsumar.DeleteSumario(id)

	if (!sumario) return res.sendStatus(500) // internal error
	return res.json("Sumario Removido.");
	
})

module.exports = router
