var lista_de_convidados=[];
var remove_virgula;

function enviar_nome(){
    var nome=document.getElementById("nome").value;
    lista_de_convidados.push(nome);
    document.getElementById("nomes").innerHTML=lista_de_convidados;
}
function mostrar_nomes(){
    remove_virgula=lista_de_convidados.join("-");
    document.getElementById("lista_de_nomes").innerHTML=remove_virgula;
}
function arrumar(){
    lista_de_convidados.sort();
    remove_virgula=lista_de_convidados.join("-");
    document.getElementById("arrumar_nomes").innerHTML=remove_virgula;
}
function pesquisar(){
    var nome_pesquisado=document.getElementById("pesquisar_nome").value;
    var encontrado=0;
    for(var indice=0; indice<lista_de_convidados.length; indice++){
        if(nome_pesquisado==lista_de_convidados[indice]){
            encontrado=encontrado+1;
        }
    }
    document.getElementById("mostrar_nome_pequisado").innerHTML="nome pesquisado foi encontrado "+encontrado+" vez(es)";
}