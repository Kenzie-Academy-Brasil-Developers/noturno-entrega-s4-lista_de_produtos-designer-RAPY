//------------------- CALCULAR PREÇO TOTAL DOS PRODUTOS ----------------------

const output = document.getElementById('precoTotal');
output.value = '';
const ul = document.querySelector('.containerListaProdutos ul');


//------------------- MONTANDO A LISTA DOS PRODUTOS ----------------------

const montarListaProdutos = (listaProdutos) => {
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        // Adicionando li ao HTML
        ul.appendChild(li);
    });

}


//------------------- TOTALIZAÇÃO DO VALOR DOS PRODUTOS ----------------------

const valorTotalDosProduto = (itens) => {
    const mostrarValorTotalDeProdutos = itens.reduce((valorAnterior, valorAtual) => {
        return valorAtual.preco + valorAnterior
    }, 0);
    output.innerText = (mostrarValorTotalDeProdutos);
}



//------------------- MOSTRAR TODOS OS PRODUTOS ----------------------

const mostrarTodos = () => {
    const listaTodosOsProdutos = produtos.filter((produto) => {
        return produto.lista === 'todos';
    });

    montarListaProdutos(listaTodosOsProdutos);
    valorTotalDosProduto(listaTodosOsProdutos)
}

// Selecionando botao em nosso HTML
const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarTodos.addEventListener('click', mostrarTodos);



//------------------- BUSCA POR HORTIFRUTI ----------------------

const filtrarPorHortifruti = () => {

    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);

    valorTotalDosProduto(listaHortifruti)
}

// Selecionando botao em nosso HTML
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);




//------------------- BUSCA POR NOME ----------------------

const input = document.querySelector(".campoBuscaPorNome")

const campoBuscaPorNome = () => {

    const buscaPorNome = produtos.filter((produto) => {
        return produto.nome.toLocaleLowerCase() === input.value
    });

    montarListaProdutos(buscaPorNome);
    valorTotalDosProduto(buscaPorNome);
}

// Selecionando botao em nosso HTML
const botaoBuscaPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');

// Adicionando event listener de clique, e executando a função de filtro
botaoBuscaPorNome.addEventListener('click', campoBuscaPorNome);


//---------------------- BÔNUS ----------------------------------
//------------------- BUSCA POR LATICINIOS ----------------------

const filtrarPorLaticinio = () => {

    const listaLaticinio = produtos.filter((produto) => {
        return produto.secao === 'Laticinio';
    });

    montarListaProdutos(listaLaticinio);

    valorTotalDosProduto(listaLaticinio)
}

// Selecionando botao em nosso HTML
const botaoMostrarLaticinio = document.querySelector('.estiloGeralBotoes--filtrarLaticinio');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarLaticinio.addEventListener('click', filtrarPorLaticinio);

//------------------- BUSCA POR PANIFICADORA ----------------------

const filtrarPorPanificadora = () => {

    const listaPanificadora = produtos.filter((produto) => {
        return produto.secao === 'Panificadora';
    });

    montarListaProdutos(listaPanificadora);

    valorTotalDosProduto(listaPanificadora)
}

// Selecionando botao em nosso HTML
const botaoMostrarPanificadora = document.querySelector('.estiloGeralBotoes--filtrarPanificadora');

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarPanificadora.addEventListener('click', filtrarPorPanificadora);