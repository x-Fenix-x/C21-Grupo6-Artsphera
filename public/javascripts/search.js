const $ = (id) => document.getElementById(id);

window.onload = function () {
    const search = $('search');

    search.addEventListener('focus', function () {
        if (true) {
            this.classList.add('is-valid');
        }
    });

    search.addEventListener('blur', function () {
        this.classList.remove('is-valid');
    });
};
