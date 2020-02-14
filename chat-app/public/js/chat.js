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
    chatInput.focus();
    if (!msg) return;

    sendButton.setAttribute("disabled", "disabled");

    socket.emit("onSendMessage", msg, error => {
        sendButton.removeAttribute("disabled");
        if (error) console.log(error);
    });
});

// Location Sharing
// (TODO later, maybe (seems unnecessary to me right now))

// document
//     .querySelector("#share-location-button")
//     .addEventListener("click", () => {
//         if (!navigator.geolocation) {
//             return alert("Geolocation is not supported in this browser.");
//         }
//         navigator.geolocation.getCurrentPosition(position => {
//             console.log(position);
//         });
//     });
