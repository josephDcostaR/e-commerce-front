async function deleteUser(id) {
    const apiUrl = `http://localhost:8081/deletar/${id}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar o produto');
        }

        alert(`Produto excluído com sucesso`);

        // Atualiza a lista de produtos
        resultHtml.innerHTML = '';  
        await getContatos();
        
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao deletar o produto.');
    }
}
