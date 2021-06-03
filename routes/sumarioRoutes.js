const express = require('express')
const router = express.Router()

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

	const sumarios = await Regsumar.GetSumarios(req)

	if (!sumarios) return res.sendStatus(500) // internal error
	return res.json(
		sumarios.map((sumario) => ({
			id: sumario.idsumario,
			conteudo: sumario.conteudo,
			biblio: sumario.biblio,
			presenca: sumario.presenca,
			aula: sumario.aula,
			
		}))
	)
})
router.put("/put", express.json(), async (req, res) => {

	const sumarios = await Regsumar.PutSumarios(req)

	if (!sumarios) return res.sendStatus(500) // internal error
	return res.json(`Sumario com id ${req.idsumario} alterado`)
	
}) 
router.post("/", express.json(), async (req, res) => {

	const sumarios = await Regsumar.PostSumarios(req)

	if (!sumarios) return res.sendStatus(500) // internal error
	return res.json(`Novo sumario adicionado`
	)
})  

router.delete("/", express.json(), async (req, res) => {

	const sumarios = await Regsumar.DeleteSumarios(req)

	if (!sumarios) return res.sendStatus(500) // internal error
	return res.json(`Sumario com id = ${req.idsumario} foi eliminado`
			
	
	)
})


module.exports = router