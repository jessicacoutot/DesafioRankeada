let resultadoRankeadas = verificarVitorias(70, 12);
let nivelRankeadas = verificarNivelRankeadas(resultadoRankeadas);


function verificarVitorias(vitorias, derrotas) {
    let SaldoRankeadas = vitorias - derrotas;
    return SaldoRankeadas;
}

function verificarNivelRankeadas(resultadoRankeadas) {
    switch (true) {
        case (resultadoRankeadas <= 10):
            return "Ferro";
        case (resultadoRankeadas > 10 && resultadoRankeadas <= 20):
            return "Bronze";
        case (resultadoRankeadas > 20 && resultadoRankeadas <= 50):
            return "Prata";
        case (resultadoRankeadas > 50 && resultadoRankeadas <= 80):
            return "Ouro";
        case (resultadoRankeadas > 80 && resultadoRankeadas <= 90):
            return "Diamante";
        case (resultadoRankeadas > 90 && resultadoRankeadas <= 100):
            return "Lendário";
        case (resultadoRankeadas >= 101):
            return "Imortal";
    }
}

console.log(`O Herói tem de saldo de ${resultadoRankeadas} vitórias e está no nível de ${nivelRankeadas}`);
