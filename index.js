const productsContainer = document.querySelector(".product-items-container");

productsContainer.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);


    if (target.classList.contains("add-to-cart-btn")) {
        const product = e.target.parentElement.parentElement;
        const productName = product.querySelector('.item-name').textContent;
        const productPrice = product.querySelector('.item-price').textContent;

        console.log(productName, Number.parseInt(productPrice.slice(1)));


        gtag('event', "add_to_cart", {
            currency: "USD",
            title: productName,
            price: Number.parseInt(productPrice.slice(1))
        });
    }

});