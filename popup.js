"use strict";

document.addEventListener('DOMContentLoaded', function() {
  var cards = [
    {type: 'valid', brand: 'visa', name: 'Visa', number: '4242424242424242' },
    {type: 'valid', brand: 'visa', name: 'Visa', number: '4012888888881881'},
    {type: 'valid', brand: 'visa', name: 'Visa (debit)', number: '4000056655665556'},
    {type: 'valid', brand: 'mastercard', name: 'MasterCard', number: '5555555555554444'},
    {type: 'valid', brand: 'mastercard', name: 'MasterCard (debit)', number: '5200828282828210'},
    {type: 'valid', brand: 'mastercard', name: 'MasterCard (prepaid)', number: '5105105105105100'},
    {type: 'valid', brand: 'amex', name: 'American Express', number: '378282246310005'},
    {type: 'valid', brand: 'amex', name: 'American Express', number: '371449635398431'},
    {type: 'valid', brand: 'discover', name: 'Discover', number: '6011111111111117'},
    {type: 'valid', brand: 'discover', name: 'Discover', number: '6011000990139424'},
    {type: 'valid', brand: 'diners', name: 'Diners Club', number: '30569309025904'},
    {type: 'valid', brand: 'diners', name: 'Diners Club', number: '38520000023237'},
    {type: 'valid', brand: 'jcb', name: 'JCB', number: '3530111333300000'},
    {type: 'valid', brand: 'jcb', name: 'JCB', number: '3566002020360505'},

    {type: 'invalid', name: 'Fail Address/Zip', number: '4000000000000010'},
    {type: 'invalid', name: 'Fail Address', number: '4000000000000028'},
    {type: 'invalid', name: 'Fail Zip', number: '4000000000000036'},
    {type: 'invalid', name: 'Card Declined', number: '4000000000000002'},
    {type: 'invalid', name: 'Card Declined - Fraudulent', number: '4100000000000019'},
    {type: 'invalid', name: 'Declined incorrect_cvc', number: '4000000000000127'},
    {type: 'invalid', name: 'Expired Card', number: '4000000000000069'},
    {type: 'invalid', name: 'Processing Error', number: '4000000000000119'},
  ];
  cards.forEach(function(card) {
    var li = document.createElement('li');
    li.className = 'card';
    if(card.brand) {
      li.className = li.className + ' card-brand card-' + card.brand;
    }
    li.onclick = function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, card);
      });
      window.close();
    }
    li.appendChild(document.createTextNode(card.name));
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createTextNode(card.number));
    document.body.getElementsByClassName(card.type + "-cards")[0].appendChild(li);
  });
});
