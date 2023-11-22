const $ = (id) => document.getElementById(id);

window.onload = function (e) {
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
};
