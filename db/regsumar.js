const DB = require('./db')

class Regsumar {
	// ------------ Docente DB connections methods --------------
    static GetDocentes =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from docente WHERE id=${id}`
		}	
		else{
			sql = `select * from docente`
		}
		const results = await DB.Select(sql)
		return results
	}

	// ------------ Curso DB connections methods --------------
	static GetCursos =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from curso WHERE id=${id}`
		}	
		else{
			sql = `select * from curso`
		}
		const results = await DB.Select(sql)
		return results
	}

	// ------------ Sumario DB connections methods --------------
	static GetSumarios =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from sumario WHERE idsumario=${id}`
		}	
		else{
			sql = `select * from sumario`
		}
			
		const results = await DB.Select(sql)
		return results
	}

	static DeleteSumario =  async (id) => {
		const sql = `DELETE FROM sumario WHERE idsumario=${id}`

		const results = await DB.Delete(sql)
		return results
	}

	static PutSumario =  async (id,conteudo, biblio,presenca) => {
		const sql = `UPDATE sumario SET conteudo="${conteudo}", biblio="${biblio}",presenca=${presenca}\
		 WHERE idsumario=${id};`

		const results = await DB.Update(sql)
		return results
	}

	static PostSumario =  async (conteudo, biblio,presenca) => {
		const sql = `INSERT INTO sumario (conteudo, biblio, presenca) VALUES ("${conteudo}", "${biblio}", ${presenca});`

		const results = await DB.Insert(sql)
		return results
	}

	// ------------ Disciplina DB connections methods --------------
	static GetDisciplinas =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from disciplina WHERE idsumario=${id}`
		}	
		else{
			sql = `select * from disciplina`
		}
			
		const results = await DB.Select(sql)
		return results
	}

}

module.exports = Regsumar