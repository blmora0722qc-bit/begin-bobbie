function hello(){
    alert("Bobbie love lory 🎉");
}function darkMode(){

    document.body.classList.toggle("dark");

}function sendMessage(){

    let input = document.getElementById("userInput");
    let chatbox = document.getElementById("chatbox");

    let message = input.value;

    if(message == ""){
        return;
    }


    chatbox.innerHTML += 
    "<div class='user-msg'>You: " + message + "</div>";


    let reply = "Hindi ko pa alam ang sagot na yan. 🤖";


    let text = message.toLowerCase();


    if(text.includes("hello")){
        reply = "Hello! Kumusta? 👋";
    }

    else if(text.includes("name")){
        reply = "Ang website na ito ay Bobbie Portfolio 🚀";
    }

    else if(text.includes("skills")){
        reply = "Ang skills ko ay HTML, CSS, at JavaScript.";
    }

    else if(text.includes("projects")){
        reply = "May projects ako tungkol sa websites at AI.";
    }

    else if(text.includes("contact")){
        reply = "Pumunta sa Contact Me section para mag-message.";
    }


    chatbox.innerHTML += 
    "<div class='ai-msg'>AI: " + reply + "</div>";


    input.value = "";

}function sendMessage(){

    let input = document.getElementById("userInput");
    let chatbox = document.getElementById("chatbox");

    let message = input.value;

    if(message == ""){
        return;
    }


    chatbox.innerHTML += 
    "<div class='user-msg'>You: " + message + "</div>";


    let reply = "Hindi ko pa alam ang sagot na yan. 🤖";


    let text = message.toLowerCase();


    if(text.includes("hello")){
        reply = "Hello! Kumusta? 👋";
    }

    else if(text.includes("name")){
        reply = "Ang website na ito ay Bobbie Portfolio 🚀";
    }

    else if(text.includes("skills")){
        reply = "Ang skills ko ay HTML, CSS, at JavaScript.";
    }

    else if(text.includes("projects")){
        reply = "May projects ako tungkol sa websites at AI.";
    }

    else if(text.includes("contact")){
        reply = "Pumunta sa Contact Me section para mag-message.";
    }


    chatbox.innerHTML += 
    "<div class='ai-msg'>AI: " + reply + "</div>";


    input.value = "";

}