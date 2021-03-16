setTimeout(() =>{
    document.querySelector('.wellcome').style.zIndex = 1
}, 3200)

document.querySelector('.bt-start').addEventListener('click', () =>{
    const name = document.getElementById('name').value
    if (name === '' || name === null){
        document.getElementById('name').style.border = '1px solid red'
        document.querySelector('.alert').style.color = 'red'
        localStorage.clear()   
    }else{
        document.getElementById('name').style.border = '1px solid black'
        document.querySelector('.alert').style.color = 'transparent'
        localStorage.setItem('userName', name)
        location.href = 'http://localhost:3000/app/tasks'   
    }   
})

