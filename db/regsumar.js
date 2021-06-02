const DB = require('./db')

class Regsumar {
    static GetDocentes = async () => {
		const sql = `select * from docente`

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

	static GetCursos = async () => {
		const sql = `select * from curso`
		const results = await DB.Select(sql)
		return results
	}

	static PostSumario = async (conteudo, biblio, presenca) => {
		const sql =  `INSERT INTO sumario (conteudo, biblio, presenca) VALUES ("${conteudo}", "${biblio}", "${presenca}");`
		const results = await DB.Insert(sql)
		return results
	}

	static PutSumario = async (idsumario,conteudo, biblio, presenca) => {
		const sql =  `UPDATE sumario set conteudo = "${conteudo}",
										 biblio = "${biblio}",
										 presenca = "${presenca}"
										 where idsumario = "${idsumario}";`
		const results = await DB.Update(sql)
		return results
	}

	static DeleteSumario = async (idsumario) => {
		const sql =  `DELETE FROM sumario
						WHERE idsumario = "${idsumario}";`
		const results = await DB.Delete(sql)
		return results
	}
	
}

module.exports = Regsumar