console.log("O script_cards.js começou a rodar!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("O HTML terminou de carregar. Procurando elementos...");


    const imagens = document.querySelectorAll('.carrossel__imagem');
    const botaoEsquerdo = document.getElementById('botao-esquerdo');
    const botaoDireito = document.getElementById('botao-direito');

    console.log(`Encontrei ${imagens.length} imagens.`);
    if (botaoEsquerdo) console.log("Botão Esquerdo encontrado.");
    else console.error("ERRO: Botão Esquerdo NÃO encontrado. Verifique o ID no HTML.");
    
    if (botaoDireito) console.log("Botão Direito encontrado.");
    else console.error("ERRO: Botão Direito NÃO encontrado. Verifique o ID no HTML.");


    let indiceAtual = 0;

    function mostrarImagem(indice) {
        imagens.forEach(img => {
            img.style.display = 'none';
        });

        if (imagens[indice]) {
            imagens[indice].style.display = 'block';
        }
    }

    if (imagens.length > 0) {
        mostrarImagem(0);

        if (botaoDireito) {
            botaoDireito.addEventListener('click', () => {
                console.log("Clicou na direita");
                indiceAtual++;
                if (indiceAtual >= imagens.length) {
                    indiceAtual = 0;
                }
                mostrarImagem(indiceAtual);
            });
        }

        if (botaoEsquerdo) {
            botaoEsquerdo.addEventListener('click', () => {
                console.log("Clicou na esquerda");
                indiceAtual--;
                if (indiceAtual < 0) {
                    indiceAtual = imagens.length - 1;
                }
                mostrarImagem(indiceAtual);
            });
        }
    } else {
        console.warn("AVISO: Nenhuma imagem com a classe .carrossel__imagem foi encontrada.");
    }

    const menuIcon = document.getElementById('icone__menu');
    const menuNav = document.querySelector('.menu');
    if (menuIcon && menuNav) {
        menuIcon.addEventListener('click', () => {
            menuNav.classList.toggle('menu--ativo');
        });
    }
});

