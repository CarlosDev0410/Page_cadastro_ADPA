const estadoCivilRadios = document.querySelectorAll('input[name="estado_civil"]');
estadoCivilRadios.forEach(radio => {
    radio.addEventListener('click', function () {
        estadoCivilRadios.forEach(otherRadio => {
            if (otherRadio !== radio) {
                otherRadio.checked = false;
            }
        });
    });
});

const recebidoPorRadios = document.querySelectorAll('input[name="recebido_por"]');
estadoCivilRadios.forEach(radio => {
    radio.addEventListener('click', function () {
        estadoCivilRadios.forEach(otherRadio => {
            if (otherRadio !== radio) {
                otherRadio.checked = false;
            }
        });
    });
});