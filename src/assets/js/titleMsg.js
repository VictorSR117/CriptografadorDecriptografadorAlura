let documentTitle = document.title;
window.addEventListener("blur", () => document.title = "Volte Sempre! 😊");
window.addEventListener("focus", () => document.title = documentTitle);