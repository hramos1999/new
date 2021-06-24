const DB = require('./db')

class Regsumar {
	// ------------ Docente DB connections methods --------------
    static GetDocentes =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from docente WHERE idDocente=${id}`
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

	static PutSumario =  async (id,conteudo, biblio,presenca, idaula) => {
		
		const sql = `UPDATE sumario SET conteudo="${conteudo}", biblio="${biblio}",presenca=${presenca},idaula=${idaula}
		 WHERE idsumario=${id};`
		// const sql1 = 

		const results = await DB.Update(sql)
		return results
	}

	static PostSumario =  async (conteudo, biblio,presenca) => {
		const sql = `INSERT INTO sumario (conteudo, biblio, presenca) VALUES ("${conteudo}", "${biblio}", ${presenca});`		

		const results = await DB.Insert(sql);

		return results
	}

	// ------------ Disciplina DB connections methods --------------
	static GetDisciplinas =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from disciplina WHERE id=${id}`
		}	
		else{
			sql = `select * from disciplina`
		}
			
		const results = await DB.Select(sql)
		return results
	}

	// ------------ Class DB connections methods --------------
	static GetClass =  async (id=null) => {
		let sql;
		if(id !==null){
			sql = `select * from aula WHERE idaula=${id}`
		}	
		else{
			sql = `select * from aula`
		}
			
		const results = await DB.Select(sql)
		return results
	}

	static PostClass =  async (numero,diaSemana, local, duracao,disciplina) => {		
		const sql = `INSERT INTO aula (numero, diaSemana, hora, local, duracao, data, disciplina) VALUES 
		(${numero}, "${diaSemana}", CURRENT_TIME(), "${local}", "${duracao}",now(), ${disciplina});`

		const results = await DB.Insert(sql);

		return results
	}

	static DeleteClass =  async (id) => {
		const sql = `DELETE FROM aula WHERE idaula=${id}`

		const results = await DB.Delete(sql)
		return results
	}

	static PutClass =  async (id,numero,diaSemana, local, duracao,disciplina) => {
		
		const sql = `UPDATE aula SET numero=${numero},diaSemana="${diaSemana}", local="${local}",
		duracao="${duracao}",disciplina=${disciplina} WHERE idaula=${id};`

		const results = await DB.Update(sql)
		return results
	}

	// ------------- Get a relation between tables sumario, aula, disciplina ------------- 
	static GetSumarioClassDisciplina =  async (id=null) => {
		const sql = `SELECT * FROM aula_sumario_table;`;

		const results = await DB.Select(sql);
		return results;
	}

}

module.exports = Regsumar