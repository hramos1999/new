const DB = require('./db')

class Regsumar {
    static GetDocentes = async () => {
		const sql = `select * from docente`
		return await DB.Select(sql)
	}

	static GetCursos = async () => {
		const sql = `select * from curso`
		return await DB.Select(sql)
	}

	static GetDisciplinas = async () => {
		const sql = `select * from disciplinas`
		return await DB.Select(sql)
	}

	static GetSumarios = async () => {
		const sql = `select * from sumario`
		return await DB.Select(sql)
	}

	static PostSumarios = async (conteudo, biblio, presenca) => {
		const sql = `INSERT INTO sumario (conteudo, biblio, presenca) VALUES ("${conteudo}", "${biblio}", ${presenca});`
		return await DB.Select(sql)
	}

	static PutSumarios = async (id, conteudo, biblio, presenca) => {
		const sql = `UPDATE sumario SET conteudo="${conteudo}", biblio="${biblio}", presenca=${presenca}
                    WHERE idsumario="${id}";`
		return await DB.Select(sql)
	}

	static DeleteSumarios = async (id) => {
		const sql = `DELETE FROM sumario WHERE idsumario="${id}";`
		return await DB.Select(sql)
	}



}

module.exports = Regsumar