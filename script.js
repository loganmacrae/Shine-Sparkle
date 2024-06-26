document.getElementById('chat-button').addEventListener('click', function() {
    document.getElementById('chatbox').classList.toggle('hidden');
});

document.getElementById('send-button').addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    if (chatInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = 'You: ' + chatInput.value;
        chatMessages.appendChild(message);
        chatInput.value = '';

        // Simulate a response from a live agent
        setTimeout(() => {
            const response = document.createElement('div');
            response.textContent = 'Live Agent: How can I help you?';
            chatMessages.appendChild(response);
        }, 1000);
    } 

    // Selecting the html class and  
    // convert it to an object

    const sharebtn =
        document.querySelector('.sharebtn')

    // Creating a bool variable for changing
    // the image of share button 
    let bool = 0

    // Adding an event listener
    sharebtn.addEventListener('click', () => {

        // As we clicked the mouse over
        // the share button the bool value.
        //  get flipped and then working of
        // if-else loop get starts
        bool = !bool

        if (bool == 0) {
            sharebtn.innerHTML =
                '<i class="far fa-share-square"></i>'
        } else {
            sharebtn.innerHTML =
                '<i class="fas fa-times"></i>'
        }
    })

});
