const DB = require('./db')

class Regsumar {


    static GetDocentes = async() => {
        const sql = `select * from docente`
        const results = await DB.Select(sql)
        return results
    }

    static GetCurso = async() => {
        const sql = `select * from curso`

        const results = await DB.Select(sql)
        return results
    }

    static GetDisciplinas = async() => {
        const sql = `select * from disciplina`

        const results = await DB.Select(sql)
        return results
    }

    static GetSumario = async() => {
        const sql = `select * from sumario`

        const results = await DB.Select(sql)
        return results
    }

    static PostSumario = async(conteudo, biblio, presenca) => {
        const sql = `INSERT INTO sumario (conteudo, biblio, presenca) VALUES ("${conteudo}", "${biblio}", ${presenca});`
        return await DB.Select(sql)
    }

    static PutSumario = async(id, conteudo, biblio, presenca) => {
        const sql = `UPDATE sumario SET conteudo="${conteudo}", biblio="${biblio}", presenca=${presenca}
                    WHERE idsumario="${id}";`
        return await DB.Select(sql)
    }

    static DeleteSumario = async(id) => {
        const sql = `DELETE FROM sumario WHERE idsumario="${id}";`
        return await DB.Select(sql)
    }


}

module.exports = Regsumar