// Função para filtrar produtos por categoria
function filtrar(categoria) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        if (categoria === 'todos' || produto.getAttribute('data-categoria') === categoria) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Função para o formulário de contato
document.querySelector('#form-contato').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Obrigado pelo seu contato! Responderemos em breve.");
    e.target.reset();
});
