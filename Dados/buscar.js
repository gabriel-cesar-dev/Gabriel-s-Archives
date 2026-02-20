import { dados_emuladores } from "./emuladores.js";
import { dados_ferramentas } from "./ferramentas.js";
import { dados_jogos } from "./jogos.js";
import { dados_plataformas } from "./plataformas.js";
import { dados_programas } from "./programas.js";
import { dados_sistemas } from "./sistemas.js";
import { dados_sites } from "./sites.js";

const barra_pesquisa = document.getElementById("barra-pesquisa");
const botao_pesquisa = document.getElementById("botao-pesquisa");
const bloco = document.getElementById("bloco");

const buscar = function (item) { 
    bloco.innerHTML += `
            <div id="caixa" class="animacao">
                <img id="img-caixa" src="${item.imagem}">
                
                <a class="texto-descricao">
                    ${item.nome}
                </a>

                <a class="texto-descricao" style="font-weight: lighter; font-size: 14px; margin-bottom: auto;">
                    ${item.descricao}
                </a>

                <a href="${item.link}" target="_blank">
                    <button id="botao-download">
                        Download
                    </button>
                </a>
            </div>
        `;
}

const buscar_site = function (item) { 
    bloco.innerHTML += `
            <div id="caixa" class="animacao">
                <img id="img-caixa" src="${item.imagem}">
                
                <a class="texto-descricao">
                    ${item.nome}
                </a>

                <a class="texto-descricao" style="font-weight: lighter; font-size: 14px; margin-bottom: auto;">
                    ${item.descricao}
                </a>

                <a href="${item.link}" target="_blank">
                    <button id="botao-acessar">
                        Visitar
                    </button>
                </a>
            </div>
        `;
}

botao_pesquisa.onclick = function() {

    bloco.innerHTML = ``;

    dados_emuladores.forEach(item => {
        const nomeItem = item.nome.toLowerCase().trim();
        const busca = barra_pesquisa.value.toLowerCase().trim();

        if (nomeItem.includes(busca)) {
            buscar(item);
        }
    });

    dados_ferramentas.forEach(item => {
        const nomeItem = item.nome.toLowerCase().trim();
        const busca = barra_pesquisa.value.toLowerCase().trim();

        if (nomeItem.includes(busca)) {
            buscar(item);
        }
    });

    dados_jogos.forEach(item => {
        const nomeItem = item.nome.toLowerCase().trim();
        const busca = barra_pesquisa.value.toLowerCase().trim();

        if (nomeItem.includes(busca)) {
            buscar(item);
        }
    });

   dados_plataformas.forEach(item => {
        const nomeItem = item.nome.toLowerCase().trim();
        const busca = barra_pesquisa.value.toLowerCase().trim();

        if (nomeItem.includes(busca)) {
            buscar(item);
        }
    });

    dados_programas.forEach(item => {
        const nomeItem = item.nome.toLowerCase().trim();
        const busca = barra_pesquisa.value.toLowerCase().trim();

        if (nomeItem.includes(busca)) {
            buscar(item);
        }
    });

   dados_sistemas.forEach(item => {
        const nomeItem = item.nome.toLowerCase().trim();
        const busca = barra_pesquisa.value.toLowerCase().trim();

        if (nomeItem.includes(busca)) {
            buscar(item);
        }
    });

    dados_sites.forEach(item => {
        const nomeItem = item.nome.toLowerCase().trim();
        const busca = barra_pesquisa.value.toLowerCase().trim();

        if (nomeItem.includes(busca)) {
            buscar_site(item);
        }
    });
}