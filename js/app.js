let list_item = document.querySelectorAll('.list__item');
let list0 = list_item[0];
let list1 = list_item[1];
let list2 = list_item[2];
let list3 = list_item[3];
let list4 = list_item[4];

let products = document.getElementById('products');
let orders = document.getElementById('orders');
let package = document.getElementById('package');
let accounting = document.getElementById('accounting');
let terminal = document.getElementById('terminal');

let productsNew = document.querySelector('[data-id="products"]');
let item_calc0 = productsNew.querySelector('.item__calc');
let item_price0 = productsNew.querySelector('.item__price');


let ordersNew = document.querySelector('[data-id="orders"]');
let item_calc1 = ordersNew.querySelector('.item__calc');
let item_price1 = ordersNew.querySelector('.item__price');

let packageNew = document.querySelector('[data-id="package"]');
let item_calc2 = packageNew.querySelector('.item__calc');
let item_price2 = packageNew.querySelector('.item__price');

let accountingNew = document.querySelector('[data-id="accounting"]');
let item_price3 = accountingNew.querySelector('.item__price');

let terminalNew = document.querySelector('[data-id="terminal"]');
let item_price4 = terminalNew.querySelector('.item__price');

let sum0 = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sumSum = 0;

products.addEventListener('keyup', function () {
    if (products.value.length > 0) {
        list0.style.display = "block";
        list0.style.display = "flex";
        list0.style.justifyContent = "space-between";
        sum0 = products.value * 0.5;
        item_calc0.innerHTML = ` ${products.value} * $0.5`;
        item_price0.innerHTML = ` $ ${sum0}`
        sumSum = sum0+sum1+sum2+sum3+sum4;
        totalPrice.innerHTML = `$ ${sumSum}`;
    } else {
        list0.style.display = "none";
        sum0 = 0;
        sumSum = sum0+sum1+sum2+sum3+sum4;
        totalPrice.innerHTML = `$ ${sumSum}`;
    }
});

orders.addEventListener('keyup', function () {
    if (orders.value.length > 0) {
        list1.style.display = "block";
        list1.style.display = "flex";
        list1.style.justifyContent = "space-between";
        sum1 = orders.value * 0.5;
        item_calc1.innerHTML = ` ${orders.value} * $0.5`;
        item_price1.innerHTML = ` $ ${sum1}`
        sumSum = sum0+sum1+sum2+sum3+sum4;
        totalPrice.innerHTML = `$ ${sumSum}`;
    } else {
        list1.style.display = "none";
        sum1 = 0;
        sumSum = sum0+sum1+sum2+sum3+sum4;
        totalPrice.innerHTML = `$ ${sumSum}`;
    }
});

package.addEventListener('click', function () {
    package.classList.toggle("open");
    let select__dropdown = document.querySelectorAll('.select__dropdown');
    for (let i = 0; i < select__dropdown.length; i++) {
        select__dropdown[i].addEventListener('click', function (event) {
                let newValue = event.target.getAttribute('DATA-VALUE');
                document.querySelector('.calc__select').setAttribute('data-value', newValue);

                let newName = event.target.innerText;
                document.querySelector('.calc__select .select__input').innerText = newName;

                if (newName === "Basic") {
                    list2.style.display = "block";
                    list2.style.display = "flex";
                    list2.style.justifyContent = "space-between";
                    sum2 = 20;
                    item_calc2.innerHTML = ` Basic`;
                    item_price2.innerHTML = ` $ ${sum2}`
                    sumSum = sum0+sum1+sum2+sum3+sum4;
                    totalPrice.innerHTML = `$ ${sumSum}`;
                } else if (newName === "Professional") {
                    list2.style.display = "block";
                    list2.style.display = "flex";
                    list2.style.justifyContent = "space-between";
                    sum2 = 40;
                    item_calc2.innerHTML = ` Professional`;
                    item_price2.innerHTML = ` $ ${sum2}`
                    sumSum = sum0+sum1+sum2+sum3+sum4;
                    totalPrice.innerHTML = `$ ${sumSum}`;
                } else if (newName === "Premium") {
                    list2.style.display = "block";
                    list2.style.display = "flex";
                    list2.style.justifyContent = "space-between";
                    sum2 = 60;
                    item_calc2.innerHTML = ` Premium`;
                    item_price2.innerHTML = ` $ ${sum2}`
                    sumSum = sum0+sum1+sum2+sum3+sum4;
                    totalPrice.innerHTML = `$ ${sumSum}`;
                }
            }
        )
    }
});

accounting.addEventListener('click', function () {
    if (accounting.checked === true) {
        list3.style.display = "block";
        list3.style.display = "flex";
        list3.style.justifyContent = "space-between";
        sum3 = 10;
        item_price3.innerHTML = `$ ${sum3}`
        sumSum = sum0+sum1+sum2+sum3+sum4;
        totalPrice.innerHTML = `$ ${sumSum}`;
    } else {
        list3.style.display = "none";
        sum3 = 0;
        sumSum = sum0+sum1+sum2+sum3+sum4;
        totalPrice.innerHTML = `$ ${sumSum}`;
    }
});
terminal.addEventListener('click', function () {
    if (terminal.checked === true) {
        list4.style.display = "block";
        list4.style.display = "flex";
        list4.style.justifyContent = "space-between";
        sum4 = 10;
        item_price4.innerHTML = `$ ${sum4}`
        sumSum = sum0+sum1+sum2+sum3+sum4;
        totalPrice.innerHTML = `$ ${sumSum}`;
    } else {
        list4.style.display = "none";
        sum4 = 0;
        sumSum = sum0+sum1+sum2+sum3+sum4;
        totalPrice.innerHTML = `$ ${sumSum}`;
    }
});

let prices = document.querySelector('.summary__total');
prices.style.display = "block";
prices.style.position= "absolute";
prices.style.bottom = "0px";
let totalPrice = document.querySelector('.total__price');
totalPrice.innerHTML = `$ ${sumSum}`;
