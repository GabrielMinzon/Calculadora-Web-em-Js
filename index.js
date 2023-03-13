const numero1 = document.querySelector("#n1");
const numero2 = document.querySelector("#n2");
const btn = document.querySelectorAll('.btn');
const resultado = document.querySelector(".result")


btn.forEach(element => {
    element.addEventListener("click", ()=>{
        operacoes(parseInt(element.value), parseFloat(numero1.value), parseFloat(numero2.value));
    });
});

function operacoes (operacao, number1, number2){
    switch(operacao){
        case 1:
            resultado.innerHTML = number1 + number2;
            break
        case 2:
            resultado.innerHTML = number1 - number2;
            break
        case 3:
            resultado.innerHTML = number1 * number2;
            break
        case 4:
            resultado.innerHTML = number1 / number2;
    }
}
