export const dados_ferramentas = [
    {
        nome: "Visual Studio Code",
        descricao: "IDE com foco em Python, HTML, CSS e Javascript",
        imagem: "Icones/Ferramentas/Visual-Studio-Code.png",
        link: "https://code.visualstudio.com/download#",
    },
    {
        nome: "Visual Studio Community",
        descricao: "IDE com foco em C, C# e Web",
        imagem: "Icones/Ferramentas/Visual-Studio.png",
        link: "https://visualstudio.microsoft.com/pt-br/thank-you-downloading-visual-studio/?sku=Community&channel=Stable&version=VS18&source=VSLandingPage&passive=false&cid=2500",
    },
    {
        nome: "Apache Netbeans",
        descricao: "IDE voltado para o Java e suas aplicações",
        imagem: "Icones/Ferramentas/Apache-Netbeans.png",
        link: "https://github.com/codelerity/netbeans-packages/releases/download/v28-build1/Apache-NetBeans-28.exe",
    },
    {
        nome: "Android Studio",
        descricao: "IDE para aplicações Android com linguagem Kotlin",
        imagem: "Icones/Ferramentas/Android-Studio.png",
        link: "https://edgedl.me.gvt1.com/android/studio/install/2025.3.1.8/android-studio-panda1-patch1-windows.exe",
    },
    {
        nome: "MySQL Workbench",
        descricao: "Modelagem para banco de dados",
        imagem: "Icones/Ferramentas/MySQL-Workbench.png",
        link: "https://dev.mysql.com/get/Downloads/MySQLGUITools/mysql-workbench-community-8.0.46-winx64.msi",
    },
    {
        nome: "Adobe Photoshop",
        descricao: "Programa para edição de imagens",
        imagem: "Icones/Ferramentas/Adobe-Photoshop.png",
        link: "magnet:?xt=urn:btih:888EC8F53F80656B42997C3E7E19F598991DCFFB&dn=Adobe%20Photoshop%202020%20v21.2.2.289%20(x64)%20Pre-Cracked%20-%20Team%20Rjaa&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.bittor.pw%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337",
    },
    {
        nome: "Adobe Premiere Pro",
        descricao: "Programa para edição de vídeo",
        imagem: "Icones/Ferramentas/Adobe-Premerie.png",
        link: "magnet:?xt=urn:btih:3962713BEFF78D14FE50C951E9C545D9C40F180F&dn=Adobe%20Premiere%20Pro%202022%20v22.2.0.128%20(x64)%20%5B2022%2C%20MULTILANG%20%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.bittor.pw%3A1337%2Fannounce&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftorrent.gresille.org%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337",
    },
]

const botao_fer = document.getElementById("botao-ferramentas");
const bloco_fer = document.getElementById("bloco");

botao_fer.onclick = function () {
    bloco_fer.innerHTML = "";

    dados_ferramentas.forEach(ferramenta => {
        bloco_fer.innerHTML += `
            <div id="caixa" class="animacao">
                <img id="img-caixa" src="${ferramenta.imagem}">
                
                <a class="texto-descricao">
                    ${ferramenta.nome}
                </a>

                <a class="texto-descricao" style="font-weight: lighter; font-size: 14px;  margin-bottom: auto;">
                    ${ferramenta.descricao}
                </a>

                <a href="${ferramenta.link}" target="_blank">
                    <button id="botao-download">
                        Download
                    </button>
                </a>
            </div>
        `;
    });
};