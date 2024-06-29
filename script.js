const formulario = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const valorA = parseInt(campoA.value);
    const valorB = parseInt(campoB.value);

    if (valorB > valorA) {
        mensagem.textContent = "Parabéns! O número B é maior que o número A.";
    } else {
        mensagem.textContent = "Erro: O número B deve ser maior que o número A.";
        mensagem.style.color = 'red'; // Mensagem negativa (vermelho)
    }
});
