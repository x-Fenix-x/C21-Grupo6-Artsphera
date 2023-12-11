const $ = (id) => document.getElementById(id);

window.addEventListener('load', function () {
    const search = $('search');

    $('formSearch').addEventListener('submit', function (e) {
        e.preventDefault();

        let error = false;

        if (search.value.trim() === '') {
            error = true;
        }

        !error && this.submit();
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

    $('email').addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('msgError-email').innerHTML = 'Email obligatorio';
                this.classList.add('is-invalid');
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value):
                $('msgError-email').innerHTML = 'Email invalido';
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-email').innerHTML = null;
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    });

    $('email').addEventListener('change', async function () {
        try {
            const response = await fetch(
                `/api/check-email?email=${this.value}`
            );
            const result = await response.json();

            if (result.data) {
                $('msgError-email').innerHTML = 'Este email ya esta registrado';
                this.classList.add('is-invalid');
            }
        } catch (error) {
            console.error();
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

    $('formAdd').addEventListener('submit', function (e) {
        e.preventDefault();

        const elementsForm = $('formAdd').elements;
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            if (
                !elementsForm[i].value.trim() ||
                elementsForm[i].classList.contains('is-invalid')
            ) {
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty').innerHTML =
                    'Los campos señalados son obligatorios';
                error = true;
            }
        }

        !error && this.submit();
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
