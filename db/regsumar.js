const DB = require('./db')

class Regsumar {
    static GetDocentes =  async () => {
		const sql = `select * from Docente`

		const results = await DB.Select(sql)
		return results
	}
	static GetCursos =  async () => {
		const sql = `select * from Curso`

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

	// UPDATE curso SET validate=$1, dataRegistro=$2, titulo=$3, subTopicos=$4 WHERE id=$5
	static PostCursos =  async ( nome, sigla, descript, coordenador) => {
		const sql = `INSERT INTO Curso (nome, sigla, descript, coordenador ) VALUES ("${nome}", "${sigla}", "${descript}", "${coordenador}");`

		const results = await DB.Insert(sql)
		return results
	}
}

module.exports = Regsumar