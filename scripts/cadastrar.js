const sendUser = async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const preco = document.getElementById('preco').value;

    const produto = {
        nome,
        categoria,
        preco
    }

    const apiUrl = 'http://localhost:8081/cadastrar';

    const request = new Request(apiUrl, {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: new Headers ({
            'Content-type': 'application/json'
        })
    })

    const response = await fetch(request);
    const data = await response.json();

    alert(`Produto ${data.nome} cadastrado com sucesso`);
    window.location.href = '/index.html'
}