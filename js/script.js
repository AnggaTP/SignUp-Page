const submit = document.querySelector('[submit-btn]')
const errormsg = document.querySelector('.confirmtext')
const password = document.querySelector('#password')
const confirm = document.querySelector('#confirmpassword')

// submit.addEventListener('click', ()=>{
//     if(password.value !== confirm.value){
//         errormsg.textContent = `*Password doesn't match`
//         return
//     }
// })

confirm.onfocus = function(){
    if(password.value !== confirm.value){
        errormsg.textContent = `*Password doesn't match`
    }
}