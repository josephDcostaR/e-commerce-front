const urlApi = 'http://localhost:8081/atualizar/';
let params = new URLSearchParams(document.location.search);
let idUser = params.get('id');

const getUserById = async () => {
    const response =  await fetch(`${urlApi}/${idUser}`) //GET;
    const produto = await response.json();

    document.getElementById('nome').value = produto.nome;
    document.getElementById('categoria').value = produto.categoria;
    document.getElementById('preco').value = produto.preco;
}

const editUser = async (event) => {
    event.preventDefault();

    // buscar os campos que o meu usuario 
    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const preco = document.getElementById('preco').value;

    const produto = {
        nome,
        categoria,
        preco
    }

    const request = new Request (`${urlApi}/${idUser}`, {
        method: 'PUT',
        body: JSON.stringify(produto),
        headers: new Headers ({
            'Content-type': 'application/json'
        })
    })

    const response = await fetch(request)//PUT;
    const data = await response.json();

    alert(`Produto ${data.nome} Editado com sucesso`);
    window.location.href = '/index.html';

}