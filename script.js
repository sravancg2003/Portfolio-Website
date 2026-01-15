const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Message = document.getElementById('Message');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) =>{
    let messages = []
    if(Name.value === '' || Name.value == null){
        messages.push('Name is required')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    e.preventDefault()
})