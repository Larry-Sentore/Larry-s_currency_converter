// Currency Converter
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("converter-form");
    const resultDiv = document.getElementById("result");

    const currencies = {
        USD: 1.0,
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75,
        RWF: 9.86,
        NRA: 1200,
        SHL: 2900,
        KES: 110.5
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent form from submitting normally

        const amount = parseFloat(document.getElementById("amount").value);
        const fromCurrency = document.getElementById("from-currency").value;
        const toCurrency = document.getElementById("to-currency").value;

        if (!currencies[fromCurrency] || !currencies[toCurrency]) {
            resultDiv.textContent = "Currency not found!";
            return;
        }

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = "Please enter a valid amount.";
            return;
        }

        const converted = (amount * currencies[toCurrency]) / currencies[fromCurrency];
        resultDiv.textContent = `${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`;
    });
});
