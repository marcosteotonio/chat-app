const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000
let app = express()
let server = http.createServer(app) //criando servidor
let io  = socketIO(server) // adicionando socket.io ao servidor


app.use(express.static(publicPath)) // Middleware acesso a pasta publica

//Escopo de connection Socket.IO
io.on('connection', (socket) => {
	console.log('Servidor Conectado')

	socket.on('disconnect', () =>{
		console.log('Usuario desconectado')
	})

	socket.emit('newEmail',{
		from : "d.sis06@gmail.com",
		body: "Deu certo KKKKK"
	})

	socket.on('createEmail', (dados)=>{
		console.log(dados)
	})


})
// quando usuario desconectar


server.listen(port, () => {
	console.log(`Server is up on port ${port}`)
})