$("document").ready(function() {                    
    var contadorItems = sessionStorage.getItem('contadorItems');
    var total = 0;

    for (var i = 1; i  <= contadorItems; i++) {
      var precoTempVar = "preco" + i;
      total += parseFloat(sessionStorage.getItem(precoTempVar).slice(0,-1)); //slice removes € from string
    };

    sessionStorage.setItem('totalPagamento', total.toFixed(2));
    if(total > 0){ 
        $('#total_pagamento').text(total.toFixed(2) + "€")
    }
});

