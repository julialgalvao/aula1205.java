//RETORNANDO A DATA
let horas = new Date()
document.write(horas.getHours());
document.write("<br><br>")

//RETORNANDO OS MINUTOS
let minutos = new Date()
document.write(minutos.getMinutes());
document.write("<br><br>")

//RETORNANDO SEGUNDOS
let segundos = new Date()
document.write(segundos.getSeconds());
document.write("<br><br>")

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