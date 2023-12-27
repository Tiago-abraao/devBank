const consultar = document.getElementById('consultar');

        function consult() {
            const nome = document.getElementById('name').value;
            const cpf = parseInt(document.getElementById('number').value);
            const resultado = document.getElementById('result');
            let saldo = '';

            if (nome === 'John' && cpf === 123456789) {
                saldo = 'você tem valores a receber no total de R$ 50.000,00!';
            } else if (nome === 'Sarah' && cpf === 987654321) {
                saldo = 'você não tem valores a receber!';
            } else if(nome === 'Mark' && cpf === 1357111317){
                saldo = 'seu nome não consta no sistema!!';
            }else  {
                saldo = 'Preencha corretamente todos os campos!!';
            }
            resultado.textContent = `Olá ${nome}, ${saldo}`;
        }

        consultar.addEventListener('click', consult);