const links = document.querySelector('.links');
const menuBtn = document.querySelector('.menu-btn');
const scrollBtn = document.querySelector('.scroll-link');

//////variables for crypto payment////////////////////////////////
const btns = document.querySelectorAll('.btn');
const cryptoAmount = document.querySelector('.crypto-amount');
const usdt_code = "0xc18727E8DDDc49009c001E4BA000946c0773dacF";
const btc_code = "bc1qps8q50wfc3sgapnr6m0suhh00ff29r20fr92hz";
const eth_code = "0xc18727E8DDDc49009c001E4BA000946c0773dacF";
const btc_img = "/images/btcbarcode.png";
const usdt_img = "/images/usdtcode.png";
const eth_img = "/images/ethcode.png";
const barcodeImg = document.getElementById('barcodeimg');
const copyText = document.querySelector('#copyText');
const deposit = document.querySelector('#deposit');
const converted = document.querySelector('#converted');


menuBtn.addEventListener('click', function() {
    links.classList.toggle('show-links');
});






btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const crypto = e.currentTarget.classList;
        if (crypto.contains("btc")) {
            cryptoAmount.textContent = "btc";
            copyText.value = btc_code;
            barcodeImg.src = btc_img;
            converted.innerHTML = (deposit.value / 46273.43).toFixed(2) + " BTC";;

        } else
        if (crypto.contains("eth")) {
            cryptoAmount.textContent = "eth";
            copyText.value = eth_code;
            barcodeImg.src = eth_img;
            converted.innerHTML = (deposit.value / 3453).toFixed(2) + " ETH";

        } else if (crypto.contains("usdt")) {
            cryptoAmount.textContent = "usdt";
            copyText.value = usdt_code;
            barcodeImg.src = usdt_img;
            converted.innerHTML = deposit.value + " USDT";
        }
    });
});



// AOS Instance
AOS.init({
    duration: 1200,
});



var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,

    breakpoints: {
        700: {
            slidesPerView: 2,

        },
        1100: {
            slidesPerView: 3,

        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

window.onload = function() {
    event.preventDefault();
    emailjs.sendForm('contact_service', 'contact-form', this)
        .then(function() {
            alert('Sent Successfully');
        }, function(error) {
            alert('Try again');
        });
}


window.onload = function() {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
        console.log('show');
    } else {
        scrollBtn.style.display = 'none'
    }
}



function myFunction() {
    var copyText = document.getElementById('copyText');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text to clipboard: " + copyText.value);
}