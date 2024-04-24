document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const email = urlParams.get('email');
    const mensagem = urlParams.get('mensagem');

    const nomeResultado = document.getElementById('nomeResultado');
    const emailResultado = document.getElementById('emailResultado');
    const mensagemResultado = document.getElementById('mensagemResultado');

    nomeResultado.textContent += nome;
    emailResultado.textContent += email;
    mensagemResultado.textContent += mensagem;
});
