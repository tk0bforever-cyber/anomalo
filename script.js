window.addEventListener("DOMContentLoaded", () => {

  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const publishBtn = document.getElementById("publish");
  const feed = document.querySelector(".feed");

  // Crear un post en pantalla
  function crearPost(titulo, contenido) {

    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
      <h3>${titulo}</h3>
      <p>${contenido}</p>
      <span>👁 Anónimo</span>
    `;

    // efecto al hacer click
    post.addEventListener("click", () => {
      post.style.boxShadow = "0 0 15px red";
      post.style.transform = "scale(1.02)";
      post.style.transition = "0.2s";
    });

    feed.appendChild(post);
  }

  // Evento del botón publicar
  publishBtn.addEventListener("click", () => {

    const titulo = titleInput.value.trim();
    const contenido = contentInput.value.trim();

    if (titulo === "" || contenido === "") {
      alert("Escribe algo primero...");
      return;
    }

    crearPost(titulo, contenido);

    // limpiar inputs
    titleInput.value = "";
    contentInput.value = "";

  });

});