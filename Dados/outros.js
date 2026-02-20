const dados_outros = [
    {
        titulo: "Deslobquear Windows 10/11 + Office",
        texto: `Texto `,
    },
    {
        titulo: "Comandos de CMD úteis",
        texto: `sfc /scannow : Verifica e repara arquivos corrompidos<br>
        chkdsk /f : Verifica e corrige erros no disco rígido`,
    },
]

const botao_out = document.getElementById("botao-outros");
const bloco_out = document.getElementById("bloco");

botao_out.onclick = function () {
    bloco_out.innerHTML = "";

    dados_outros.forEach(outro => {
        bloco_out.innerHTML += `
        <div style="display: block; width: 45%; height: 300px" class="animacao">
            <a class="base-outros titulo-outros">${outro.titulo}</a>
            <br>
            <a class="base-outros texto-outros">${outro.texto}</a>
        </div>
        `;
    });
};