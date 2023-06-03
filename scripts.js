let messageBox = document.getElementById('message');
let submitBtn = document.getElementById('submit');
let statusMessage = document.getElementById('statusMessage');
let display = document.getElementById('display');

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        displayMessage();
    }
});

submitBtn.addEventListener('click', displayMessage);

function displayMessage() {
    if (messageBox.value) {
        display.innerHTML = messageBox.value;
        messageBox.value = '';
        submitBtn.innerHTML = 'Sent Successfully'
        setInterval(() => {
            display.innerHTML = '';
            submitBtn.innerHTML = 'Display'
            messageBox.focus();
        }, 2000);
    } else{
        messageBox.focus();
        statusMessage.innerHTML = 'Enter some Message...'
        setInterval(() =>{
            statusMessage.innerHTML = 'Last Message delivered...!'
        }, 2000)
    }
}