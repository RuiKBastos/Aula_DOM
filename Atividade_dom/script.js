(function () {
// ==== Atividade 1: Sistema de Boas-Vindas ====
const nome = document.querySelector("#ativ1-nome");

const botao = document.querySelector("#ativ1-btnEntrar");

const resultado = document.querySelector("#ativ1-resultado");

botao.addEventListener("click", function() {

    const nomeDigitado = nome.value;

    resultado.textContent =
        `Olá,${nomeDigitado}! Seja bem-vindo ao SENAI C.O.!`;

});
})();

(function () {
// ==== Atividade 2: Sistema de Boas-Vindas ====
const titulo = document.querySelector("#ativ2-titulo");

const botao = document.querySelector("#ativ2-btnEntrar");

const textoOriginal = titulo.textContent
const textoNovo = "Desenvolvimento de Sistemas — SENAI"

botao.addEventListener("click", function() {

    if (textoOriginal === titulo.textContent) {
        titulo.textContent = textoNovo
    } else {
        titulo.textContent = textoOriginal
    }

});


})();

(function () {
// ==== Atividade 3: Sistema de Boas-Vindas ====
const botao = document.querySelector("#ativ3-btnEntrar");
const resultado = document.querySelector("#ativ3-resultado");

let contador = 0;

botao.addEventListener("click", function() {
    contador = contador + 1; // ou: contador++
    resultado.textContent = `Você clicou ${contador} vez(es)`;
});
})();

(function () {
// ==== Atividade 4: Sistema de Boas-Vindas ====
const titulo = document.querySelector("#ativ4-titulo");
const botao = document.querySelector("#ativ4-btnBotao");

botao.addEventListener("click", function() {

    titulo.textContent = "Status: Atendimento aberto"
    titulo.style.color = "green";
});
})();

(function () {
// ==== Atividade 5: Sistema de Boas-Vindas ====
const Produto = document.querySelector("#ativ5-objProduto");
const Quantidade = document.querySelector("#ativ5-objQuantidade");
const Preco = document.querySelector("#ativ5-objPreço");
const Resultado = document.querySelector("#ativ5-objResultado");
const botao = document.querySelector("#ativ5-btnEntrar");

botao.addEventListener("click", function () {

    const qtd = parseFloat(Quantidade.value);
    const preco = parseFloat(Preco.value);
    const Total = qtd * preco;

    if (isNaN(Total)) {
        Resultado.textContent = "Por favor, preencha Quantidade e Preço com números válidos.";
        return;
    }

    Resultado.textContent =
        `Olá! Você comprou ${qtd}x ${Produto.value} totalizando R$ ${Total.toFixed(2)}. Seja bem-vindo ao SENAI C.O.!`;
});
})();

(function () {
// ==== Atividade 6: Sistema de Boas-Vindas ====
const Nota1 = document.querySelector("#ativ6-objNota1");
const Nota2 = document.querySelector("#ativ6-objNota2");
const Nota3 = document.querySelector("#ativ6-objNota3");
const Resultado = document.querySelector("#ativ6-objResultado");
const botao = document.querySelector("#ativ6-btnEntrar");

botao.addEventListener("click", function () {

    const Nota_1 = parseFloat(Nota1.value);
    const Nota_2 = parseFloat(Nota2.value);
    const Nota_3 = parseFloat(Nota3.value);
    const Media = (Nota_1+ Nota_2 + Nota_3)/3;

    if (isNaN(Media)) {
        Resultado.textContent = "Por favor, preencha com números válidos.";
        return;
    }

    let ResultadoMedia

    if (Media >= 6 ) {
         ResultadoMedia = "Aprovado"
    } else {
         ResultadoMedia = "Reprovado"
    }

    Resultado.textContent =
        `Olá! Sua media foi ${Media.toFixed(2)}, você foi ${ResultadoMedia} `;
});
})();

(function () {
// ==== Atividade 7: Sistema de Boas-Vindas ====
const Nome = document.querySelector("#ativ7-objNome")
const E_mail = document.querySelector("#ativ7-objE-mail")
const Senha = document.querySelector("#ativ7-objSenha")

const Resultado = document.querySelector("#ativ7-objResultado");
const botao = document.querySelector("#ativ7-btnEntrar");

botao.addEventListener("click", function () {

    if (Nome.value.trim() === "" || E_mail.value.trim() === "" || Senha.value.trim() === "") {
        Resultado.textContent = "Preencha todos os campos.";
        return;
    } else {
    Resultado.textContent =
        "Cadastro realizado com sucesso!"        
    }
});
})();

