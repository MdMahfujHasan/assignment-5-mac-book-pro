const bestPrice = document.getElementById('best-price').innerText;

/* ------------------
extra memory section
--------------------*/
function extraMemory(cost) {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = cost;
}

document.getElementById('8gb-unified-memory').addEventListener('click', function () {
    extraMemory(0);
    totalPrice();
})
document.getElementById('16gb-unified-memory').addEventListener('click', function () {
    extraMemory(180);
    totalPrice();
})

/* -------------------
extra storage section
---------------------*/
function extraStorage(cost) {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = cost;
}

document.getElementById('256gb-ssd-storage').addEventListener('click', function () {
    extraStorage(0);
    totalPrice();
})
document.getElementById('512gb-ssd-storage').addEventListener('click', function () {
    extraStorage(100);
    totalPrice();
})
document.getElementById('1000gb-ssd-storage').addEventListener('click', function () {
    extraStorage(180);
    totalPrice();
})

/* --------------
delivery section
----------------*/
function delivery(cost) {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = cost;
}

document.getElementById('delivery-charge-free').addEventListener('click', function () {
    delivery(0);
    totalPrice();
})
document.getElementById('delivery-charge-20').addEventListener('click', function () {
    delivery(20);
    totalPrice();
})

/* -------------------------------
price and promo code calc section
----------------------------------*/
function priceCalc(price, promoCodeOrNot) {
    const bestPriceText = document.getElementById('best-price');
    const bestPriceString = bestPriceText.innerText;
    const bestPrice = parseInt(bestPriceString);

    const extraMemoryCostText = document.getElementById('extra-memory-cost');
    const extraMemoryCostString = extraMemoryCostText.innerText;
    const extraMemoryCost = parseInt(extraMemoryCostString);

    const extraStorageCostText = document.getElementById('extra-storage-cost');
    const extraStorageCostString = extraStorageCostText.innerText;
    const extraStorageCost = parseInt(extraStorageCostString);

    const deliveryChargeText = document.getElementById('delivery-charge');
    const deliveryChargeString = deliveryChargeText.innerText;
    const deliveryCharge = parseInt(deliveryChargeString);

    const totalPriceText = (bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge) * promoCodeOrNot;
    const totalPrice = document.getElementById(price + '-price');
    totalPrice.innerText = totalPriceText;
}

/* ----------------
price calc section
-------------------*/
function totalPrice() {
    priceCalc('total', 1);
}

/* --------------------
promo code calc section
-----------------------*/
document.getElementById('promo-code-btn').addEventListener('click', function () {
    const promoCodeText = document.getElementById('promo-code');
    const promoCode = promoCodeText.value;
    if (promoCode == 'code20') {
        priceCalc('overall', 0.8);
    }
})