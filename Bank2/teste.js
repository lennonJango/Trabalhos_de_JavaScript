//Nao funciona
const message = document.createElement("div");
const header = document.querySelector(".header");
message.classList.add("cookie-message");
message.textContent =
  "Usamos cookies para melhorar a funcionalidade e a análise.";
message.innerHTML =
  'Usamos cookies para melhorar a funcionalidade e a análise. <button class="btn btn--close-cookie">Entendi!<button>';

header.prepend(mensagem);

// header.before(mensagem);
// header.after(mensagem);
//css Atributes

document.documentElement.style.setProperty("--color-primary", "blue");


