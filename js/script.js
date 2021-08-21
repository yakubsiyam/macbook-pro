// counting total-cost and promo-cost
function totalCost(){
    const bestPrice = parseFloat(document.getElementById('best-cost').innerText);
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);
    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-cost').innerText = totalPrice;
    document.getElementById('promo-cost-total').innerText = totalPrice;
}

//get button id and calling totalCost function
function updateCost(buttonId, cost) {
    document.getElementById(buttonId + '-cost').innerText = cost;
    totalCost();
}

//memory event handler
document.getElementById('memory-8').addEventListener('click', function(){
    updateCost('memory', 0);
});

document.getElementById('memory-16').addEventListener('click', function(){
    updateCost('memory', 180);
});

// storage event handler
document.getElementById('storage-256').addEventListener('click', function(){
    updateCost('storage', 0);
});

document.getElementById('storage-512').addEventListener('click', function(){
    updateCost('storage', 100);
});

document.getElementById('storage-1tb').addEventListener('click', function(){
    updateCost('storage', 180);
});

// delivery event handler
document.getElementById('delivery-0').addEventListener('click', function(){
    updateCost('delivery', 0);
});

document.getElementById('delivery-20').addEventListener('click', function(){
    updateCost('delivery', 20);
});

// counting promo code
document.getElementById('promo-apply').addEventListener('click', function(){
    let promoInput = document.getElementById('promo-input').value;
    if(promoInput == 'stevekaku'){
        let total = parseFloat(document.getElementById('total-cost').innerText);
        total = total - (total*.2);             //calculating promo code discount
        document.getElementById('promo-cost-total').innerText = total;
    }
    document.getElementById('promo-input').value = '';          //clear promo input button
});
