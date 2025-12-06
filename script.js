function nextStep() {
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function prevStep() {
  document.getElementById("step2").style.display = "none";
  document.getElementById("step1").style.display = "block";
}

function sendForm() {

  const webhook = "https://discord.com/api/webhooks/1446994919771344956/pVM-5hXVXBuEwNMRq6rgDvIrX3_3RP09SA73tVFGCa8TpNAacIE7Fsvf-1GC9ht8V7Qq";

  const data = {
    content: "📩 **Nouvelle Candidature Staff - Glast**",
    embeds: [{
      title: "Informations du candidat",
      color: 15548997,
      fields: [
        { name:"📘 Présentation IRL", value: document.getElementById("irl").value || "Aucune réponse" },
        { name:"🧩 Discord", value: document.getElementById("discord").value },
        { name:"👤 Prénom", value: document.getElementById("prenom").value },
        { name:"🎂 Âge", value: document.getElementById("age").value },
        { name:"⏰ Disponibilités", value: document.getElementById("dispos").value },

        { name:"📌 Catégorie", value: document.getElementById("categorie").value },
        { name:"🔥 Motivations", value: document.getElementById("motivations").value },
        { name:"🎯 Pourquoi lui ?", value: document.getElementById("why").value },
        { name:"💎 Qualités", value: document.getElementById("qualites").value },
        { name:"📘 Définition du rôle", value: document.getElementById("definition").value },
        { name:"⭐ Expérience", value: document.getElementById("experience").value },
        { name:"📎 Extra", value: document.getElementById("extra").value },
      ]
    }]
  };

  fetch(webhook, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .then(() => {
    document.getElementById("status").innerHTML = "✅ Candidature envoyée avec succès !";
  })
  .catch(() => {
    document.getElementById("status").innerHTML = "❌ Une erreur est survenue.";
  });

}
