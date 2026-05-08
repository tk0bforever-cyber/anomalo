
// 🔥 CONFIG FIREBASE (REEMPLAZA CON EL TUYO)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH",
  projectId: "TU_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const feed = document.querySelector(".feed");

const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");
const publish = document.getElementById("publish");

/* ========================= */
/* PUBLICAR */
/* ========================= */
publish.addEventListener("click", async () => {

  if (!title.value || !content.value) {
    alert("Escribe algo primero");
    return;
  }

  await db.collection("posts").add({
    user: username.value || "Anónimo",
    title: title.value,
    content: content.value,
    likes: 0,
    time: Date.now()
  });

  title.value = "";
  content.value = "";

});

/* ========================= */
/* MOSTRAR POSTS EN VIVO */
/* ========================= */
db.collection("posts")
  .orderBy("time", "desc")
  .onSnapshot(snapshot => {

    document.querySelectorAll(".post").forEach(p => p.remove());

    snapshot.forEach(doc => {

      const data = doc.data();

      const post = document.createElement("div");
      post.classList.add("post");

      post.innerHTML = `
        <div class="postHeader">
          <h3>${data.title}</h3>
          <span>👤 ${data.user}</span>
        </div>

        <p>${data.content}</p>

        <div class="actions">
          <button class="likeBtn">💀 ${data.likes}</button>
          <button class="replyBtn">Responder</button>
        </div>

        <input class="replyInput" placeholder="Escribe respuesta...">
        <div class="replies"></div>
      `;

      feed.appendChild(post);

      const likeBtn = post.querySelector(".likeBtn");
      const replyBtn = post.querySelector(".replyBtn");
      const replyInput = post.querySelector(".replyInput");
      const repliesBox = post.querySelector(".replies");

      /* LIKE */
      likeBtn.addEventListener("click", () => {
        db.collection("posts").doc(doc.id).update({
          likes: data.likes + 1
        });
      });

      /* RESPONDER */
      replyBtn.addEventListener("click", () => {

        if (!replyInput.value) return;

        db.collection("posts")
          .doc(doc.id)
          .collection("replies")
          .add({
            text: replyInput.value,
            time: Date.now()
          });

        replyInput.value = "";
      });

      /* RESPUESTAS EN VIVO */
      db.collection("posts")
        .doc(doc.id)
        .collection("replies")
        .orderBy("time")
        .onSnapshot(res => {

          repliesBox.innerHTML = "";

          res.forEach(r => {
            const div = document.createElement("div");
            div.classList.add("reply");
            div.textContent = "↳ " + r.data().text;
            repliesBox.appendChild(div);
          });

        });

    });

  });