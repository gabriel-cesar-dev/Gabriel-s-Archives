export const dados_emuladores = [
    {
        nome: "Mesen",
        descricao: "Emulador de NES, SNES, GB/GBC, GBA, PC Engine e WonderSwan",
        imagem: "Icones/Emuladores/Mesen.png",
        link: "https://github.com/SourMesen/Mesen2/releases/download/2.1.1/Mesen_2.1.1_Windows.zip",
    },
    {
        nome: "MelonDS",
        descricao: "Emulador de Nintendo DS",
        imagem: "Icones/Emuladores/MelonDS.png",
        link: "https://melonds.kuribo64.net/downloads/melonDS-1.1-windows-x86_64.zip",
    },
    {
        nome: "Citra",
        descricao: "Emulador de Nintendo 3DS ",
        imagem: "Icones/Emuladores/Citra.png",
        link: "https://archive.org/download/citra-emu_202403/citra-windows-msvc-20240303-0ff3440_nightly.zip",
    },
    {
        nome: "Duckstation",
        descricao: "Emulador de Playstation 1",
        imagem: "Icones/Emuladores/Duckstation.png",
        link: "https://github.com/stenzek/duckstation/releases/download/latest/duckstation-windows-x64-installer.exe",
    },
    {
        nome: "PCSX2",
        descricao: "Emulador de Playstation 2",
        imagem: "Icones/Emuladores/PCSX2.png",
        link: "https://github.com/PCSX2/pcsx2/releases/download/v2.6.3/PCSX2-v2.6.3-windows-x64-installer.exe",
    },
    {
        nome: "RPCS3",
        descricao: "Emulador de Playstation 3",
        imagem: "Icones/Emuladores/RPCS3.png",
        link: "https://github.com/RPCS3/rpcs3-binaries-win/releases/download/build-b30a44c1367635af0675f61504e1ca45263655c6/rpcs3-v0.0.39-18794-b30a44c1_win64_msvc.7z",
    },
    {
        nome: "Dolphin",
        descricao: "Emulador de Gamecube e Nintendo Wii",
        imagem: "Icones/Emuladores/Dolphin.png",
        link: "https://br.dolphin-emu.org/download/?ref=btn",
    },
    {
        nome: "PS1 Bios",
        descricao: "Bios para PS1 Americana",
        imagem: "Icones/Emuladores/PS1-Bios.png",
        link: "https://psbios.me/download/ps1/SCPH1001.BIN",
    },
    {
        nome: "PS2 Bios",
        descricao: "Bios para PS2 Americana",
        imagem: "Icones/Emuladores/PS2-Bios.png",
        link: "https://a.ps2biosonline.com/ps2-bios-usa.zip",
    },
    {
        nome: "PS3 Bios",
        descricao: "Sistema do PS3 Oficial",
        imagem: "Icones/Emuladores/PS3-Bios.png",
        link: "http://dbr01.ps3.update.playstation.net/update/ps3/image/br/2025_0305_c179ad173bbc08b55431d30947725a4b/PS3UPDAT.PUP",
    },
]


const botao_emu = document.getElementById("botao-emuladores");
const bloco_emu = document.getElementById("bloco");

botao_emu.onclick = function () {
    bloco_emu.innerHTML = "";

    dados_emuladores.forEach(emulador => {
        bloco_emu.innerHTML += `
            <div id="caixa" class="animacao">
                <img id="img-caixa" src="${emulador.imagem}">
                
                <a class="texto-descricao">
                    ${emulador.nome}
                </a>

                <a class="texto-descricao" style="font-weight: lighter; font-size: 14px;  margin-bottom: auto;">
                    ${emulador.descricao}
                </a>

                <a href="${emulador.link}" target="_blank">
                    <button id="botao-download">
                        Download
                    </button>
                </a>
            </div>
        `;
    });
};