const $ = (id) => document.getElementById(id);
const apiGeo = 'https://apis.datos.gob.ar/georef/api';

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

    $('name').addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = 'El nombre es obligatorio';
                this.classList.add('is-invalid');
                break;
            case !/^[A-Za-z]+$/.test(this.value):
                $('msgError-name').innerHTML = 'Solo caracteres alfabéticos';
                this.classList.add('is-invalid');
                break;
            case this.value.trim().length < 2:
                $('msgError-name').innerHTML = 'Mínimo dos caracteres';
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-name').innerHTML = null;
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    });

    $('surname').addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('msgError-surname').innerHTML = 'El apellido es obligatorio';
                this.classList.add('is-invalid');
                break;
            case !/^[A-Za-z]+$/.test(this.value):
                $('msgError-surname').innerHTML = 'Solo caracteres alfabéticos';
                this.classList.add('is-invalid');
                break;
            case this.value.trim().length < 2:
                $('msgError-surname').innerHTML = 'Minimo dos caracteres';
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-surname').innerHTML = null;
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
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
     

    $('password').addEventListener('blur', function () {
        switch (true) {
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(
                this.value
            ):
                $('msgError-password').innerHTML =
                    'Debe tener entre 6 y 12 caracteres, un número, una mayúscula y un caracter especial';
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-password').innerHTML = null;
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    });

    $('password2').addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('msgError-password2').innerHTML = 'Repita la contraseña';
                this.classList.add('is-invalid');
                break;
            case this.value.trim() !== $('password').value.trim():
                $('msgError-password2').innerHTML =
                    'La contraseñas ingresadas no coinciden';
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-password2').innerHTML = null;
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    });

    $('formAdd2').addEventListener('submit', function (e) {
        e.preventDefault();

        const elementsForm = $('formAdd2').elements;
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            if (
                !elementsForm[i].value.trim() ||
                elementsForm[i].classList.contains('is-invalid')
            ) {
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty2').innerHTML =
                    'Los campos señalados son obligatorios';
                error = true;
            }
        }

        !error && this.submit();
    });
});
