document.getElementById("donation-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const amount = document.getElementById("amount").value;
  const message = document.getElementById("message").value;
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:3000/api/donations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ amount, message }),
  });

  const data = await response.json();

  if (response.ok) {
    alert("Don envoyé avec succès !");
    document.getElementById("donation-form").reset();
  } else {
    alert(data.error || "Erreur lors du don.");
  }
});
