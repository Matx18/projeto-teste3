const button = document.getElementsByTagName('button')[0]

button.addEventListener('click', function() {

    if(button.innerHTML == 'Modificar') {

            const p = document.querySelectorAll('p');
            p.forEach(function(pegar) {

                button.innerHTML = 'Voltar';
                pegar.style.color = 'red';
                pegar.style.fontWeight = 'bold';

            })

        }

        else {

            const p = document.querySelectorAll('p');
            p.forEach(function(pegar) {

                button.innerHTML = 'Modificar';
                pegar.style.color = '#000';
                pegar.style.fontWeight = '100';

            })
        }
})