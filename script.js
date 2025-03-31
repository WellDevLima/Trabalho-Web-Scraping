// Função que altera o nome de areas da T.I no site www.alura.com.br

function mudarTitulo(area_ti, i) {
    let titulos = document.getElementsByClassName("categories__link__category-name--home");
    if (i < titulos.length) {
        titulos[i].innerHTML = area_ti;
    }
}
    let novasAreas = ["Goleiro", "Zagueiro", "Lateral", "Meio-Campo", "Atacante", "Volante", "Gandula", "Juiz"];
    for (let i = 0; i < novasAreas.length; i++) {
    mudarTitulo(novasAreas[i], i);
}
