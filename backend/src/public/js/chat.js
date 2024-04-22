const socket = io()
const urlPath = window.location.pathname;
const proffessionalName = urlPath.split('/').pop()
const userElement = document.getElementById("usuario");
const user2 = userElement.textContent.trim();
document.getElementById("bs").addEventListener("click", (e) => {
    e.preventDefault()
    const messageInput = document.getElementById("message")
    const message = messageInput.value
    messageInput.value = ""
    const arr = {message: message, proffessionalName: proffessionalName, user: user2}
    
    socket.emit("chatMessage", arr)
})

socket.on("message", (data) => {
    const chatMessages = document.getElementById("chat-messages")
    const errorP = document.getElementById('error')
    const messageElement = document.createElement("div")
    errorP.innerHTML = ''
    console.log(data);
    messageElement.innerHTML = `<strong>${data.username}:</strong> ${data.message}`
    chatMessages.appendChild(messageElement)
})

socket.on("error", () => {
    const errorP = document.getElementById('error')
    errorP.innerHTML = 'Can´t send empty message'
})

