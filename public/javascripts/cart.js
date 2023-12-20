const $ = (id) => document.getElementById(id);

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
    let result;

    try {
        const response = await fetch(
            `/api/cart/item?quantity=${quantity}&product=${product}`
        );
        result = await response.json();
        if (!result.ok) {
            throw new Error(result.msg);
        } else {
            console.log(result);
        }
    } catch (error) {
        await Swal.fire({
            title: 'Error',
            text: 'Hubo un error al agregar al carrito',
            icon: 'error',
            html: `Debes <a href="/users/login" class="sweetAlert-link">iniciar sesión</a> para agregarlo al carrito`,
        });
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

    let result;

    $('btn-cart') &&
        $('btn-cart').addEventListener('click', async function (e) {
            try {
                const response = await fetch('/api/cart');
                const { ok, data } = await response.json();

                if (ok) {
                    if (data.products.length) {
                        $('cart-body').innerHTML = `
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
                                <div>
                                    <div class="data-total style="width:20px">
                                        <h5>Total: ${data.total}</h5> 
                                    </div>
                                 </div>
                            </table>`;
                        data.products.forEach(
                            ({ image, title, price, quantity }) => {
                                $('cart-table').innerHTML += `
                                  <tr>
                                    <td class="img-cell"><img src="/images/products/${image}" alt="" width=100/></td>
                                    <td>${title}</td>
                                    <td>${price * quantity}</td>
                                    <td>
                                        <div>
                                            <button class="btn-carrito btn-dangerCart"><i class="fa-solid fa-minus"></i></button>
                                            <input type="text" value=" ${quantity}" style="width:20px"/>
                                            <button class="btn-carrito btn-successCart"><i class="fa-solid fa-plus"></i></button>
                                        </div>
                                    </td>
                                  </tr>
                                  `;
                            }
                        );
                    } else {
                        $('cart-body').innerHTML =
                            '<p>No hay productos agregados al carrito</p>';
                    }
                }
                console.log(result);
            } catch (error) {
                console.error(error);
                result = { ok: false, msg: error.message };
                Swal.fire({
                    title: 'Error',
                    text: 'Error',
                    icon: 'error',
                });
            }
        });
});
