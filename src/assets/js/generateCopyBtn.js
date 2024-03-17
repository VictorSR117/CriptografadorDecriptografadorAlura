const generateCopyBtn = () => {
    let finalResult = document.querySelector("#showResult");
    let copyBtn = document.createElement("button");
    copyBtn.classList.add('btn--light-blue', 'smaller-btn');
    copyBtn.textContent = "Copiar";
    copyBtn.id = "copyBtn";
    finalResult.appendChild(copyBtn);
}

const copybtnFuncionality = txt => {
    let btn = document.getElementById("copyBtn");
    btn.addEventListener("click", () => {
        navigator.clipboard.writeText(txt).then(() => {
            let originalText = btn.innerText;
            btn.innerText = "Copiado!";
            setTimeout(() => btn.textContent = originalText, 1000);
        });
    });
}

const includeCopyBtn = elementHtml => {
    document.querySelector(elementHtml).addEventListener("click", async () => {
        let txt = document.getElementById("finalTextGenerated").value;
        generateCopyBtn();
        copybtnFuncionality(txt);
    });
}

includeCopyBtn("#criptographText");
includeCopyBtn("#decriptographText");