export const dados_sistemas = [
    {
        nome: "Windows 10",
        descricao: "O sistema mais usado no mundo, fácil uso e compatível com diversos programas",
        imagem: "Icones/Sistemas/Windows.png",
        link: "https://go.microsoft.com/fwlink/?LinkId=2265055",
    },
    {
        nome: "Kali Linux",
        descricao: "Sistema voltado para Cibersegurança e Pentest",
        imagem: "Icones/Sistemas/Kali-Linux.png",
        link: "https://cdimage.kali.org/kali-2025.4/kali-linux-2025.4-installer-amd64.iso.torrent",
    },
    {
        nome: "Debian",
        descricao: "Linux baseado baseado na interface Android",
        imagem: "Icones/Sistemas/Debian.png",
        link: "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-13.3.0-amd64-netinst.iso",
    },
    {
        nome: "Zorin OS",
        descricao: "Linux baseado em Windows, rodando programas .exe e .msi",
        imagem: "Icones/Sistemas/Zorin-OS.png",
        link: "https://help.zorin.com/docs/getting-started/unable-to-download-zorin-os/"
    },
    {
        nome: "AMD Adrenalin Edition",
        descricao: "Driver para a GPU RX 7600, 26.1.1v WHQL",
        imagem: "Icones/Sistemas/AMD-Software.png",
        link: "https://drivers.amd.com/drivers/whql-amd-software-adrenalin-edition-26.1.1-win11-b.exe",
    },
]

const botao_sis = document.getElementById("botao-sistemas");
const bloco_sis = document.getElementById("bloco");

botao_sis.onclick = function () {
    bloco_sis.innerHTML = "";

    dados_sistemas.forEach(sistema => {
        bloco_sis.innerHTML += `
            <div id="caixa" class="animacao">
                <img id="img-caixa" src="${sistema.imagem}">
                
                <a class="texto-descricao">
                    ${sistema.nome}
                </a>

                <a class="texto-descricao" style="font-weight: lighter; font-size: 14px; margin-bottom: auto;">
                    ${sistema.descricao}
                </a>

                <a href="${sistema.link}" target="_blank">
                    <button id="botao-download">
                        Download
                    </button>
                </a>
            </div>
        `;
    });
};