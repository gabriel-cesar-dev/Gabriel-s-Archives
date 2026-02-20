export const dados_jogos = [
    {
        nome: "Clone Hero",
        descricao: "CH Team, 2017",
        imagem: "Icones/Jogos/Clone-Hero.png",
        link: "",
    },
    {
        nome: "Terraria",
        descricao: "Re-Logic, 2011",
        imagem: "Icones/Jogos/Terraria.png",
        link: "",
    },
    {
        nome: "Slime Rancher",
        descricao: "Monomi Park, 2018",
        imagem: "Icones/Jogos/Slime-Rancher.png",
        link: "",
    },
    {
        nome: "Elden Ring",
        descricao: "Fromsoftware, 2022",
        imagem: "Icones/Jogos/Elden-Ring.png",
        link: "",
    },
    {
        nome: "Resident Evil 4 Remake",
        descricao: "Capcom, 2023",
        imagem: "Icones/Jogos/Resident-Evil-4-Remake.png",
        link: "",
    },
    {
        nome: "Fallout 4 G.O.T.Y",
        descricao: "Bethesda, 2015",
        imagem: "Icones/Jogos/Fallout-4.png",
        link: "",
    },
]

const botao_gms = document.getElementById("botao-jogos");
const bloco_gms = document.getElementById("bloco");

botao_gms.onclick = function () {
    bloco_gms.innerHTML = "";

    dados_jogos.forEach(jogo => {
        bloco_gms.innerHTML += `
            <div id="caixa" class="animacao">
                <img id="img-caixa" src="${jogo.imagem}">
                
                <a class="texto-descricao">
                    ${jogo.nome}
                </a>

                <a class="texto-descricao" style="font-weight: lighter; font-size: 14px;  margin-bottom: auto;">
                    ${jogo.descricao}
                </a>

                <a href="${jogo.link}" target="_blank">
                    <button id="botao-download">
                        Download
                    </button>
                </a>
            </div>
        `;
    });
};