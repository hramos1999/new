const express = require('express')
const router = express.Router()
router.use(express.json());
router.post("/",express.json(), (req, res) => {
    console.log(req.body)
    res.json({ message: "Registo sumarios ok." });
  });

module.exports = router
