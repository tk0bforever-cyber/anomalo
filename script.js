/* ========================= */
/* ANÓMALO - FUNCIONAL 100% */
/* ========================= */

window.addEventListener("DOMContentLoaded", () => {

  console.log("JS cargado correctamente 🚀");

  /* ALERTA */
  setTimeout(() => {
    alert("⚠ Sistema Anómalo activo...");
  }, 1000);

  /* POSTS INTERACTIVOS */
  const posts = document.querySelectorAll(".post");

  posts.forEach(post => {

    post.style.cursor = "pointer";

    post.addEventListener("click", () => {

      post.classList.toggle("active");

      if (post.classList.contains("active")) {
        post.style.transform = "scale(1.03)";
        post.style.boxShadow = "0 0 15px red";
        post.style.transition = "0.3s";
      } else {
        post.style.transform = "scale(1)";
        post.style.boxShadow = "none";
      }

    });

  });

  /* GLITCH EN TÍTULO */
  const title = document.querySelector(".topbar h1");

  setInterval(() => {

    const chars = "!@#$%^&*<>?/|";
    const original = "ANÓMALO";

    let glitch = original.split("").map(c => {
      return Math.random() > 0.85
        ? chars[Math.floor(Math.random() * chars.length)]
        : c;
    }).join("");

    title.textContent = glitch;

    setTimeout(() => {
      title.textContent = "ANÓMALO";
    }, 200);

  }, 3000);

  /* POST FANTASMA */
  setTimeout(() => {

    const feed = document.querySelector(".feed");

    const ghost = document.createElement("div");
    ghost.classList.add("post");

    ghost.innerHTML = `
      <h2>No estás solo aquí...</h2>
      <p>Alguien más está viendo esto contigo.</p>
      <span>👁 ??? vistas</span>
    `;

    feed.prepend(ghost);

    /* hacerlo interactivo también */
    ghost.addEventListener("click", () => {
      ghost.style.boxShadow = "0 0 20px red";
      ghost.style.transform = "scale(1.03)";
    });

  }, 5000);

});