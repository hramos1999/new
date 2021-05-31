CREATE DATABASE regsumar2021;

CREATE TABLE Curso(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    sigla VARCHAR(30),
    descript VARCHAR(255),
    coordenador VARCHAR(255)
);

CREATE TABLE Docente(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    grau VARCHAR(255),
    email VARCHAR(255),
    passwd VARCHAR(255)
);

CREATE TABLE Turma(
    id SERIAL PRIMARY KEY,
    id_docente integer,
    id_curso integer,
    ano integer,
    FOREIGN KEY (id_curso) REFERENCES Curso (id),
    FOREIGN KEY (id_docente) REFERENCES Docente (id)
);

CREATE TABLE Disciplina(
    id SERIAL PRIMARY KEY,
    id_turma integer,
    nome VARCHAR(255),
    sigla VARCHAR(30),
    descript VARCHAR(255),
    FOREIGN KEY (id_turma) REFERENCES Turma (id)
);
CREATE TABLE Sumario(
    id SERIAL PRIMARY KEY,
    id_disciplina integer,
    nrAula SERIAL,
    validate BOOLEAN,
    dataRegistro DATE,
    titulo VARCHAR(255),
    subTopicos VARCHAR(255),
    FOREIGN KEY (id_disciplina) REFERENCES Disciplina (id)
);
