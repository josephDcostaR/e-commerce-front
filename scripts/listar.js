const resultHtml = document.getElementById('result');
async function getContatos() {
    const apiUrl = 'http://localhost:8081/listar'
    const response = await fetch(apiUrl)
    const data = await response.json();

    data.forEach(produto => {
        resultHtml.insertAdjacentHTML('beforeend', `
            <tr>

             <td>${produto.nome}</td>    
                <td>${produto.categoria}</td>    
                <td>${produto.preco}</td>    
                <td><button class="w3-button w3-red" onclick="deleteUser('${produto.id}')">excluir</button></td>    
                <td><a href="./pages/edicao.html?id=${produto.id}" class="w3-button w3-green">Editar</a></td>  
            
            </tr>    
            
        `)
    });
}

getContatos();