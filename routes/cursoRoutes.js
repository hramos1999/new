const express = require('express')
const router = express.Router()
const Pool = require("pg").Pool;
const siglaDetermination = require('../src/sigla');
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


// view all curs
router.get('/', express.json(), async (req, res) => {
	try{
		const allSum = await pool.query("SELECT * FROM curso");

		res.json(allSum.rows);
	}catch(err){
		console.error(err.message);
	}
});
// create a curs
// router.post('/create', express.json(), async (req, res) => {
// 	try{
// 		const { nome,descript,coordenador } = req.body;
//         console.log(nome, descript, coordenador)
// 		const newSum = await pool.query(
// 		"INSERT INTO curso (nome, sigla, descript, coordenador ) VALUES ($1, $2, $3, $4) RETURNING *",
// 		[nome,siglaDetermination(nome),descript,coordenador]);

// 		res.json(newSum.rows[0]);
// 	}catch(err){
// 		console.error(err.message);
// 	}
// });
// view a sum
// router.get('/:id', express.json(), async (req, res) => {
// 	try{
// 		const { id } = req.params;

// 		const theSum = await pool.query("SELECT * FROM sumario WHERE id=$1", [id]);
// 		res.json(theSum.rows[0]);
// 	}catch(err){
// 		console.error(err.message);
// 	}
// });

// edit a sum
// router.put('/:id', express.json(), async (req, res) => {
// 	try{
// 		const { id } = req.params;
// 		const { name, desc = req.body;

// 		const updateSum = await pool.query("UPDATE curso SET validate=$1, dataRegistro=$2, titulo=$3, subTopicos=$4 WHERE id=$5",
// 		[validate, dataRegistro, titulo, subTopicos, id]);

// 		res.json(updateSum.rows[0]);
// 	}catch(err){
// 		console.error(err.message);
// 	}
// });
// delete a sum
// router.delete('/:id', express.json(), async (req, res) => {
// 	try{
// 		const { id } = req.params;
// 		const theSum = await pool.query("DELETE FROM curso WHERE id=$1", [id]);
// 		res.json("The sum was deleted.");
// 	}catch(err){
// 		console.error(err.message);
// 	}
// });

module.exports = router