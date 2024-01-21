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

    $('title').addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('msgError-title').innerHTML = 'El titulo es obligatorio';
                this.classList.add('is-invalid');
                break;
            case !/^[A-Za-z]+$/.test(this.value):
                $('msgError-title').innerHTML = 'Solo caracteres alfabéticos';
                this.classList.add('is-invalid');
                break;
            case this.value.trim().length < 2:
                $('msgError-title').innerHTML = 'Minimo dos caracteres';
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-title').innerHTML = null;
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    });

    $('categoryId').addEventListener('blur', function () {
        let selectOption = this.options[this.selectedIndex];

        if (selectOption.value === '') {
            $('msgError-categoryId').innerHTML = 'Seleccione una opción';
            this.classList.add('is-invalid');
        } else {
            $('msgError-categoryId').innerHTML = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        }
    });

    $('sectionId').addEventListener('blur', function () {
        let selectOption = this.options[this.selectedIndex];

        if (selectOption.value === '') {
            $('msgError-sectionId').innerHTML = 'Seleccione una opción';
            this.classList.add('is-invalid');
        } else {
            $('msgError-sectionId').innerHTML = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        }
    });

    $('price').addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('msgError-price').innerHTML = 'El precio es obligatorio';
                this.classList.add('is-invalid');
                break;
            case +this.value <= 0:
                $('msgError-price').innerHTML = 'Debe ser un número positivo';
                break;
            default:
                $('msgError-price').innerHTML = null;
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    });

    $('discount').addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('msgError-discount').innerHTML =
                    'Si no tiene descuento coloque 0';
                this.classList.add('is-invalid');
                break;
            case +this.value < 0 || +this.value >= 100:
                $('msgError-discount').innerHTML =
                    'Debe ser positivo y menor a 100';
                break;
            default:
                $('msgError-discount').innerHTML = null;
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                break;
        }
    });

    $('description').addEventListener('blur', function () {
        switch (true) {
            case !this.value.trim():
                $('msgError-description').innerHTML = 'Descripción requerida';
                this.classList.add('is-invalid');
                break;
            case this.value.length < 10 || this.value.length > 500:
                $('msgError-description').innerHTML =
                    'Minimo 10 caracteres y maximo 500 caracteres';
                this.classList.add('is-invalid');
                break;
            default:
                $('msgError-description').innerHTML = null;
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
                (elementsForm[i].type !== 'file' &&
                    !elementsForm[i].value.trim()) ||
                (elementsForm[i].type === 'file' &&
                    !elementsForm[i].files.length)
            ) {
                elementsForm[i].classList.add('is-invalid');
                $('msgError-empty').innerHTML =
                    'Todos los campos son obligatorios';
                error = true;
            }
        }

        !error && this.submit();
    });
});
