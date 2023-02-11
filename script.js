// pegar os elementos HTML via DOM
const somaAeB = document.getElementById('somaAeB');
const subtracaoAmenosB = document.getElementById('subtracaoAmenosB');
const subtracaoBmenosA = document.getElementById('subtracaoBmenosA');

const multiplicacaoAeB = document.getElementById('multiplicacaoAeB');
const divisaoAporB = document.getElementById('divisaoAporB');
const divisaoBporA = document.getElementById('divisaoBporA');

const potenciaAnaBaseB = document.getElementById('potenciaAnaBaseB');
const potenciaBnaBaseA = document.getElementById('potenciaBnaBaseA');
const raizQuadradaA = document.getElementById('raizQuadradaA');

const raizQuadradaB = document.getElementById('raizQuadradaB');
const fatorialA = document.getElementById('fatorialA');
const fatorialB = document.getElementById('fatorialB');

const porcentagemAemB = document.getElementById('porcentagemAemB');
const porcentagemBemA = document.getElementById('porcentagemBemA');
const mediaAeB = document.getElementById('mediaAeB');

somaAeB.innerHTML = 0;
subtracaoAmenosB.innerHTML = 0;
subtracaoBmenosA.innerHTML = 0;

multiplicacaoAeB.innerHTML = 0;
divisaoAporB.innerHTML = 0;
divisaoBporA.innerHTML = 0;

potenciaAnaBaseB.innerHTML = 0;
potenciaBnaBaseA.innerHTML = 0;
raizQuadradaA.innerHTML = 0;

raizQuadradaB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;

porcentagemAemB.innerHTML = 0;
porcentagemBemA.innerHTML = 0;
mediaAeB.innerHTML = 0;

// criar as funções dos cálculos matemáticos
function calcularSomaAeB (a,b) {
    return a + b;
}

function calcularSubtracaoAmenosB (a,b) {
    return a - b;
}

function calcularSubtracaoBmenosA (b,a) {
    return b - a;
}

function calcularMultiplicacaoAeB (a,b) {
    return a * b;
}

function calcularDivisaoAporB (a,b) {
    return (a / b).toFixed(2);
}

function calcularDivisaoBporA (b,a) {
    return (b / a).toFixed(2);
}

function calcularPotenciaAnaBaseB (a,b) {
    return Math.pow(a,b);
}

function calcularPotenciaBnaBaseA (b,a) {
    return Math.pow(b,a);
}

function calcularRaizQuadradaA (a) {
    return Math.sqrt(a).toFixed(2);
}

function calcularRaizQuadradaB (b) {
    return Math.sqrt(b).toFixed(2);
}

function calcularFatorialA (a) {
    var fatorialA = a;
        while (a > 1) { 
            a--;
            fatorialA *= a;
        }
    return fatorialA;
    }

function calcularFatorialB (b) {
    var fatorialB = b;
        while (b > 1) { 
            b--;
            fatorialB *= b;
        }
    return fatorialB;
}

function calcularPorcentagemAemB (a,b) {
    return ((a/b)*100).toFixed(1) + '%';
}

function calcularPorcentagemBemA (b,a) {
    return ((b/a)*100).toFixed(1) + '%';
}

function calcularMediaAeB (a,b) {
    return (a + b) / 2;
}

// fazer uma função para fazer os cálculos
function calcular() {
    const inputA = document.getElementById('primeiroNumero').value;
    const inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);

    somaAeB.innerHTML = calcularSomaAeB(a,b);
    subtracaoAmenosB.innerHTML = calcularSubtracaoAmenosB(a,b);
    subtracaoBmenosA.innerHTML = calcularSubtracaoBmenosA(b,a);

    multiplicacaoAeB.innerHTML = calcularMultiplicacaoAeB(a,b);
    divisaoAporB.innerHTML = calcularDivisaoAporB(a,b);
    divisaoBporA.innerHTML = calcularDivisaoBporA(b,a);

    potenciaAnaBaseB.innerHTML = calcularPotenciaAnaBaseB(a,b);
    potenciaBnaBaseA.innerHTML = calcularPotenciaBnaBaseA(b,a);
    raizQuadradaA.innerHTML = calcularRaizQuadradaA(a);

    raizQuadradaB.innerHTML = calcularRaizQuadradaB(b);
    fatorialA.innerHTML = calcularFatorialA(a);
    fatorialB.innerHTML = calcularFatorialB(b);

    porcentagemAemB.innerHTML = calcularPorcentagemAemB(a,b);
    porcentagemBemA.innerHTML = calcularPorcentagemBemA(b,a);
    mediaAeB.innerHTML = calcularMediaAeB(a,b);
}