let details = {};
document.getElementById('set-name').addEventListener('click', function(){
    setText('name', 'name-input')
    // console.log('task')
})


document.getElementById('del-name').addEventListener('click', function(){
    delText('name')
    // console.log('task')
})

// email
document.getElementById('set-email').addEventListener('click', function(){
    setText('email', 'email-input')
    // console.log('task')
})


document.getElementById('delete-email').addEventListener('click', function(){
    delText('email')
    // console.log('task')
})


// Message
document.getElementById('set-message').addEventListener('click', function(){
    setText('message', "message-input")
    // console.log('task')
})


document.getElementById('del-message').addEventListener('click', function(){
    delText('message')
    // console.log('task')
})





// common
const setText = (name, id)=>{
    const input = document.getElementById(id).value
    localStorage.setItem(name, input)
    if(id === 'name-input'){
        details.name = input;
        console.log(details)
    }
    else if(id === 'email-input'){
        details.email = input;
        console.log(details)
    }
    else{
        details.message = input;
    }
}

const delText = (name)=>{
    localStorage.removeItem(name)
}


document.getElementById('clear').addEventListener('click', function(){
    console.log('hi')
    localStorage.clear()
})
document.getElementById('make').addEventListener('click', function(){
    const detastString = JSON.stringify(details)
    localStorage.setItem('detail', detastString)
})

console.log(details)