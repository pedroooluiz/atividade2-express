const express = require('express')
// agora eu tenho uma instancio do express e a partir disso eu construo a minha api

const app = express()

//req são coisas prontas que eu já vou receber e res é a minha resposta
app.get('/', (req, res)=>{
    res.send("Olá")
})
//eu quero recebe um método get, no caminho / sem nada

//isso aqui define um caminho para a minha aplicação"
app.get('/hello', (req, res)=>{
    res.send("hello, world")
})

app.get('/nome', (req, res)=>{
    res.send("Pedro Luiz Rodrigues")
})

app.get('/exercicio1', (req, res)=>{
    const nota1 = 10
    const nota2 = 4
    const media = (nota1+nota2)/2
    res.media(resposta)
})

app.get('/namorada', (req, res)=>{
    res.send("A minha namorada, e futura esposa, é a mulher mais linda desse mundo!!")
}) 

app.get('/aluno/:matricula/:nome/:curso', (req, res)=>{
    res.send(`Sua matrícula é: ${req.params.matricula}`)
}) 

app.get('/aluno/:nota1/:nota2/:nota3/:nota4', (req, res)=>{
    let notA1 = Number(req.params.nota1)
    let notA2 = Number(req.params.nota2)
    let notA3 = Number(req.params.nota3)
    let notA4 = Number(req.params.nota4)

    let media = (notA1+notA2+notA3+notA4)/4

    res.send(`Sua média é: ${media}`)
}) 

// essa parte é o final da api, nela contem a porta que é 3000 e uma arrow function, ela passa uma coisa pra finalizar
app.listen(3000, () => {
    console.log("api iniciada, rodando em http://localhost:3000")
})