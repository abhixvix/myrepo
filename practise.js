// //  git add practise.js
// //  git commit -m added practise.js


// // let str = "Hello";
// // console.log(str.length);

// // let str = "JavaScript";
// // console.log(str.slice(0, 4)); 

// let s = "JavaScript";
// b=s.slice(2,4);
// console.log(b)

// let str = "apple,banana,cherry";
// let fruits = str.split(",");
// console.log(fruits); 


// let name = "John";
// let message = `Hello, ${name}!`;
// console.log(message); 
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());


// let str = "JavaScript";
// for (let char of str) {
//   console.log(char); 
// }

// document.getElementById("send-btn").addEventListener("click", sendMessage);

// function sendMessage() {
//   const userInput = document.getElementById("user-input");
//   const chatWindow = document.getElementById("chat-window");
//   const userMessage = userInput.value.trim();

// if (userMessage) {
//     // Display user message
//     const userMsgElement = document.createElement("div");
//     userMsgElement.className = "chat-message user-message";
//     userMsgElement.textContent = userMessage;
//     chatWindow.appendChild(userMsgElement);


 // // Display bot response
 //    const botMsgElement = document.createElement("div");
 //    botMsgElement.className = "chat-message bot-message";
 //    botMsgElement.textContent = getBotResponse(userMessage);
 //    chatWindow.appendChild(botMsgElement);

 // Scroll to the latest message
    chatWindow.scrollTop = chatWindow.scrollHeight;

//     // Clear the input field
//     userInput.value = "";
//   }
// }

// function getBotResponse(userMessage) {
//   // Placeholder bot response logic
//   return "I'm a simple bot. You said: " + userMessage;
// }
