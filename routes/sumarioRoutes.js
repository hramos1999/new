const express = require('express')
const router = express.Router()
const Pool = require("pg").Pool;
router.use(express.json());


const pool = new Pool({
	connectionLimit: process.env.DB_CONNECTION_LIMIT,
	timezone: '+00:00',
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_CENTRAL_DATABASE,
	insecureAuth: true,
})


// view all sum
router.get('/', express.json(), async (req, res) => {
	try{
		const allSum = await pool.query("SELECT * FROM sumario");

		res.json(allSum.rows);
	}catch(err){
		console.error(err.message);
	}
});
// create a sum
router.post('/create', express.json(), async (req, res) => {
	try{
		const { validate, dataRegistro, titulo, subTopicos } = req.body;
		const newSum = await pool.query(
		"INSERT INTO sumario (validate, dataRegistro, titulo, subTopicos) VALUES ($1, $2, $3, $4) RETURNING *",
		[validate, dataRegistro, titulo, subTopicos]);

		res.json(newSum.rows[0]);
	}catch(err){
		console.error(err.message);
	}
});
// view a sum
router.get('/:id', express.json(), async (req, res) => {
	try{
		const { id } = req.params;

		const theSum = await pool.query("SELECT * FROM sumario WHERE id=$1", [id]);
		res.json(theSum.rows[0]);
	}catch(err){
		console.error(err.message);
	}
});

// edit a sum
router.put('/:id', express.json(), async (req, res) => {
	try{
		const url = "http://localhost:3001/sumarios";
		const { id } = req.params;
		const { validate, dataRegistro, titulo, subTopicos } = req.body;

		const updateSum = await pool.query("UPDATE sumario SET validate=$1, dataRegistro=$2, titulo=$3, subTopicos=$4 WHERE id=$5",
		[validate, dataRegistro, titulo, subTopicos, id]);

		res.json(updateSum.rows[0]);
	}catch(err){
		console.error(err.message);
	}
});
// delete a sum
router.delete('/:id', express.json(), async (req, res) => {
	try{
		const { id } = req.params;
		const theSum = await pool.query("DELETE FROM sumario WHERE id=$1", [id]);
		res.json("The sum was deleted.");
	}catch(err){
		console.error(err.message);
	}
});

module.exports = router