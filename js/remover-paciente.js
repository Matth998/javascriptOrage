
//Remover paciente da tabela.
var tabela = document.querySelector("table");

    tabela.addEventListener("dblclick", function(event){

        var alvo = event.target;
        var paiAlvo = alvo.parentNode;

        paiAlvo.classList.add("fadeOut");
        
        //Fazer com que a função espere um tempo para remover as linhas.
        setTimeout(function(){

            paiAlvo.remove();

        }, 500)
        
    });
