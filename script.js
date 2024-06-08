const dadosCadastro = {
    nome: "Exemplo",
    email: "exemplo@example.com",
    senha: "senha123"
};

fetch('https://fiap-seasweep-backend.onrender.com/api/cadastro', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosCadastro),
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
    }
    return response.json();
})
.then(data => {
    console.log('Cadastro realizado com sucesso:', data);
})
.catch(error => {
    console.error('Erro ao cadastrar usuário:', error.message);
});
