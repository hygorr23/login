var btnlogin = document.querySelector("#login");
var btncadastro = document.querySelector("#cadastro");
var body = document.querySelector("body");

btnlogin.addEventListener("click", function(){
    body.className ="entrar-js";
})

btncadastro.addEventListener("click", function(){
    body.className ="cadastrar-js";
})