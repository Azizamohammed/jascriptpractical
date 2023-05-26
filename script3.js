const temporaryAddressInput = document.getElementById('temporaryAddress');
const permanentAddressInput = document.getElementById('permanentAddress');
const sameAddressCheckbox = document.getElementById('sameAddressCheckbox');

sameAddressCheckbox.addEventListener('change', function() {
  if (sameAddressCheckbox.checked) {
    permanentAddressInput.value = temporaryAddressInput.value;
    permanentAddressInput.disabled = true;
  } else {
    permanentAddressInput.value = '';
    permanentAddressInput.disabled = false;
  }
});

