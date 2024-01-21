const $ = (id) => document.getElementById(id);

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
});

const apiGeo = 'https://apis.datos.gob.ar/georef/api';

document.addEventListener('DOMContentLoaded', async function () {
    const parrafo = document.querySelector('.subHeader-parrafo');

    setTimeout(function () {
        parrafo.classList.add('active');
    }, 500);

    document.getElementById('avatarBtn').addEventListener('click', function () {
        document.getElementById('avatar').click();
    });

    document.getElementById('avatar').addEventListener('change', function () {
        const fileInput = this;
        const imagePreview = document.querySelector('.profile-picture__img');

        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(file);
    });

    try {
        const response = await fetch(apiGeo + '/provincias');
        const result = await response.json();

        result.provincias
            .sort((a, b) =>
                a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0
            )
            .forEach(({ nombre }) => {
                $(
                    'province'
                ).innerHTML += `<option value="${nombre}">${nombre}</option>`;
            });
    } catch (error) {
        console.error(error);
    }

    $('province').addEventListener('change', async function (e) {
        try {
            const response = await fetch(
                `${apiGeo}/localidades?provincia=${this.value}&max=1000`
            );
            const result = await response.json();

            $('city').innerHTML = null;

            result.localidades
                .sort((a, b) =>
                    a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0
                )
                .forEach(({ nombre }) => {
                    $(
                        'city'
                    ).innerHTML += `<option value="${nombre}">${nombre}</option>`;
                });
        } catch (error) {
            console.error(error);
        }
    });

    $('address').addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('msgError-address').innerHTML = 'La dirección es obligatoria';
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-address').innerHTML = null;
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    });
});

const addItemToCart = async (quantity, product) => {
    try {
        const response = await fetch(`/api/cart`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                quantity,
                product: +product,
            }),
        });
        const { ok, data, msg } = await response.json();
        if (!ok) {
            throw new Error(msg);
        } else {
            const { products, total } = data;
            showProductInCart(products, total);
            Toast.fire({
                icon: 'success',
                title: 'Producto agregado',
            });
        }
    } catch (error) {
        await Swal.fire({
            title: 'Error',
            text: error.message,
            icon: 'error',
            html: `Debes <a href="/users/login" class="sweetAlert-link">iniciar sesión</a> para agregarlo al carrito`,
        });
    }
};

const showProductInCart = (products, total) => {
    if ($('cart-table')) {
        $('cart-table').innerHTML = null;
        const cartTable = $('cart-table');

        products.forEach(({ id, image, title, price, quantity, discount }) => {
            cartTable.innerHTML += `
                <tr>
                    <td class="img-cell"><img src="/images/products/${image}" alt="" width=100/></td>
                    <td>${title}</td>
                    <td>${price - (price * discount) / 100}</td>
                    <td>
                        <div>
                        <button class="btn-carrito btn-dangerCart" onclick="removeItemFromCart(${id})">
                        <i class="fa-solid fa-minus"></i>
                        </button>
                            <input type="text" value="${quantity}"/>
                            <button class="btn-carrito btn-successCart" onclick="addItemToCart(1, ${id})">
                            <i class="fa-solid fa-plus"></i></i></button>
                        </div>
                    </td>
                </tr>
                `;
        });
        $('cart-table').innerHTML += `
        <div>
                <div class="data-total">
                    <h5>Total: $<span id="show-total">${total}</span></h5>
                </div>
        </div>
                `;
        $('show-total').innerHTML = total;
    }
};

window.addEventListener('load', async function () {
    const search = $('search');

    $('formSearch').addEventListener('submit', function (e) {
        e.preventDefault();

        let error = false;

        if (search.value.trim() === '') {
            error = true;
        }

        !error && this.submit();
    });

    $('btn-cart') &&
        $('btn-cart').addEventListener('click', async function (e) {
            try {
                const response = await fetch('/api/cart', {
                    method: 'GET',
                });
                const {
                    ok,
                    data: { products, total },
                } = await response.json();

                if (ok) {
                    const cartBody = $('cart-body');

                    if (products.length) {
                        cartBody.innerHTML = `
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody id="cart-table">
                                  
                                </tbody>
                                
                            </table>`;
                        $('cart-table').innerHTML = null;
                        showProductInCart(products, total);
                    } else {
                        cartBody.innerHTML =
                            '<p class="alert">No hay productos agregados al carrito</p>';
                    }
                }
            } catch (error) {
                console.error(error);
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                });
            }
        });

    const emptyCartBtn = $('emptyCartBtn');
    if (emptyCartBtn) {
        emptyCartBtn.addEventListener('click', async function () {
            try {
                const response = await fetch('/api/cart/all', {
                    method: 'DELETE',
                });
                const { ok, data } = await response.json();

                if (ok) {
                    showProductInCart(data.products, data.total);
                    Toast.fire({
                        icon: 'success',
                        title: 'Carrito vaciado',
                    });
                }
            } catch (error) {
                console.error(error);
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                });
            }
        });
    }
});
