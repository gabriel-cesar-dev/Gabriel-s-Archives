export const dados_programas = [
    {
        nome: "CPU-Z",
        descricao: "Informações detalhadas sobre processador, placa-mãe e memória do PC.",
        imagem: "Icones/Programas/CPU-Z.png",
        link: "https://download.cpuid.com/cpu-z/cpu-z_2.18-en.exe",
    },
    {
        nome: "DS4 Windows",
        descricao: "Permite usar controles de PlayStation no Windows com facilidade.",
        imagem: "Icones/Programas/DS4-Windows.png",
        link: "https://ds4-windows.com/download/official/#",
    },
    {
        nome: "Google Chrome",
        descricao: "Navegador de internet rápido, seguro e integrado ao ecossistema Google.",
        imagem: "Icones/Programas/Google-Chrome.png",
        link: "https://www.google.com/intl/pt-PT/chrome/next-steps.html?brand=OZZY&ds_kid=10478623183&gclsrc=aw.ds&gad_source=1&gad_campaignid=23325331584&gbraid=0AAAAAoY3CA5a3V87zLl81XIT3FgW67tvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1ApFpkuu11hgR_DRAlPcZHPH-qzLOgdupkJ_yWrwBa5W4nZOcsw0CBoCKwEQAvD_BwE",
    },
    {
        nome: "Hamachi",
        descricao: "Cria redes virtuais seguras para jogar em LAN via internet.",
        imagem: "Icones/Programas/Hamachi.png",
        link: "https://net.geo.opera.com/opera/stable/windows?utm_source=innova&utm_medium=apb&utm_campaign=dit",
    },
    {
        nome: "Libre Office",
        descricao: "Suíte de escritório gratuita para textos, planilhas e apresentações.",
        imagem: "Icones/Programas/Libre-Office.png",
        link: "https://www.libreoffice.org/donate/dl/win-x86_64/26.2.0/pt-BR/LibreOffice_26.2.0_Win_x86-64.msi",
    },
    {
        nome: "Bitdefender",
        descricao: "Antivírus focado na remoção de malwares e ameaças digitais.",
        imagem: "Icones/Programas/Bitdefender.png",
        link: "https://www.bitdefender.com/en-us/consumer/thank-you",
    },
    {
        nome: "MSI Afterburner",
        descricao: "Monitoramento e overclocking de placas de vídeo em tempo real.",
        imagem: "Icones/Programas/MSI-Afterburner.png",
        link: "https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1771505260~acl=/*~hmac=0a3db737d18194d6d6294feb77bb6a79ccfd932b17bf08eaa15d019db363491c",
    },
    {
        nome: "qBittorrent",
        descricao: "Cliente de torrent leve, gratuito e sem anúncios intrusivos.",
        imagem: "Icones/Programas/qBittorrent.png",
        link: "https://sourceforge.net/projects/qbittorrent/files/qbittorrent-win32/qbittorrent-5.1.4/qbittorrent_5.1.4_x64_setup.exe/download",
    },
    {
        nome: "Virtual Box",
        descricao: "Cria e executa máquinas virtuais com diversos sistemas operacionais.",
        imagem: "Icones/Programas/Virtual-Box.png",
        link: "https://download.virtualbox.org/virtualbox/7.2.6/VirtualBox-7.2.6a-172322-Win.exe",
    },
    {
        nome: "VLC Media Player Classic",
        descricao: "Reprodutor de mídia universal que suporta vários arquivos.",
        imagem: "Icones/Programas/VLC-Media-Player.png",
        link: "https://get.videolan.org/vlc/3.0.23/win32/vlc-3.0.23-win32.exe",
    },
    {
        nome: "Rufus",
        descricao: "Crie drives USB inicializáveis de forma fácil",
        imagem: "Icones/Programas/Rufus.png",
        link: "https://github.com/pbatard/rufus/releases/download/v4.13/rufus-4.13.exe",
    },
]

const botao_pro = document.getElementById("botao-programas");
const bloco_pro = document.getElementById("bloco");

botao_pro.onclick = function () {
    bloco_pro.innerHTML = "";

    dados_programas.forEach(programa => {
        bloco_pro.innerHTML += `
            <div id="caixa" class="animacao">
                <img id="img-caixa" src="${programa.imagem}">
                
                <a class="texto-descricao">
                    ${programa.nome}
                </a>

                <a class="texto-descricao" style="font-weight: lighter; font-size: 14px; margin-bottom: auto;">
                    ${programa.descricao}
                </a>

                <a href="${programa.link}" target="_blank">
                    <button id="botao-download">
                        Download
                    </button>
                </a>
            </div>
        `;
    });
};