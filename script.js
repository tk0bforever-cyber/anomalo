
console.log("SCRIPT OK");

// 🔥 CONFIG FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDhcSWK2tVIioM9d2mpOibSRi7irEqaCWw",
  authDomain: "anomalo-e523e.firebaseapp.com",
  projectId: "anomalo-e523e",
  storageBucket: "anomalo-e523e.appspot.com",
  messagingSenderId: "434647831932",
  appId: "1:434647831932:web:498da80cdf9b164b8400f9"
};

// INIT (IMPORTANTE compat)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("publish").addEventListener("click", async () => {

  console.log("CLICK OK");

  const user = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Falta info");
    return;
  }

  try {
    await db.collection("posts").add({
      user: user || "Anónimo",
      title,
      content,
      time: Date.now()
    });

    alert("Publicado ✔");

  } catch (e) {
    console.error(e);
    alert("Error Firebase");
  }

});