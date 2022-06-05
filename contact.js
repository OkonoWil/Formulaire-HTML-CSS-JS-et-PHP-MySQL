
const in_name = document.getElementById('input_nom');
const in_email = document.getElementById('input_email');
const message = document.getElementById('textarea_message');
const select = document.getElementById('theme');
const autreOption = document.getElementById('autreoption')
const bt_submit = document.getElementById('ok')

let tailleMessage = false;
autreOption.classList.add('autreoption_hidden');
/*document.querySelector('#ok').addEventListener('click', (e) => {
    
    alert("Bonjour "+in_name.value+" votre email est : "+in_email.value);
    e.preventDefault()
    
})

/*let bt = document.querySelectorAll('button');
bt.forEach((item)=> {
    item.onclick = () => {
        presentation();
    }
})*/
bt_submit.addEventListener('click', (e) => {
    //let robot = 
    let str = `Bonjour ${in_name.value} votre email est : ${in_email.value}
Le thème de votre message est : ${select.value} ${autreOption.value}
Corps du message :
${message.value}`;
    if(window.confirm(str) && document.form_cv.robot.value === "Non" && message.value.length >= 5 && message.value.length <= 1000 ){

    }else{
        if(document.form_cv.robot.value === "Oui"){
            alert('Vous êtes un robot !!!');
        }
        document.getElementById('form_cv').reset();
        e.preventDefault();
    }
})

function presentation(){
    let str = "Bonjour "+in_name.value+" votre email est : "+in_email.value;
    alert(str);
}

message.addEventListener('keyup', () => {
    message.classList.remove("redColor", "greenColor");
    if(message.value.length < 5 || message.value.length > 1000){
        message.style.borderColor = "red";
        console.log('yes')
    }
    else{
        message.style.borderColor = "green";
        console.log('no')
    }
})
message.addEventListener('change', () =>{
    //message.style.borderColor = "rgb(118, 118, 118)";
    if(message.value.length < 5 ){
        alert('Message trop cour');
        tailleMessage = false;
    }
    else if ( message.value.length > 1000) {
        alert('Message trop long');
        tailleMessage = false;
    }
    else{
        tailleMessage = true;
    }
})
select.addEventListener('change', () =>{
    autreOption.classList.remove('autreoption_visible','autreoption_hidden')
    if(select.value === "Autre raison")
    {
        autreOption.classList.add('autreoption_visible');
    }
    else{
        autreOption.classList.add('autreoption_hidden');
    }
})


