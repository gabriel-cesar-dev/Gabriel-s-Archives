export const dados_plataformas = [
    {
        nome: "What’sApp Desktop",
        descricao: "Versão de computador vinculado e atualizado em tempo real com o celular",
        imagem: "Icones/Plataforma/Whatsapp.png",
        link: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=website_cta_psi",
    },
    {
        nome: "Telegram Desktop",
        descricao: "Versão de computador vinculado e atualizado em tempo real com o celular",
        imagem: "Icones/Plataforma/Telegram.png",
        link: "https://telegram.org/dl/desktop/win64",
    },
    {
        nome: "Discord",
        descricao: "Versão de computador vinculado e atualizado em tempo real com o celular",
        imagem: "Icones/Plataforma/Discord.png",
        link: "https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64",
    },
    {
        nome: "Steam",
        descricao: "Loja de games irados",
        imagem: "Icones/Plataforma/Steam.png",
        link: "https://cdn.fastly.steamstatic.com/client/installer/SteamSetup.exe",
    },
]

const botao_pla = document.getElementById("botao-plataformas");
const bloco_pla = document.getElementById("bloco");

botao_pla.onclick = function () {
    bloco_pla.innerHTML = "";

    dados_plataformas.forEach(plataforma => {
        bloco_pla.innerHTML += `
            <div id="caixa" class="animacao">
                <img id="img-caixa" src="${plataforma.imagem}">
                
                <a class="texto-descricao">
                    ${plataforma.nome}
                </a>

                <a class="texto-descricao" style="font-weight: lighter; font-size: 14px;  margin-bottom: auto;">
                    ${plataforma.descricao}
                </a>

                <a href="${plataforma.link}" target="_blank">
                    <button id="botao-download">
                        Download
                    </button>
                </a>
            </div>
        `;
    });
};