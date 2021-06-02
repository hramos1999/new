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

	static AddSumario = async (conteudo, biblio, presenca) => {
		const sql = `INSERT INTO sumario (conteudo, biblio, presenca) VALUES ("${conteudo}", "${biblio}", ${presenca});`

		const results = await DB.Insert(sql)
		return results
	}

	static EditSumario =  async (id,conteudo, biblio,presenca) => {
		const sql = `UPDATE sumario SET conteudo="${conteudo}", biblio="${biblio}",presenca=${presenca}\
		 WHERE idsumario=${id};`

		const results = await DB.Update(sql)
		return results
	}

	static DeleteSumario = async (id) => {
		const sql = `delete from sumario where idsumario="${id}"`

		const results = await DB.Select(sql)
		return results
	}	

}

module.exports = Regsumar