(function () {
// ==== Atividade 8: Sistema de Boas-Vindas ====
const Produto = document.querySelector("#ativ8-objProduto");
const Quantidade_Disponivel = document.querySelector("#ativ8-objQuantidadeDisponivel");
const Quantidade_Solicitada = document.querySelector("#ativ8-objQuantidadeSolicitada");

const Resultado = document.querySelector("#ativ8-objResultado");
const botao = document.querySelector("#ativ8-btnEntrar");

botao.addEventListener("click", function () {

    const QntDisponivel = parseFloat(Quantidade_Disponivel.value)
    const QntSolicitada = parseFloat(Quantidade_Solicitada.value)


    if (QntDisponivel >= QntSolicitada) {
    Resultado.textContent =
        `Pedido disponível para separação.`;
    } else {
    Resultado.textContent =
        `Estoque insuficiente.`;        
    }

});
})();

(function () {
// ==== Atividade 9: Sistema de Boas-Vindas ====
const Tarefa = document.querySelector("#ativ9-objTarefa");
const Lista = document.querySelector("#ativ9-objLista");
const botao = document.querySelector("#ativ9-btnAdicionar");

botao.addEventListener("click", function () {

    const texto = Tarefa.value.trim();

    if (texto === "") {
        return;
    }

    const novoItem = document.createElement("li");
    novoItem.textContent = texto;

    Lista.appendChild(novoItem);

    Tarefa.value = "";
});
})();

(function () {
// ==== Atividade 10: Sistema de Boas-Vindas ====
const Produto = document.querySelector("#ativ10-objProduto");
const Preco = document.querySelector("#ativ10-objPreço");
const Desconto = document.querySelector("#ativ10-objDesconto");

const Resultado = document.querySelector("#ativ10-objResultado");
const botao = document.querySelector("#ativ10-btnEntrar");

botao.addEventListener("click", function () {

    const vlrProduto = parseFloat(Produto.value)
    const vlrPreco = parseFloat(Preco.value)
    const vlrDesconto = parseFloat(Desconto.value)

    let valorDesconto = (vlrPreco* vlrDesconto) / 100

    let precoFinal = vlrPreco - valorDesconto

    Resultado.textContent =
      `Produto ${vlrProduto} | Valor do desconto: ${valorDesconto.toFixed(2)}R$ | Preço final: ${precoFinal.toFixed(2)}R$`;
});
})();

(function () {
// ==== Atividade 11: Sistema de Boas-Vindas ====
const Usuario = document.querySelector("#ativ11-objUsuario");
const Senha = document.querySelector("#ativ11-objSenha");

const Resultado = document.querySelector("#ativ11-objResultado");
const botao = document.querySelector("#ativ11-btnEntrar");

const areaLogin = document.querySelector("#ativ11-areaLogin");
const areaBemVindo = document.querySelector("#ativ11-areaBemVindo");

botao.addEventListener("click", function () {

    const vlrUsuario = Usuario.value.trim();
    const vlrSenha = Senha.value.trim();

    if (vlrUsuario === "aluno" && vlrSenha === "1234") {
        Resultado.textContent = "Login realizado com sucesso!";

        areaLogin.style.display = "none";
        areaBemVindo.style.display = "block";

    } else {
        Resultado.textContent = "Usuário ou senha inválidos.";
    }

});
})();

(function () {
// ==== Atividade 12: Carrinho de Compras ====
const NomeProduto = document.querySelector("#ativ12-objNomeProduto");
const PrecoProduto = document.querySelector("#ativ12-objPrecoProduto");
const botaoAdicionar = document.querySelector("#ativ12-btnAdicionar");

const Carrinho = document.querySelector("#ativ12-objCarrinho");
const Quantidade = document.querySelector("#ativ12-objQuantidade");
const Total = document.querySelector("#ativ12-objTotal");


let carrinhoItens = [];

function atualizarResumo() {
    const quantidade = carrinhoItens.length;
    const total = carrinhoItens.reduce((soma, preco) => soma + preco, 0);

    Quantidade.textContent = `Quantidade de produtos: ${quantidade}`;
    Total.textContent = `Total da compra: R$ ${total.toFixed(2)}`;
}

botaoAdicionar.addEventListener("click", function () {

    const nome = NomeProduto.value.trim();
    const preco = parseFloat(PrecoProduto.value);

    if (nome === "" || isNaN(preco)) {
        alert("Preencha o nome e o preço corretamente.");
        return;
    }


    carrinhoItens.push(preco);


    const item = document.createElement("li");
    item.textContent = `${nome} — R$ ${preco.toFixed(2)} `;


    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.addEventListener("click", function () {
        carrinhoItens = carrinhoItens.filter(p => p !== preco);
        item.remove();
        atualizarResumo();
    });

    item.appendChild(botaoRemover);
    Carrinho.appendChild(item);

    atualizarResumo();

    
    NomeProduto.value = "";
    PrecoProduto.value = "";
});
})();

