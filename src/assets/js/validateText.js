let finalResult = document.querySelector("#showResult");

const getBaseText = () => document.querySelector("#textRecived").value;

const showMessageInTheWindow = (htmlIdentifier, classList, message) => {
    let htmlElement = document.getElementById(htmlIdentifier);
    htmlElement.innerHTML = message;
    classList.forEach(element => htmlElement.classList.add(element));
}

const validateNullFields = text => {
    if (!text.trim()) {
        showMessageInTheWindow("showResult", ["result--final"], "campo vazio.");
        alert("Campos vazios!");
        return true;
    }
    else return false;
}

const RegexToValidateBiggerAndSpecialCaracteres = text => {
    let regexValidation = /[^a-z\s\n]/;

    if (regexValidation.test(text)) {
        showMessageInTheWindow("showResult", ["result--final"], "somente são aceitos caracteres sem minusculos e sem acento.");
        alert("Somente são aceitos caracteres sem minusculos e sem acento!");
        return true;
    }
    else return false;
}

const createResponsiveTextArea = txt => {
    let resultText = document.createElement("textarea");
    resultText.classList.add("resize", "textRecived", "resizeTextArea");
    resultText.id = 'finalTextGenerated';
    resultText.readOnly = true;
    resultText.value = `${txt}\n`;
    return resultText;
}

const resetFinalResult = () => finalResult.innerHTML = "";

const modifyText = (text, substitutions) => {
    resetFinalResult();
    let modifiedText = text;
    substitutions.forEach(substitution => modifiedText = modifiedText.replaceAll(substitution[0], substitution[1]));
    finalResult.appendChild(createResponsiveTextArea(modifiedText));
}

const criptographText = text => {
    const substitutions = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    modifyText(text, substitutions);
}

const decriptographText = text => {
    const substitutions = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    modifyText(text, substitutions);
}

const validateText = textRecived => {
    validateNullFields(textRecived);
    RegexToValidateBiggerAndSpecialCaracteres(textRecived);
}

const handleTextTransformation = (transformationFunction) => {
    let baseText = getBaseText();
    validateText(baseText);
    transformationFunction(baseText);
}

document.querySelector("#criptographText").addEventListener("click", () => handleTextTransformation(criptographText));
document.querySelector("#decriptographText").addEventListener("click", () => handleTextTransformation(decriptographText));