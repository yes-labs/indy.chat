'use strict';

async function joinSubmitted(e) {
  e.preventDefault();
  const email = document.querySelector('input[type=email]').value;
  const reply = await joinSlack(email);
  if (reply.ok) {
    const fieldset = document.querySelector('#join fieldset');
    const success = document.querySelector('#success');
    fieldset.disabled = 'disabled';
    success.hidden = false;
  } else {
    alert('Sorry! something went wrong and I havent done proper' +
          ' error handling yet');
    email.value = '';
  }
}

async function joinSlack(email) {
  const rawResponse = await fetch('/join', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  });
  return rawResponse.json();
}

document.getElementById('join')
  .addEventListener('submit', joinSubmitted);
