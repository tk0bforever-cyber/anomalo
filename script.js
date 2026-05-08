
// 🔥 CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyDhcSWK2tVIioM9d2mpOibSRi7irEqaCWw",
  authDomain: "anomalo-e523e.firebaseapp.com",
  projectId: "anomalo-e523e",
  storageBucket: "anomalo-e523e.appspot.com",
  messagingSenderId: "434647831932",
  appId: "1:434647831932:web:498da80cdf9b164b8400f9"
};

// 🔥 INICIALIZAR
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ELEMENTOS
const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");
const publish = document.getElementById("publish");
const feed = document.querySelector(".feed");

/* ===================== */
/* BOTÓN PUBLICAR */
/* ===================== */
publish.addEventListener("click", async () => {

  console.log("CLICK DETECTADO"); // 👈 prueba visual

  if (!title.value || !content.value) {
    alert("Escribe algo");
    return;
  }

  try {
    await db.collection("posts").add({
      user: username.value || "Anónimo",
      title: title.value,
      content: content.value,
      likes: 0,
      time: Date.now()
    });

    title.value = "";
    content.value = "";

    console.log("PUBLICADO ✔");

  } catch (error) {
    console.error("ERROR FIREBASE:", error);
    alert("Error al publicar (revisa consola)");
  }

});