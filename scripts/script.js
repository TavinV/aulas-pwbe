fetch('http://localhost:3000/produtos').then(resposta => resposta.json()).then(dados =>{
    console.log(dados)
})