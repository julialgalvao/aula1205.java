
//criando a variavel
let tmp
//criando a funçao tempo
function tempo (){
    //declarando as variaveis
    let relogio = document.querySelector("#main")
    let hora= new Date()
    relogio.innerHTML = (hora.toLocaleDateString()).slice(-8)
}
//chamando o queryselector add um evento de click e chamando uma arrow function
document.querySelector("#ligar").addEventListener('click', ()=>{
tmp = setInterval(tempo,1000)
})
document.querySelector("#desligar").addEventListener('click',()=>{
    clearInterval(tmp)
})