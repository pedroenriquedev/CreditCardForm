var cvcInput = document.getElementById("cardVerificationCode");
var creditCardTemplate = document.getElementById("creditCardTemplate");
var cardholderNameInput = document.getElementById("cardholderName");
var cardNumberInput = document.getElementById("cardNumber");
var cardExpiryMonthInput = document.getElementById("cardExpiryMonth");
var cardExpiryYearInput = document.getElementById("cardExpiryYear");
var cvcOnTemplate = document.getElementById("creditCardCvc");

cvcInput.addEventListener("input", function () {
  if (this.value !== "") {
    numbersOnly(this);
    cvcOnTemplate.textContent = this.value;
  } else {
    cvcOnTemplate.innerHTML = "&nbsp;";
  }
});

cardholderNameInput.addEventListener("input", function () {
  if (this.value !== "") {
    lettersOnly(this);
    document.getElementById("cardName").textContent = this.value;
  } else {
    document.getElementById("cardName").innerHTML = "&nbsp;";
  }
});

document.getElementById("cardNumber").addEventListener("input", function () {
  if (this.value !== "") {
    numbersOnly(this);
    this.value = this.value.replace(/(.{4})/g, "$1 ").trim();
    document.getElementById("card1Number").textContent = this.value;
  } else {
    document.getElementById("card1Number").innerHTML = "&nbsp;";
  }
});

document
  .getElementById("cardExpiryMonth")
  .addEventListener("input", function () {
    if (this.value !== "") {
      numbersOnly(this);
      document.getElementById("cardMonth").textContent = this.value;
    } else {
      document.getElementById("cardMonth").innerHTML = "&nbsp;";
    }
  });

document
  .getElementById("cardExpiryYear")
  .addEventListener("input", function () {
    if (this.value !== "") {
      numbersOnly(this);
      document.getElementById("cardYear").textContent = this.value;
    } else {
      document.getElementById("cardYear").innerHTML = "&nbsp;";
    }
  });

cvcInput.onfocus = function () {
  creditCardTemplate.classList.add("creditCardTemplateHoverActive");
};

cvcInput.addEventListener("focusout", function () {
  document
    .getElementById("creditCardTemplate")
    .classList.remove("creditCardTemplateHoverActive");
});

function lettersOnly(element) {
  var regex = /[^a-z ,'']/gi;
  element.value = element.value.replace(regex, "");
}

function numbersOnly(element) {
  var regex = /[^0-9]/g;
  element.value = element.value.replace(regex, "");
}
