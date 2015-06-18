function fillStripe(card) {
  var elements = document.getElementsByTagName("input");
  for(var i=0;i<elements.length;i++) {
    var element = elements[i];
    var stripeData = element.dataset.stripe;
    switch(stripeData) {
      case 'number':
        element.value = card.number;
        break;
      case 'cvc':
        element.value = '123';
        break;
      case 'exp-month':
        element.value = '1';
        break;
      case 'exp-year':
        element.value = '20';
    }
  };
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.number) {
    fillStripe(request)
  }
});
