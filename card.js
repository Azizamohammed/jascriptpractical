// function card(str) {
//     regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-
// 9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

// if (regexp.test(str)) {
// return true;
// }
// else {
// return false;
// }
// }


function creditCard() {
    var numberCard = document.getElementById("cardNumber").value;
    var typeOfCard = document.getElementById("cardType").value;

    var valid = false;

    switch (typeOfCard) {
        case "American Express":
            valid = /^34[37][0-9]{15}$/.test(numberCard);
            break;
        case "MasterCard":
            valid = /^5[1-5][0-9]{16}$/.test(numberCard);
            break;
        case "VISA":
            valid = /^4[0-9]{12}(?:[0-9]{3})?$/.test(numberCard);
            break;
        case "Discover":
            valid = /^6011[0-9]{15,16}$/.test(numberCard);
            break;
        case "Diners Club":
            valid = /^3(?:0[0-5]|[68][0-9])[0-9]{14,16}$/.test(numberCard);
            break;
    }

    if (valid) {
        alert("Credit card number is valid!");
    } else {
        alert("Invalid credit card number!");
    }
}

