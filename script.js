const trigger = document.getElementById('pop-out-btn');
const input = document.getElementById('input-field');
const button = document.getElementById('send-button');
const botContent = document.getElementById('bot-chat');
const userContent = document.getElementById('user-chat');


function displayChat() {
    display
}

function rotateTrigger() {}

function createBotChat(message) {
    // <div class="received-chats">
    // <div class="received-chats-img">
    //     <img src="./assets/2.svg" alt="Bot display picture">
    // </div>
    //     <div class="received-msg-inbox">
    //         <p id="bot-chat"></p>
    //     </div>
    //     <span class="status"></span>
    // </div>
    const chatBotDiv = document.createElement("div");
    chatBotDiv.classList.add("received-chats"); 
    const subBotDiv = document.createElement("div");
    subBotDiv.classList.add("received-chats-img");
    chatBotDiv.appendChild(subBotDiv);
    const imgTag = document.createElement("img");
    imgTag.src = "./assets/2.svg";
    imgTag.alt = "Bot Display Picture";
    subBotDiv.appendChild(imgTag);
    const msgInboxDiv = document.createElement("div");
    msgInboxDiv.classList.add("received-msg-inbox");
    chatBotDiv.appendChild(msgInboxDiv);
    const msg = document.createElement("p");
    msg.innerText = message;
    msgInboxDiv.appendChild(msg);
    botContent.appendChild(chatBotDiv);
}
    
   

function createUserChat(message) {}
    // <div class="outgoing-chats">
    //     <div class="outgoing-msg">
    //         <div class="outgoing-msg-inbox">
    //             <p id="user-chat"></p>
    //         </div>
    //         <span class="status"></span>
    //     </div>
    //     <div class="outgoing-chats-img">
    //         <img src="./assets/IMG_3897.jpg" alt="User display picture">
    //     </div>
    // </div>
    const chatUserDiv = document.createElement("div");

const aiMessages = ["hello!", "how can i help you?", "what do you need?", "Ah, I see. How can I assist you today?", "I'm here to help! What do you need?"];
let count = 0;
let lastUser = "ChatBot"

function displayMessage() {}


trigger.addEventListener("", displayChat)
trigger.addEventListener("", rotateTrigger)
button.addEventListener("", displayMessage)