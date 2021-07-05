let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let buttonElement = document.querySelector(".button");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEuro = 4.52 ;
let rateDolar = 3.72 ;

formElement.addEventListener("submit", (event)  => {
  event.preventDefault();


let amount =+amountElement.value;
let currency =currencyElement.value;

let = result;

switch (currency) {
  case "Euro":
    result = amount/rateEuro;
    break;
    
  case "Dolar":
    result = amount/rateDolar;
    break;
}

resultElement.innerHTML = `${amount.toFixed(2)} ${result.toFixed(2)} ${currency}`;

});
