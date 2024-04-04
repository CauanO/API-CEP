 document.getElementById('cep').addEventListener('input', function() {
    let cep = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+cep+'/json/');
    ajax.send();

    ajax.onload = function () {
        let obj = JSON.parse(this.responseText);
        let texto = JSON.stringify(obj);
        document.getElementById('logradouro').value = (obj.uf)
        document.getElementById('bairro').value = (obj.bairro)
        document.getElementById('localidade').value = (obj.localidade)
        document.getElementById('uf').value = (obj.uf)
        document.getElementById('ddd').value = (obj.ddd)

    }
})