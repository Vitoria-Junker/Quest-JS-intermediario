const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

 form.addEventListener('submit', (event) =>{
        event.preventDefault();

        const inputs = document.querySelectorAll('.input');
        
        if (formValidate()) {
            inputs.forEach(function(input){
                console.log(input.value);
            }) 
        }
 });

function formValidate(){
    if(
        nameValidate() &&
        emailValidate() &&
        telefoneValidate() &&
        mensagemValidate()
    ){
        return true;
    }
    return false;
}

function setError(index){
   campos[index].style.border = '2px solid #F52E2E';
   spans[index].style.display ='block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display ='none';
}

function nameValidate(){
 if (campos[0].value.length < 3){
    setError(0);
    return false;
 }

    removeError(0);
    return true;
}

function emailValidate(){
    const emailRejex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailRejex.test(campos[1].value)){
        removeError(1);
        return true;
    }

    setError(1);
    return false;
}

function telefoneValidate(){
    if (campos[2].value.length < 9){
        setError(2);
        return false;
    }

    removeError(2);
    return true;
}

function mensagemValidate(){
    if (campos[3].value.length < 10){
        setError(3);
        return false;    
    }

    removeError(3);
    return true;
}


