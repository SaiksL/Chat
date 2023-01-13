const apiKey = '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';
const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');
const chatSubmit = document.getElementById('chat-submit');

chatSubmit.addEventListener('click', function() {
  sendMessage(chatInput.value);
});

function sendMessage(message) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  });
  
  const body = JSON.stringify({
    prompt: message,
    temperature: 0.5
  });
  
  const options = {
    method: 'POST',
    headers,
    body
  };
  
  fetch('https://api.openai.com/v1/engines/davinci-codex/completions', options)
    .then(response => response.json())
    .then(data => {
      chatOutput.innerHTML += `<p>${data.choices[0].text}</p>`;
      chatInput.value = '';
    })
    .catch(error => console.log(error));
}