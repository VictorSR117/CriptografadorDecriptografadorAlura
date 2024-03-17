const autoResize = () => {
    let textarea = document.querySelector(".resizeTextArea");

    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
}

document.addEventListener('DOMContentLoaded', () => {
    let textarea = document.querySelector(".resizeTextArea");

    textarea.addEventListener('input', autoResize);
});