fetch('http://localhost:3000/pessoas') // Buscando os dados que estão no localhost na porta 3000
    .then(resposta => resposta.json()).then(dados => {


    const corpoTabela = document.getElementById('corpo-tabela') // Localizando a tag <tb> no html

    // Loop ForEach, a cada iteração a vairável "pessoa" corresponderá à um objeto {} dentro de dados.json
    dados.forEach(pessoa => { 
        // Criando elementos para a exibição na tabela, estes elementos são armazenados internamente, mas não são renderizados
        var tr = document.createElement('tr')
        var tdID = document.createElement('td')
        var tdNome = document.createElement('td')
        var tdIdade = document.createElement('td')

        // Para cada elemento, atribuímos os dados da pessoa que está armazenada na variável
        tdID.innerText = pessoa.id
        tdNome.innerText = pessoa.nome
        tdIdade.innerText = pessoa.idade

        // Adicionando as tags <td> para o <tr>
        tr.appendChild(tdID)
        tr.appendChild(tdNome)
        tr.appendChild(tdIdade)

        // Finalmente, renderizamos a tabela contendo as linhas que foram tiradas dos dados.json
        corpoTabela.appendChild(tr)
    });
})