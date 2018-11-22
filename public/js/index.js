var socket = io()
//Ouvindo quando servidor estiver conectado
socket.on('connect', () => {
	console.log('Servidor connectado')
	socket.emit('createMessage',{
		to: 'joe@exemple.com',
		text: 'envio e-mail'
	})

	socket.on('newMessage', (message) => {
		console.log(message)
	})
})
//Ouvindo quando servidor for desconectado
socket.on('disconnect', () => {
	console.log('Servidor disconectado')
})







