const socket = io()
const urlPath = window.location.pathname;
const proffessionalName = urlPath.split('/').pop()


document.getElementById("chat-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const messageInput = document.getElementById("message")
    const message = messageInput.value
    messageInput.value = ""
    const arr = {message: message, proffessionalName: proffessionalName}

    socket.emit("chatMessage", arr)
})

socket.on("message", (data) => {
    const chatMessages = document.getElementById("chat-messages")
    const errorP = document.getElementById('error')
    const messageElement = document.createElement("div")
    errorP.innerHTML = ''
    messageElement.innerHTML = `<strong>${data.username}:</strong> ${data.message}`
    chatMessages.appendChild(messageElement)
})

socket.on("error", () => {
    const errorP = document.getElementById('error')
    errorP.innerHTML = 'Can´t send empty message'
})

document.getElementById("username-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const usernameInput = document.getElementById("username")
    const username = usernameInput.value
    const arr = {username: username, proffessionalName: proffessionalName}
    socket.emit("newUser", arr)

    document.getElementById("username-form").style.display = "none"
    document.getElementById("chat-form").style.display = "block"
})