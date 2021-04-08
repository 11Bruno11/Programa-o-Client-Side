document.querySelector("form").addEventListener("submit", mostrarNome => {

    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    
    let contador = 0
    
    //Validando Nome
    if(nome == "") {
        document.querySelector("#nomse").innerHTML = "O campo Nome é obrigatório!"        
        contador++        
    }

    //Validando Email
    if (email.indexOf('@') == -1) {
        document.querySelector("#emails").innerHTML = "E-mail inválido"
        contador++
    }
    
    if (contador > 0 ) {        
        mostrarNome.preventDefault();        
        contador++
    }
})