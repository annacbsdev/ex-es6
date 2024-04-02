// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

const alunos = [
    { nome: 'Anna', nota: 9 },
    { nome: 'Claudia', nota: 5 },
    { nome: 'Victor', nota: 8 },
    { nome: 'André', nota: 6 },
    { nome: 'Lilian', nota: 4 },
    { nome: 'Lulu', nota: 7 },
    { nome: 'José', nota: 3 }
];

function retornaAlunosAprovados() {
    const notaMinima = 6;
    const alunosAprovados = alunos.filter(aluno => aluno.nota >= notaMinima);
    const listaDeAlunos = alunosAprovados.map((aluno) => aluno.nome)
    return listaDeAlunos
}

console.log(retornaAlunosAprovados())