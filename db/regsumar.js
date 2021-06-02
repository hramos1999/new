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

	static PostSumarios = async (conteudo, biblio, presenca, aula) => {
		const sql = `INSERT INTO table_name (conteudo, biblio, presenca, aula) VALUES ("${conteudo}", "${biblio}", "${presenca}", "${aula}");`
		return await DB.Select(sql)
	}

	static PutSumarios = async (id, conteudo, biblio, presenca, aula) => {
		const sql = `UPDATE sumario SET conteudo="${conteudo}", biblio="${biblio}", presenca="${presenca}", aula="${aula}"
                    WHERE id="${id}";`
		return await DB.Select(sql)
	}

	static DeleteSumarios = async (id) => {
		const sql = `DELETE FROM sumario WHERE id="${id}";`
		return await DB.Select(sql)
	}



}

module.exports = Regsumar