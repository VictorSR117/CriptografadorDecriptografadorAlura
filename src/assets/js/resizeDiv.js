const autoResizeDiv = () => {
    let div = document.querySelector(".resize");
    div.style.height = "auto";

    let contentHeight = div.scrollHeight;
    div.style.height = contentHeight + "px";
}

let btn = document.querySelector("#criptographText").addEventListener('click', () => {
    autoResizeDiv();

    let div = document.querySelector(".resize");
    div.addEventListener('input', autoResizeDiv);
});
