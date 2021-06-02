const express = require('express')
const router = express.Router()
router.use(express.json());
router.get("/", (req, res) => { // res retorna um obj json com o conteudo abaixo
    res.json({ message: "Registo sumarios ok." });
});

module.exports = router