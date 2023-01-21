function getExchangeRate() {
  // get the values of the selected currencies and the amount
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  // check if the input amount is not empty
  if (!amount) {
    alert("Please enter an amount");
    return;
  }

  // use fetch API to get the exchange rate from the API
  fetch(
    `https://v6.exchangerate-api.com/v6/9c8b05ec309c5d5fed5ff122/latest/${from}`
  )
    .then((response) => response.json())
    .then((data) => {
      // calculate the result
      const rate = data.rates[to];
      const result = amount * rate;
      // display the result
      document.getElementById(
        "result"
      ).innerHTML = `${amount} ${from} is equal to ${result} ${to}`;
    })
    .catch((error) => {
      console.log("Error: ", error);
      alert("Sorry, something went wrong. Please try again later.");
    });
}
