const express = require('express'); //Importa o Express

const app = express(); //Cria a aplicação
const PORT = 3000; //Define a porta do servidor

//Permite que o Express interprete requisições com dados em JSON
app.use(express.json()); //registra o middleware para interpretar JSON

//Armazena inicialmente os alunos em um array 
const alunos = [
    { id: 1, nome: 'Ana', curso: 'Computação'},
    { id: 2, nome: 'Pedro', curso: 'Sistemas de Informação'}
];

// Define o próximo ID disponível para novos alunos
let proximoId = 3;

// GET /alunos - Retorna todos os alunos
app.get('/alunos', (req, res) => {
    res.status(200).json(alunos);
})

// GET /alunos/id: - Retorna um aluno específico
app.get('/alunos/:id', (req, res) => {
    const id = Number(req.params.id); //Obtém o ID da URL

    const aluno = alunos.find(aluno => aluno.id === id);

    //Verifica se o aluno foi encontrado
    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado'});
    }

    res.status(200).json(aluno);
});

// POST /alunos - Cadastra um novo aluno
app.post('/alunos', (req, res) => {
    const { nome, curso } = req.body; //Obtém os dados enviados

    //Verifica se o nome e curso foram informados
    if (typeof nome !== 'string' || !nome.trim() ||
        typeof curso !== 'string' || !curso.trim()){
        return res.status(400).json({
            mensagem: 'Nome e curso são obrigatórios'
        });
    }

    //Criar o novo aluno com um ID único
    const novoAluno = {
        id: proximoId++,
        nome: nome.trim(),
        curso: curso.trim()
    };

    alunos.push(novoAluno); // Adiciona o aluno ao array

    res.status(201).json(novoAluno);
});

// PUT /alunos/:id - Atualizar um aluno existente
app.put('/alunos/:id', (req, res) => {
    const id = Number(req.params.id); //Obtém o ID da URL

    const aluno = alunos.find(aluno => aluno.id === id);

    //Verifica se o aluno existe
    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado'})
    }

     const { nome, curso} = req.body; // Obtém os novos dados

    //Exige nome e curso para realizar a atualização
    if (typeof nome !== 'string' || !nome.trim() ||
        typeof curso !== 'string' || !curso.trim()) {
        return res.status(400).json({
            mensagem: 'Nome e curso são obrigatórios'
        });
    }

    // Atualiza os dados do aluno encontrado
    aluno.nome = nome.trim();
    aluno.curso = curso.trim();

    res.status(200).json(aluno);
});

// DELETE /alunos/id: - Exclui um aluno
app.delete('/alunos/:id', (req, res) => {
    const id = Number(req.params.id); //Obtém o ID da URL

    const indice = alunos.findIndex(aluno => aluno.id === id)

    //Verifica se o aluno existe 
    if (indice === -1) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado'});
    }

    alunos.splice(indice, 1); //Remove o aluno do array 

    res.status(204).send(); //Confirma a exclusão sem corpo
});

//Inicia o servidor na porta definida
app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});

