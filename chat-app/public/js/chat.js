const socket = io();
const sendButton = document.querySelector("#send-button");
const chatInput = document.querySelector("#chat-input");

socket.on("onUserJoined", msg => {
    console.log(msg);
});

socket.on("sendMessage", msg => {
    console.log(msg);
});

sendButton.addEventListener("click", () => {
    const msg = chatInput.value;
    chatInput.value = "";

    socket.emit("onSendMessage", msg);
});