(function () {
// ==== Atividade 13: Cadastro de Alunos ====
const Nome = document.querySelector("#ativ13-objNome");
const Idade = document.querySelector("#ativ13-objIdade");
const Curso = document.querySelector("#ativ13-objCurso");
const botao = document.querySelector("#ativ13-btnCadastrar");

const CorpoTabela = document.querySelector("#ativ13-objCorpoTabela");

botao.addEventListener("click", function () {

    const nome = Nome.value.trim();
    const idade = parseFloat(Idade.value);
    const curso = Curso.value.trim();

    if (nome === "" || isNaN(idade) || curso === "") {
        alert("Preencha todos os campos corretamente.");
        return;
    }


    const linha = document.createElement("tr");


    const celulaNome = document.createElement("td");
    celulaNome.textContent = nome;

    const celulaIdade = document.createElement("td");
    celulaIdade.textContent = idade;

    const celulaCurso = document.createElement("td");
    celulaCurso.textContent = curso;

    const celulaAcao = document.createElement("td");
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.addEventListener("click", function () {
        linha.remove();
    });

    celulaAcao.appendChild(botaoExcluir);


    linha.appendChild(celulaNome);
    linha.appendChild(celulaIdade);
    linha.appendChild(celulaCurso);
    linha.appendChild(celulaAcao);


    CorpoTabela.appendChild(linha);


    Nome.value = "";
    Idade.value = "";
    Curso.value = "";
});
})();

