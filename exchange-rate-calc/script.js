function getExchangeRate() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  fetch(
    `https://v6.exchangerate-api.com/v6/9c8b05ec309c5d5fed5ff122/latest/${from}`
  )
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[to];
      const result = amount * rate;
      document.getElementById(
        "result"
      ).innerHTML = `${amount} ${from} is equal to ${result} ${to}`;
    });
}
