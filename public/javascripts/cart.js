const $ = (id) => document.getElementById(id);

const addItemToCart = async (quantity, product) => {
    try {
        const response = await fetch(
            `/api/cart/item?quantity=${quantity}&product=${product}`
        );
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error;
    }
};

window.addEventListener('load', function () {
    $('btn-cart') &&
        $('btn-cart').addEventListener('click', async function (e) {
            try {
                const response = await fetch('/api/cart');
                const { ok, data } = await response.json();

                if (ok) {
                    if (data.products.length) {
                        $('cart-body').innerHTML =
                            '<p>Datos de los productos</p>';
                    } else {
                        $('cart-body').innerHTML =
                            '<p>No hay productos agregados al carrito</p>';
                    }
                }

                console.log(result);
            } catch (error) {
                console.error;
            }
        });

    
});
