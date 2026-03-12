const USD = 5.22;
const EUR = 6.01;
const GBP = 6.97;

const form = document.getElementById('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

amount.addEventListener('input', () => {
  const hasCharRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharRegex, '');
});

form.onsubmit = (event) => {
  event.preventDefault();

  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "USD");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "EUR");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "GBP");
      break;
  }
}

function convertCurrency(amount, price, symbol){
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price;

    if (isNaN(total)) alert("Valor inválido. Por favor, insira um número válido.");

    result.textContent = formatCurrencyBRL(total);

    footer.classList.add('show-result');
    
  } catch (error) {
    console.log(error);
    footer.classList.remove('show-result');
    alert("Ocorreu um erro ao converter a moeda. Tente novamente.");
  }
}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}