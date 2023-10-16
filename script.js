document.addEventListener("DOMContentLoaded", function () {
    // Suponha que esses são os dados fictícios
    var dados = [
        { nome: "Exemplo 1", idade: 30, cidade: "Cidade 1" },
        { nome: "Exemplo 2", idade: 25, cidade: "Cidade 2" },
        { nome: "Exemplo 3", idade: 35, cidade: "Cidade 3" },
    ];

    var dataContainer = document.getElementById("data-container");

    // Criar uma tabela para exibir os dados
    var table = document.createElement("table");
    table.classList.add("data-table");

    // Cabeçalho da tabela
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Nome</th><th>Idade</th><th>Cidade</th>";
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Corpo da tabela
    var tbody = document.createElement("tbody");
    for (var i = 0; i < dados.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + dados[i].nome + "</td>" +
                       "<td>" + dados[i].idade + " anos</td>" +
                       "<td>" + dados[i].cidade + "</td>";
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    dataContainer.appendChild(table);
});
