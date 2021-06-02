const express = require('express')
const router = express.Router()

const Regsumar = require('../db/regsumar')

router.use(express.json());

router.get("/", express.json(), async (req, res) => {

    const sumarios = await Regsumar.GetSumarios()

    if (!sumarios) return res.sendStatus(500) // internal error
    return res.json(
        sumarios.map((sumario) => ({
            idsumario: sumario.idsumario,
            conteudo: sumario.conteudo,
            biblio: sumario.biblio,
            presenca: sumario.presenca,
            aula: sumario.aula,
        }))
    )
})


router.post('/novoSum', express.json(), async (req, res) => {
    const {conteudo, biblio, presenca} = req.body;
    const novoSum = await Regsumar.PostSumarios(conteudo, biblio, presenca);

    if(!novoSum) return res.sendStatus(500);

    return res.json("Sumario criado com sucesso!");
})

router.delete('/removSum/:id', express.json(), async (req, res) => {
    const {id} = req.params;
    const removSum = await Regsumar.DeleteSumarios(id);

    if(!removSum) return res.sendStatus(500);

    return res.json("Sumario eliminado com sucesso!");
})

router.put('/atuSum/:id', express.json(), async (req, res) => {
    const {id} = req.params;
    const {conteudo, biblio, presenca} = req.body;
    const removSum = await Regsumar.PutSumarios(id, conteudo, biblio, presenca);

    if(!removSum) return res.sendStatus(500);

    return res.json("Sumario alterado com sucesso!");
})

module.exports = router