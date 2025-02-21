const loveImages = [
  "love_693577.png",
  "icons8-love-word-48.png",
  "icons8-gift-50.png",
  "feedback_7976433.png",
  "favorite_15114365.png"
];
const loveQuotes = [
  "Love is in the air! 💕",
  "You are my sunshine on a cloudy day! ☀️",
  "Love is the greatest adventure! ❤️",
  "You make my heart skip a beat! 💖",
  "Together is my favorite place to be! 💑"
];
function updateCard() {
  let userText = document.getElementById("userMessage").value;
  document.getElementById("message").innerText = userText || "Happy Valentine's Day! 💕";
  let randomImage = loveImages[Math.floor(Math.random() * loveImages.length)];
  document.getElementById("heartImage").src = randomImage;
  let randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
  document.getElementById("quote").innerText = randomQuote;
  for (let i = 0; i < 5; i++) {
      let heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.classList.add("floating-heart");
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${3 + Math.random() * 3}s`;
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
  }
}
function changeTheme() {
  let selectedTheme = document.getElementById("themeSelect").value;
  let card = document.getElementById("card");
  card.classList.remove("romantic", "cute", "elegant","floral","classic");
  card.classList.add(selectedTheme);
}
function downloadCard() {
  let card = document.getElementById("card");

  html2canvas(card).then(canvas => {
      let link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "valentine_card.png";
      link.click();
  });
}
