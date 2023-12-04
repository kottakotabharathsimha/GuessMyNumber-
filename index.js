"useStrict";
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log((document.querySelector(".inp-btn").textContent = secretnumber));
document.querySelector(".inp-Check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inp-number").value);
  if (!guess) {
    document.querySelector(".text-heading").textContent = "⛔ No number found!";
  } else if (guess === secretnumber) {
    document.querySelector(".text-heading").textContent = "🎉 Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".inp-btn").textContent = guess;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretnumber) {
    document.querySelector(".text-heading").textContent = "📈 Too High";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".text-heading").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".text-heading").textContent = "😞 You lost Game";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again-btn").addEventListener("click", function () {
  document.querySelector(".text-heading").textContent = "Start Guessing";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".inp-btn").textContent = "?";
  document.querySelector(".inp-number").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
});
