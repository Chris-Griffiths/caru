let comments = [
  "Healing is within reach for you",
  "You are allowed to feel good and to experience pleasure in life",
  "You are enough",
  "You are more than your anxiety",
  "You are worthy of receiving good things",
  "Accept yourself for who you are",
  "You are a strong, capable person",
];

let comment = comments[Math.floor(Math.random() * comments.length)];

let text = document.querySelector("h2");
let len = comment.length;
let textSize;
let textMob;

text.textContent = comment;

if (len > 0 && len < 10) {
  textSize = 24;
  textMob = 6;
} else if (len >= 10 && len < 20) {
  textSize = 18;
  textMob = 5;
} else if (len >= 20 && len < 30) {
  textSize = 14;
  textMob = 4;
} else if (len >= 30 && len < 40) {
  textSize = 12;
  textMob = 2;
} else {
  textSize = 8;
  textMob = 2;
}

text.style.fontSize =
  "clamp(" + textMob + "rem," + "0.6rem + 15vw," + textSize + "rem)";
