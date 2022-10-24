const express = require('express')
const app = express()

app.get('/receber', (req, res) => {
    res.send(`recebido`)
})

app.post('/enviando', (req, res) => {
    res.send(`enviado`)
})

app.put('/atualizando', (req, res) => {
    res.send(`atualizado`)
})

app.delete('/deletando', (req, res) => {
    res.send(`deletando`)
})

app.listen(8080, () => {
    console.log(`rodando na porta 8080`)
})