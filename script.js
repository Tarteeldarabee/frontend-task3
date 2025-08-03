// Quiz Data
const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: 0
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-size", "text-style", "text-size"],
    answer: 0
  },
  {
    question: "What does JS stand for?",
    options: ["Java Style", "JavaScript", "JustScript"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-btn").style.display = "none";
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz-controls").style.display = "block";
    document.getElementById("final-score").textContent = `Your score: ${score} out of ${questions.length}`;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("quiz-controls").style.display = "none";
  showQuestion();
}

// To-Do App
function addTodo() {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
}

// Navigation
function showSection(sectionId) {
  document.getElementById("todo").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById(sectionId).style.display = "block";
  if (sectionId === "quiz") {
    restartQuiz();
  }
}

// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("theme-switch").addEventListener("change", function () {
    document.body.style.backgroundColor = this.checked ? "#2c2c2c" : "#f8f1f8";
    document.body.style.color = this.checked ? "#fff" : "#333";
  });

  showQuestion(); // start quiz on load
});
