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
}

module.exports = Regsumar