(function () {
// ==== Atividade 14: Dashboard de Vendas ====
const Produto = document.querySelector("#ativ14-objProduto");
const Quantidade = document.querySelector("#ativ14-objQuantidade");
const ValorUnitario = document.querySelector("#ativ14-objValorUnitario");
const botaoAdicionar = document.querySelector("#ativ14-btnAdicionar");

const Pesquisa = document.querySelector("#ativ14-objPesquisa");
const CorpoTabela = document.querySelector("#ativ14-objCorpoTabela");

const Faturamento = document.querySelector("#ativ14-objFaturamento");
const ItensVendidos = document.querySelector("#ativ14-objItensVendidos");
const VendasRealizadas = document.querySelector("#ativ14-objVendasRealizadas");

// Array central: guarda TODAS as vendas com seus dados
let vendas = [];

function atualizarResumo() {
    const faturamentoTotal = vendas.reduce((soma, v) => soma + (v.quantidade * v.valorUnitario), 0);
    const itensTotal = vendas.reduce((soma, v) => soma + v.quantidade, 0);

    Faturamento.textContent = `Faturamento: R$ ${faturamentoTotal.toFixed(2)}`;
    ItensVendidos.textContent = `Itens vendidos: ${itensTotal}`;
    VendasRealizadas.textContent = `Vendas realizadas: ${vendas.length}`;
}

function criarLinha(venda) {
    const linha = document.createElement("tr");
    linha.dataset.produto = venda.produto.toLowerCase(); // usado depois no filtro

    const totalVenda = venda.quantidade * venda.valorUnitario;

    const celulaProduto = document.createElement("td");
    celulaProduto.textContent = venda.produto;

    const celulaQtd = document.createElement("td");
    celulaQtd.textContent = venda.quantidade;

    const celulaValor = document.createElement("td");
    celulaValor.textContent = venda.valorUnitario.toFixed(2);

    const celulaTotal = document.createElement("td");
    celulaTotal.textContent = totalVenda.toFixed(2);

    const celulaAcao = document.createElement("td");
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.addEventListener("click", function () {
        vendas = vendas.filter(v => v !== venda);
        linha.remove();
        atualizarResumo();
    });

    celulaAcao.appendChild(botaoExcluir);

    linha.appendChild(celulaProduto);
    linha.appendChild(celulaQtd);
    linha.appendChild(celulaValor);
    linha.appendChild(celulaTotal);
    linha.appendChild(celulaAcao);

    return linha;
}

botaoAdicionar.addEventListener("click", function () {

    const produto = Produto.value.trim();
    const quantidade = parseFloat(Quantidade.value);
    const valorUnitario = parseFloat(ValorUnitario.value);

    if (produto === "" || isNaN(quantidade) || isNaN(valorUnitario)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const novaVenda = { produto, quantidade, valorUnitario };
    vendas.push(novaVenda);

    const linha = criarLinha(novaVenda);
    CorpoTabela.appendChild(linha);

    atualizarResumo();

    Produto.value = "";
    Quantidade.value = "";
    ValorUnitario.value = "";
});

// --- Desafio: filtro de pesquisa ---
Pesquisa.addEventListener("input", function () {

    const termo = Pesquisa.value.trim().toLowerCase();
    const linhas = CorpoTabela.querySelectorAll("tr");

    linhas.forEach(function (linha) {
        const produtoDaLinha = linha.dataset.produto;

        if (produtoDaLinha.includes(termo)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });

});
})();

(function () {
// ==== Atividade 15: Dashboard de Vendas ====
const Produto = document.querySelector("#ativ15-objProduto");
const Quantidade = document.querySelector("#ativ15-objQuantidade");
const ValorUnitario = document.querySelector("#ativ15-objValorUnitario");
const botaoAdicionar = document.querySelector("#ativ15-btnAdicionar");

const Pesquisa = document.querySelector("#ativ15-objPesquisa");
const CorpoTabela = document.querySelector("#ativ15-objCorpoTabela");

const Faturamento = document.querySelector("#ativ15-objFaturamento");
const ItensVendidos = document.querySelector("#ativ15-objItensVendidos");
const VendasRealizadas = document.querySelector("#ativ15-objVendasRealizadas");

// Array central: guarda TODAS as vendas com seus dados
let vendas = [];

function atualizarResumo() {
    const faturamentoTotal = vendas.reduce((soma, v) => soma + (v.quantidade * v.valorUnitario), 0);
    const itensTotal = vendas.reduce((soma, v) => soma + v.quantidade, 0);

    Faturamento.textContent = `Faturamento: R$ ${faturamentoTotal.toFixed(2)}`;
    ItensVendidos.textContent = `Itens vendidos: ${itensTotal}`;
    VendasRealizadas.textContent = `Vendas realizadas: ${vendas.length}`;
}

function criarLinha(venda) {
    const linha = document.createElement("tr");
    linha.dataset.produto = venda.produto.toLowerCase(); // usado depois no filtro

    const totalVenda = venda.quantidade * venda.valorUnitario;

    const celulaProduto = document.createElement("td");
    celulaProduto.textContent = venda.produto;

    const celulaQtd = document.createElement("td");
    celulaQtd.textContent = venda.quantidade;

    const celulaValor = document.createElement("td");
    celulaValor.textContent = venda.valorUnitario.toFixed(2);

    const celulaTotal = document.createElement("td");
    celulaTotal.textContent = totalVenda.toFixed(2);

    const celulaAcao = document.createElement("td");
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.addEventListener("click", function () {
        vendas = vendas.filter(v => v !== venda);
        linha.remove();
        atualizarResumo();
    });

    celulaAcao.appendChild(botaoExcluir);

    linha.appendChild(celulaProduto);
    linha.appendChild(celulaQtd);
    linha.appendChild(celulaValor);
    linha.appendChild(celulaTotal);
    linha.appendChild(celulaAcao);

    return linha;
}

botaoAdicionar.addEventListener("click", function () {

    const produto = Produto.value.trim();
    const quantidade = parseFloat(Quantidade.value);
    const valorUnitario = parseFloat(ValorUnitario.value);

    if (produto === "" || isNaN(quantidade) || isNaN(valorUnitario)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const novaVenda = { produto, quantidade, valorUnitario };
    vendas.push(novaVenda);

    const linha = criarLinha(novaVenda);
    CorpoTabela.appendChild(linha);

    atualizarResumo();

    Produto.value = "";
    Quantidade.value = "";
    ValorUnitario.value = "";
});

// --- Desafio: filtro de pesquisa ---
Pesquisa.addEventListener("input", function () {

    const termo = Pesquisa.value.trim().toLowerCase();
    const linhas = CorpoTabela.querySelectorAll("tr");

    linhas.forEach(function (linha) {
        const produtoDaLinha = linha.dataset.produto;

        if (produtoDaLinha.includes(termo)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });(function () {
// ==== Atividade 1: Sistema de Boas-Vindas ====
const nome = document.querySelector("#ativ1-nome");

const botao = document.querySelector("#ativ1-btnEntrar");

const resultado = document.querySelector("#ativ1-resultado");

botao.addEventListener("click", function() {

    const nomeDigitado = nome.value;

    resultado.textContent =
        `Olá,${nomeDigitado}! Seja bem-vindo ao SENAI C.O.!`;

});
})();

(function () {
// ==== Atividade 2: Sistema de Boas-Vindas ====
const titulo = document.querySelector("#ativ2-titulo");

const botao = document.querySelector("#ativ2-btnEntrar");

const textoOriginal = titulo.textContent
const textoNovo = "Desenvolvimento de Sistemas — SENAI"

botao.addEventListener("click", function() {

    if (textoOriginal === titulo.textContent) {
        titulo.textContent = textoNovo
    } else {
        titulo.textContent = textoOriginal
    }

});


})();

(function () {
// ==== Atividade 3: Sistema de Boas-Vindas ====
const botao = document.querySelector("#ativ3-btnEntrar");
const resultado = document.querySelector("#ativ3-resultado");

let contador = 0;

botao.addEventListener("click", function() {
    contador = contador + 1; // ou: contador++
    resultado.textContent = `Você clicou ${contador} vez(es)`;
});
})();

(function () {
// ==== Atividade 4: Sistema de Boas-Vindas ====
const titulo = document.querySelector("#ativ4-titulo");
const botao = document.querySelector("#ativ4-btnBotao");

botao.addEventListener("click", function() {

    titulo.textContent = "Status: Atendimento aberto"
    titulo.style.color = "green";
});
})();

(function () {
// ==== Atividade 5: Sistema de Boas-Vindas ====
const Produto = document.querySelector("#ativ5-objProduto");
const Quantidade = document.querySelector("#ativ5-objQuantidade");
const Preco = document.querySelector("#ativ5-objPreço");
const Resultado = document.querySelector("#ativ5-objResultado");
const botao = document.querySelector("#ativ5-btnEntrar");

botao.addEventListener("click", function () {

    const qtd = parseFloat(Quantidade.value);
    const preco = parseFloat(Preco.value);
    const Total = qtd * preco;

    if (isNaN(Total)) {
        Resultado.textContent = "Por favor, preencha Quantidade e Preço com números válidos.";
        return;
    }

    Resultado.textContent =
        `Olá! Você comprou ${qtd}x ${Produto.value} totalizando R$ ${Total.toFixed(2)}. Seja bem-vindo ao SENAI C.O.!`;
});
})();

(function () {
// ==== Atividade 6: Sistema de Boas-Vindas ====
const Nota1 = document.querySelector("#ativ6-objNota1");
const Nota2 = document.querySelector("#ativ6-objNota2");
const Nota3 = document.querySelector("#ativ6-objNota3");
const Resultado = document.querySelector("#ativ6-objResultado");
const botao = document.querySelector("#ativ6-btnEntrar");

botao.addEventListener("click", function () {

    const Nota_1 = parseFloat(Nota1.value);
    const Nota_2 = parseFloat(Nota2.value);
    const Nota_3 = parseFloat(Nota3.value);
    const Media = (Nota_1+ Nota_2 + Nota_3)/3;

    if (isNaN(Media)) {
        Resultado.textContent = "Por favor, preencha com números válidos.";
        return;
    }

    let ResultadoMedia

    if (Media >= 6 ) {
         ResultadoMedia = "Aprovado"
    } else {
         ResultadoMedia = "Reprovado"
    }

    Resultado.textContent =
        `Olá! Sua media foi ${Media.toFixed(2)}, você foi ${ResultadoMedia} `;
});
})();

(function () {
// ==== Atividade 7: Sistema de Boas-Vindas ====
const Nome = document.querySelector("#ativ7-objNome")
const E_mail = document.querySelector("#ativ7-objE-mail")
const Senha = document.querySelector("#ativ7-objSenha")

const Resultado = document.querySelector("#ativ7-objResultado");
const botao = document.querySelector("#ativ7-btnEntrar");

botao.addEventListener("click", function () {

    if (Nome.value.trim() === "" || E_mail.value.trim() === "" || Senha.value.trim() === "") {
        Resultado.textContent = "Preencha todos os campos.";
        return;
    } else {
    Resultado.textContent =
        "Cadastro realizado com sucesso!"        
    }
});
})();

(function () {
// ==== Atividade 8: Sistema de Boas-Vindas ====
const Produto = document.querySelector("#ativ8-objProduto");
const Quantidade_Disponivel = document.querySelector("#ativ8-objQuantidadeDisponivel");
const Quantidade_Solicitada = document.querySelector("#ativ8-objQuantidadeSolicitada");

const Resultado = document.querySelector("#ativ8-objResultado");
const botao = document.querySelector("#ativ8-btnEntrar");

botao.addEventListener("click", function () {

    const QntDisponivel = parseFloat(Quantidade_Disponivel.value)
    const QntSolicitada = parseFloat(Quantidade_Solicitada.value)


    if (QntDisponivel >= QntSolicitada) {
    Resultado.textContent =
        `Pedido disponível para separação.`;
    } else {
    Resultado.textContent =
        `Estoque insuficiente.`;        
    }

});
})();

(function () {
// ==== Atividade 9: Sistema de Boas-Vindas ====
const Tarefa = document.querySelector("#ativ9-objTarefa");
const Lista = document.querySelector("#ativ9-objLista");
const botao = document.querySelector("#ativ9-btnAdicionar");

botao.addEventListener("click", function () {

    const texto = Tarefa.value.trim();

    if (texto === "") {
        return;
    }

    const novoItem = document.createElement("li");
    novoItem.textContent = texto;

    Lista.appendChild(novoItem);

    Tarefa.value = "";
});
})();

(function () {
// ==== Atividade 10: Sistema de Boas-Vindas ====
const Produto = document.querySelector("#ativ10-objProduto");
const Preco = document.querySelector("#ativ10-objPreço");
const Desconto = document.querySelector("#ativ10-objDesconto");

const Resultado = document.querySelector("#ativ10-objResultado");
const botao = document.querySelector("#ativ10-btnEntrar");

botao.addEventListener("click", function () {

    const vlrProduto = parseFloat(Produto.value)
    const vlrPreco = parseFloat(Preco.value)
    const vlrDesconto = parseFloat(Desconto.value)

    let valorDesconto = (vlrPreco* vlrDesconto) / 100

    let precoFinal = vlrPreco - valorDesconto

    Resultado.textContent =
      `Produto ${vlrProduto} | Valor do desconto: ${valorDesconto.toFixed(2)}R$ | Preço final: ${precoFinal.toFixed(2)}R$`;
});
})();

(function () {
// ==== Atividade 11: Sistema de Boas-Vindas ====
const Usuario = document.querySelector("#ativ11-objUsuario");
const Senha = document.querySelector("#ativ11-objSenha");

const Resultado = document.querySelector("#ativ11-objResultado");
const botao = document.querySelector("#ativ11-btnEntrar");

const areaLogin = document.querySelector("#ativ11-areaLogin");
const areaBemVindo = document.querySelector("#ativ11-areaBemVindo");

botao.addEventListener("click", function () {

    const vlrUsuario = Usuario.value.trim();
    const vlrSenha = Senha.value.trim();

    if (vlrUsuario === "aluno" && vlrSenha === "1234") {
        Resultado.textContent = "Login realizado com sucesso!";

        areaLogin.style.display = "none";
        areaBemVindo.style.display = "block";

    } else {
        Resultado.textContent = "Usuário ou senha inválidos.";
    }

});
})();

(function () {
// ==== Atividade 12: Carrinho de Compras ====
const NomeProduto = document.querySelector("#ativ12-objNomeProduto");
const PrecoProduto = document.querySelector("#ativ12-objPrecoProduto");
const botaoAdicionar = document.querySelector("#ativ12-btnAdicionar");

const Carrinho = document.querySelector("#ativ12-objCarrinho");
const Quantidade = document.querySelector("#ativ12-objQuantidade");
const Total = document.querySelector("#ativ12-objTotal");


let carrinhoItens = [];

function atualizarResumo() {
    const quantidade = carrinhoItens.length;
    const total = carrinhoItens.reduce((soma, preco) => soma + preco, 0);

    Quantidade.textContent = `Quantidade de produtos: ${quantidade}`;
    Total.textContent = `Total da compra: R$ ${total.toFixed(2)}`;
}

botaoAdicionar.addEventListener("click", function () {

    const nome = NomeProduto.value.trim();
    const preco = parseFloat(PrecoProduto.value);

    if (nome === "" || isNaN(preco)) {
        alert("Preencha o nome e o preço corretamente.");
        return;
    }


    carrinhoItens.push(preco);


    const item = document.createElement("li");
    item.textContent = `${nome} — R$ ${preco.toFixed(2)} `;


    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.addEventListener("click", function () {
        carrinhoItens = carrinhoItens.filter(p => p !== preco);
        item.remove();
        atualizarResumo();
    });

    item.appendChild(botaoRemover);
    Carrinho.appendChild(item);

    atualizarResumo();

    
    NomeProduto.value = "";
    PrecoProduto.value = "";
});
})();

(function () {
// ==== Atividade 13: Cadastro de Alunos ====
const Nome = document.querySelector("#ativ13-objNome");
const Idade = document.querySelector("#ativ13-objIdade");
const Curso = document.querySelector("#ativ13-objCurso");
const botao = document.querySelector("#ativ13-btnCadastrar");

const CorpoTabela = document.querySelector("#ativ13-objCorpoTabela");

botao.addEventListener("click", function () {

    const nome = Nome.value.trim();
    const idade = parseFloat(Idade.value);
    const curso = Curso.value.trim();

    if (nome === "" || isNaN(idade) || curso === "") {
        alert("Preencha todos os campos corretamente.");
        return;
    }


    const linha = document.createElement("tr");


    const celulaNome = document.createElement("td");
    celulaNome.textContent = nome;

    const celulaIdade = document.createElement("td");
    celulaIdade.textContent = idade;

    const celulaCurso = document.createElement("td");
    celulaCurso.textContent = curso;

    const celulaAcao = document.createElement("td");
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.addEventListener("click", function () {
        linha.remove();
    });

    celulaAcao.appendChild(botaoExcluir);


    linha.appendChild(celulaNome);
    linha.appendChild(celulaIdade);
    linha.appendChild(celulaCurso);
    linha.appendChild(celulaAcao);


    CorpoTabela.appendChild(linha);


    Nome.value = "";
    Idade.value = "";
    Curso.value = "";
});
})();

(function () {
// ==== Atividade 14: Dashboard de Vendas ====
const Produto = document.querySelector("#ativ14-objProduto");
const Quantidade = document.querySelector("#ativ14-objQuantidade");
const ValorUnitario = document.querySelector("#ativ14-objValorUnitario");
const botaoAdicionar = document.querySelector("#ativ14-btnAdicionar");

const Pesquisa = document.querySelector("#ativ14-objPesquisa");
const CorpoTabela = document.querySelector("#ativ14-objCorpoTabela");

const Faturamento = document.querySelector("#ativ14-objFaturamento");
const ItensVendidos = document.querySelector("#ativ14-objItensVendidos");
const VendasRealizadas = document.querySelector("#ativ14-objVendasRealizadas");

// Array central: guarda TODAS as vendas com seus dados
let vendas = [];

function atualizarResumo() {
    const faturamentoTotal = vendas.reduce((soma, v) => soma + (v.quantidade * v.valorUnitario), 0);
    const itensTotal = vendas.reduce((soma, v) => soma + v.quantidade, 0);

    Faturamento.textContent = `Faturamento: R$ ${faturamentoTotal.toFixed(2)}`;
    ItensVendidos.textContent = `Itens vendidos: ${itensTotal}`;
    VendasRealizadas.textContent = `Vendas realizadas: ${vendas.length}`;
}

function criarLinha(venda) {
    const linha = document.createElement("tr");
    linha.dataset.produto = venda.produto.toLowerCase(); // usado depois no filtro

    const totalVenda = venda.quantidade * venda.valorUnitario;

    const celulaProduto = document.createElement("td");
    celulaProduto.textContent = venda.produto;

    const celulaQtd = document.createElement("td");
    celulaQtd.textContent = venda.quantidade;

    const celulaValor = document.createElement("td");
    celulaValor.textContent = venda.valorUnitario.toFixed(2);

    const celulaTotal = document.createElement("td");
    celulaTotal.textContent = totalVenda.toFixed(2);

    const celulaAcao = document.createElement("td");
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.addEventListener("click", function () {
        vendas = vendas.filter(v => v !== venda);
        linha.remove();
        atualizarResumo();
    });

    celulaAcao.appendChild(botaoExcluir);

    linha.appendChild(celulaProduto);
    linha.appendChild(celulaQtd);
    linha.appendChild(celulaValor);
    linha.appendChild(celulaTotal);
    linha.appendChild(celulaAcao);

    return linha;
}

botaoAdicionar.addEventListener("click", function () {

    const produto = Produto.value.trim();
    const quantidade = parseFloat(Quantidade.value);
    const valorUnitario = parseFloat(ValorUnitario.value);

    if (produto === "" || isNaN(quantidade) || isNaN(valorUnitario)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const novaVenda = { produto, quantidade, valorUnitario };
    vendas.push(novaVenda);

    const linha = criarLinha(novaVenda);
    CorpoTabela.appendChild(linha);

    atualizarResumo();

    Produto.value = "";
    Quantidade.value = "";
    ValorUnitario.value = "";
});

// --- Desafio: filtro de pesquisa ---
Pesquisa.addEventListener("input", function () {

    const termo = Pesquisa.value.trim().toLowerCase();
    const linhas = CorpoTabela.querySelectorAll("tr");

    linhas.forEach(function (linha) {
        const produtoDaLinha = linha.dataset.produto;

        if (produtoDaLinha.includes(termo)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });

});
})();

(function () {
// ==== Atividade 15: Dashboard de Vendas ====
const Produto = document.querySelector("#ativ15-objProduto");
const Quantidade = document.querySelector("#ativ15-objQuantidade");
const ValorUnitario = document.querySelector("#ativ15-objValorUnitario");
const botaoAdicionar = document.querySelector("#ativ15-btnAdicionar");

const Pesquisa = document.querySelector("#ativ15-objPesquisa");
const CorpoTabela = document.querySelector("#ativ15-objCorpoTabela");

const Faturamento = document.querySelector("#ativ15-objFaturamento");
const ItensVendidos = document.querySelector("#ativ15-objItensVendidos");
const VendasRealizadas = document.querySelector("#ativ15-objVendasRealizadas");

// Array central: guarda TODAS as vendas com seus dados
let vendas = [];

function atualizarResumo() {
    const faturamentoTotal = vendas.reduce((soma, v) => soma + (v.quantidade * v.valorUnitario), 0);
    const itensTotal = vendas.reduce((soma, v) => soma + v.quantidade, 0);

    Faturamento.textContent = `Faturamento: R$ ${faturamentoTotal.toFixed(2)}`;
    ItensVendidos.textContent = `Itens vendidos: ${itensTotal}`;
    VendasRealizadas.textContent = `Vendas realizadas: ${vendas.length}`;
}

function criarLinha(venda) {
    const linha = document.createElement("tr");
    linha.dataset.produto = venda.produto.toLowerCase(); // usado depois no filtro

    const totalVenda = venda.quantidade * venda.valorUnitario;

    const celulaProduto = document.createElement("td");
    celulaProduto.textContent = venda.produto;

    const celulaQtd = document.createElement("td");
    celulaQtd.textContent = venda.quantidade;

    const celulaValor = document.createElement("td");
    celulaValor.textContent = venda.valorUnitario.toFixed(2);

    const celulaTotal = document.createElement("td");
    celulaTotal.textContent = totalVenda.toFixed(2);

    const celulaAcao = document.createElement("td");
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.addEventListener("click", function () {
        vendas = vendas.filter(v => v !== venda);
        linha.remove();
        atualizarResumo();
    });

    celulaAcao.appendChild(botaoExcluir);

    linha.appendChild(celulaProduto);
    linha.appendChild(celulaQtd);
    linha.appendChild(celulaValor);
    linha.appendChild(celulaTotal);
    linha.appendChild(celulaAcao);

    return linha;
}

botaoAdicionar.addEventListener("click", function () {

    const produto = Produto.value.trim();
    const quantidade = parseFloat(Quantidade.value);
    const valorUnitario = parseFloat(ValorUnitario.value);

    if (produto === "" || isNaN(quantidade) || isNaN(valorUnitario)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const novaVenda = { produto, quantidade, valorUnitario };
    vendas.push(novaVenda);

    const linha = criarLinha(novaVenda);
    CorpoTabela.appendChild(linha);

    atualizarResumo();

    Produto.value = "";
    Quantidade.value = "";
    ValorUnitario.value = "";
});

// --- Desafio: filtro de pesquisa ---
Pesquisa.addEventListener("input", function () {

    const termo = Pesquisa.value.trim().toLowerCase();
    const linhas = CorpoTabela.querySelectorAll("tr");

    linhas.forEach(function (linha) {
        const produtoDaLinha = linha.dataset.produto;

        if (produtoDaLinha.includes(termo)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });

});
})();

});
})();

// ==== Navegação entre atividades ====
function mostrarAtividade(n) {
    document.querySelectorAll(".atividade-pagina").forEach(function (sec) {
        sec.style.display = "none";
    });
    document.querySelectorAll(".nav-btn").forEach(function (btn) {
        btn.classList.remove("ativa");
    });
    document.getElementById("ativ" + n + "-wrapper").style.display = "block";
    document.querySelector('.nav-btn[data-ativ="' + n + '"]').classList.add("ativa");
}