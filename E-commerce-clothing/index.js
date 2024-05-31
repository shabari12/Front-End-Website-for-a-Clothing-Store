var sidenav = document.querySelector(".side-navbar");
function opennavbar() {
    sidenav.style.left = '0';
}

function closenavbar() {
    sidenav.style.left = '-60%';
}

var productContainer = document.getElementById('products');
var search = document.getElementById('search');
var productlist = productContainer.querySelectorAll('.product-box');

search.addEventListener('keyup', function(event) {
    var entervalue = event.target.value.toUpperCase();
    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector('p').textContent.toUpperCase();
        if (productname.indexOf(entervalue) < 0) {
            productlist[count].style.display = 'none';
        } else {
            productlist[count].style.display = 'block';
        }
    }
});
