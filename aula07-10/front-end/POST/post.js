// Enviar os dados utilizando o método POST - CREATE
function enviarDados(){
    console.log("enviar")
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value

    // Utilizando a função Fetch para buscar as informções do nosso local host.
    fetch(`http://localhost:3000/pessoas`, {
        method: 'POST', // Método HTTP Post
        headers: {
            'Content-Type': 'application/json' // Tipo de conteúdo a ser enviado, no caso JSON (Padrão)
        },
        body: JSON.stringify({nome: nome, idade: idade})
    }).then(resposta => resposta.JSON) // Converte a resposta para JSON
}