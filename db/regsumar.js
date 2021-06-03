const DB = require('./db')

class Regsumar {
    static GetDocentes = async () => {
		const sql = `select * from docente`

		const results = await DB.Select(sql)
		return results
	}	

	static GetMultipleDisciplinas = async () => {
		const sql = `select * from disciplina`
		const results = await DB.Select(sql)
		return results
	}

	static GetDisciplina = async (id) => {
		const sql = `select * from disciplina where id = "${id}" `
		const results = await DB.Select(sql)
		return results
	}
	static GetAllSumarios = async () => {
		const sql = `select * from sumario`
		const results = await DB.Select(sql)
		return results
	}

	static GetOneSumario = async (id) => {
		const sql = `select * from sumario where idsumario = "${id}"`
		const results = await DB.Select(sql)
		return results
	}
	//Todos os cursos
	static GetCursos = async () => {
		const sql = `select * from curso`
		const results = await DB.Select(sql)
		return results
	}
	// Curso by id
	static GetCurso = async (id) => {
		const sql = `select * from curso where id = "${id}"`
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

	static DeleteSumario = async (id) => {
		const sql =  `DELETE FROM sumario
						WHERE idsumario = "${id}";`
		const results = await DB.Delete(sql)
		return results
	}
	
}

module.exports = Regsumar