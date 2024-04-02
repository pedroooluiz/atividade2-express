const express = require('express')
// agora eu tenho uma instancio do express e a partir disso eu construo a minha api

const app = express()

//req são coisas prontas que eu já vou receber e res é a minha resposta
app.get('/', (req, res) => {
    res.send("Olá")
})
//eu quero recebe um método get, no caminho / sem nada

//isso aqui define um caminho para a minha aplicação"
app.get('/hello', (req, res) => {
    res.send("hello, world")
})

app.get('/nome', (req, res) => {
    res.send("Pedro Luiz Rodrigues")
})

// EXERCÍCIO 2 --------------------------------------------------------------------------------------------------------------------

/*
1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
*/
app.post('/questao1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2

    const resposta = {
        peca: corpo.peca,
        estoqueMedio: estoqueMedio
    }

    res.json(resposta)
})

// --------------------------------------------------------------------------------------------------------------------------------

/*
2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que receba o 
salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.
*/
app.post('/questao2', (req, res) => {

    let { salarioFuncionario } = req.body

    let salarioConvertido = Number(salarioFuncionario);

    if (salarioConvertido <= 1000) {
        let salarioReajustado = salarioConvertido + (salarioConvertido * 0.3)
        res.send(`Salário corrigido é: R$ ${salarioReajustado.toFixed(2)}`)
    }
    else {
        res.send('O salário é maior do que R$1000.00, não haverá reajuste de 30%.');
    }

})

// --------------------------------------------------------------------------------------------------------------------------------

/*
3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que 
ganha sobre o total de vendas. Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total.
*/
app.post('/questao3', (req, res) => {

    let { nome, salarioFixo, totalVendas, percentual } = req.body

    salarioFixo = Number(salarioFixo)
    totalVendas = Number(totalVendas)
    percentual = Number(percentual)

    let salarioTotal = salarioFixo + (totalVendas * percentual / 100)

    res.send(`
    Nome do vendedor: ${nome} <br/>
    Salário total: ${salarioTotal}
    `)
})

// --------------------------------------------------------------------------------------------------------------------------------

/*
4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). 
O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: 
A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
*/
app.post('/questao4', (req, res) => {

    let { nomePiloto, distanciaPercorrida, tempo } = req.body
    distanciaPercorrida = Number(distanciaPercorrida)
    tempo = Number(tempo)

    let velocidadeMedia = distanciaPercorrida / tempo

    res.send(`A velocidade média do ${nomePiloto} foi ${velocidadeMedia} km/h.`)


})

// --------------------------------------------------------------------------------------------------------------------------------

/*
5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30%
*/
app.post('/questao5', (req, res) => {

    let { salario } = req.body

    salario = Number(salario)

    if (salario >= 2000) {
        salario *= 1.3; // Aumento de 30%
        res.send(`O salário corrigido, em 30%, foi para: R$ ${salario.toFixed(2)}`)
    } else {
        salario *= 1.5; // Aumento de 50%
        res.send(`O salário corrigido, em 50%, foi para: R$ ${salario.toFixed(2)}`)
    }
})

// --------------------------------------------------------------------------------------------------------------------------------

/*
6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7
*/

app.post('/questao6', (req, res) => {

    let { altura, sexo } = req.body
    let pesoIdeal;

    altura = Number(altura)
    sexo = sexo.toLowerCase()

    if (sexo === 'h') {
        pesoIdeal = (72.7 * altura) - 58
    }
    else {
        pesoIdeal = (62.1 * altura) - 44.7
    }

    res.send(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} Kg`)

})

// --------------------------------------------------------------------------------------------------------------------------------

/* 
7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
*/

app.post('/questao7', (req, res) => {
    let listaProdutos = []

    req.body.forEach(produto => {
        listaProdutos.push(produto)
    });

    let maiorPrecoLido = 0
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPrecoLido) {
            maiorPrecoLido = produto.preco
        }
    })

    let soma = 0
    console.log("soma ", soma)
    listaProdutos.forEach(produto => {
        console.log("produto preco ", produto.preco)
        soma = soma + produto.preco
        console.log("soma ", soma)
    })

    let media = soma / listaProdutos.length

    res.json({
        maiorPrecoLido: maiorPrecoLido,
        media: media.toFixed(2)
    })
})

// --------------------------------------------------------------------------------------------------------------------------------

/* 
8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. 
Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, e
le deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10%
*/

app.post('/questao8', (req, res) => {

})

// --------------------------------------------------------------------------------------------------------------------------------

/* 
9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, 
o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. 
Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação.
*/

app.post('/questao9', (req, res) => {

})


app.get('/aluno/:nota1/:nota2/:nota3/:nota4', (req, res) => {
    let notA1 = Number(req.params.nota1)
    let notA2 = Number(req.params.nota2)
    let notA3 = Number(req.params.nota3)
    let notA4 = Number(req.params.nota4)

    let media = (notA1 + notA2 + notA3 + notA4) / 4

    res.send(`Sua média é: ${media}`)
})

// essa parte é o final da api, nela contem a porta que é 3000 e uma arrow function, ela passa uma coisa pra finalizar
app.listen(3000, () => {
    console.log("api iniciada, rodando em http://localhost:3000")
})
