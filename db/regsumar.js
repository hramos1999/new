const DB = require('./db')

class Regsumar {
    static GetDocentes = async () => {
		const sql = `select * from docente`

		const results = await DB.Select(sql)
		return results
	}
	static GetCursos = async () => {
		const sql = `select * from curso`

		const results = await DB.Select(sql)
		return results
	}
	static GetDisciplinas = async () => {
		const sql = `select * from disciplina`

		const results = await DB.Select(sql)
		return results
	}
	static GetSumarios = async () => {
		const sql = `select * from sumario`

		const results = await DB.Select(sql)
		return results
	}
	static PutSumarios = async (req) => {
		const sql = `UPDATE sumario SET conteudo = ${req.conteudo}, biblio= ${req.biblio} presenca= ${req.presenca}, aula= ${req.aula} WHERE CustomerID = 1;`

		const results = await DB.Select(sql)
		return results
	}
	static PostSumarios = async (req) => {
		const sql = `INSERT INTO Customers (conteudo , biblio,presenca, aula)VALUES (${req.conteudo},${req.biblio},${req.presenca},${req.aula});`

		const results = await DB.Select(sql)
		return results
	}
	static DeleteSumarios = async (req) => {
		const sql = `DELETE FROM sumario WHERE idsumario = ${req.idsumario}`

		const results = await DB.Select(sql)
		return results
	}


}

module.exports = Regsumar