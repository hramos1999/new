const DB = require('./db')

class Regsumar {
	// ------------ Docente DB connections methods --------------
    static GetDocentes =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from Docente WHERE id=${id}`
		}	
		else{
			sql = `select * from Docente`
		}
			
		const results = await DB.Select(sql)
		return results
	}

	// ------------ Curso DB connections methods --------------
	static GetCursos =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from Curso WHERE id=${id}`
		}	
		else{
			sql = `select * from Curso`
		}
		const results = await DB.Select(sql)
		return results
	}
	
	static DeleteCurso =  async (id) => {
		const sql = `DELETE FROM Curso WHERE id=${id}`

		const results = await DB.Delete(sql)
		return results
	}

	static PutCurso =  async (id,nome, sigla, descript, coordenador) => {
		const sql = `UPDATE Curso SET nome="${nome}", sigla="${sigla}", descript="${descript}", coordenador="${coordenador}" WHERE id=${id}`

		const results = await DB.Update(sql)
		return results
	}

	static PostCursos =  async ( nome, sigla, descript, coordenador) => {
		const sql = `INSERT INTO Curso (nome, sigla, descript, coordenador ) VALUES ("${nome}", "${sigla}", "${descript}", "${coordenador}");`

		const results = await DB.Insert(sql)
		return results
	}

	// ------------ Sumario DB connections methods --------------
	static GetSumarios =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from Sumario WHERE id=${id}`
		}	
		else{
			sql = `select * from Sumario`
		}
			
		const results = await DB.Select(sql)
		return results
	}

	static DeleteSumario =  async (id) => {
		const sql = `DELETE FROM Sumario WHERE id=${id}`

		const results = await DB.Delete(sql)
		return results
	}

	static PutSumario =  async (id,nrAula, validate, dataRegistro, titulo, subTopicos) => {
		const sql = `UPDATE Sumario SET nrAula=${nrAula}, validate=${validate}\
		, dataRegistro=${dataRegistro}, titulo="${titulo}", subTopicos="${subTopicos}" WHERE id=${id}`

		const results = await DB.Update(sql)
		return results
	}

	static PostSumario =  async (id_disciplina,nrAula, validate, dataRegistro, titulo, subTopicos) => {
		const sql = `INSERT INTO Sumario (nrAula, validate, dataRegistro, titulo, subTopicos) VALUES \
		(${nrAula}, ${validate}, ${dataRegistro}, "${titulo}", "${subTopicos}");`

		const results = await DB.Insert(sql)
		return results
	}

	// ------------ Disciplina DB connections methods --------------
	static GetDisciplinas =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from Disciplina WHERE id=${id}`
		}	
		else{
			sql = `select * from Disciplina`
		}
			
		const results = await DB.Select(sql)
		return results
	}

	static DeleteDisciplina =  async (id) => {
		const sql = `DELETE FROM Disciplina WHERE id=${id}`

		const results = await DB.Delete(sql)
		return results
	}

	static PostDisciplina =  async (nome, sigla, descript) => {
		const sql = `INSERT INTO Disciplina (nome, sigla, descript) VALUES ("${nome}"," ${sigla}", "${descript}")`

		const results = await DB.Insert(sql)
		return results
	}

	static PutDisciplina =  async (id,nome, sigla, descript) => {
		const sql = `UPDATE Disciplina SET nome="${nome}", sigla="${sigla}", descript="${descript}" WHERE id=${id}`

		const results = await DB.Update(sql)
		return results
	}

}

module.exports = Regsumar