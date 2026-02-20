export const dados_sites = [
    {
        nome: "RomsPure",
        descricao: "Baixar ROMS e Hack ROMS de diversos jogos com alta velocidade",
        imagem: "Icones/Sites/Romspure.png",
        link: "https://romspure.store/",
    },
    {
        nome: "Waifu2x",
        descricao: "Upscalling gratuito de imagens",
        imagem: "Icones/Sites/Waifu2x.png",
        link: "https://www.waifu2x.net/?lang=en",
    },
    {
        nome: "I Love PDF",
        descricao: "Editar PDF e converter arquivos",
        imagem: "Icones/Sites/I-Love-PDF.png",
        link: "https://pdfaid.com/pt",
    },
    {
        nome: "Canva",
        descricao: "Plataforma de criação, edição, modelos de imagens completa",
        imagem: "Icones/Sites/Canva.png",
        link: "https://www.canva.com/pt_br/",
    },
    {
        nome: "Pirate Bay",
        descricao: "Baixar torrent de praticamente qualquer coisa",
        imagem: "Icones/Sites/Pirate-Bay.png",
        link: "https://thepiratebay.org/index.html",
    },
    {
        nome: "Developer Roadmaps",
        descricao: "Vários guias para estudar desenvolvimento de software",
        imagem: "Icones/Sites/Roadmap.png",
        link: "https://roadmap.sh/",
    },
    {
        nome: "Convertio",
        descricao: "Converte inúmeros tipos de arquivos para outro tipo",
        imagem: "Icones/Sites/Convertio.png",
        link: "https://convertio.co/pt/",
    },
]

const botao_sit = document.getElementById("botao-sites");
const bloco_sit = document.getElementById("bloco");

botao_sit.onclick = function () {
    bloco_sit.innerHTML = "";

    dados_sites.forEach(site => {
        bloco_sit.innerHTML += `
            <div id="caixa" class="animacao">
                <img id="img-caixa" src="${site.imagem}">
                
                <a class="texto-descricao">
                    ${site.nome}
                </a>

                <a class="texto-descricao" style="font-weight: lighter; font-size: 14px; margin-bottom: auto;">
                    ${site.descricao}
                </a>

                <a href="${site.link}" target="_blank">
                    <button id="botao-acessar">
                        Visitar
                    </button>
                </a>
            </div>
        `;
    });
};

