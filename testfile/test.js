// Your datasets
const dataScience = [  {
    question: "Which sorting algorithm has the best average case performance?",
    answers: [
      { text: "Merge Sort", correct: true },
      { text: "Bubble Sort", correct: false },
      { text: "Selection Sort", correct: false },
      { text: "Insertion Sort", correct: false }
    ]
  },
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(log n)", correct: true },
      { text: "O(n)", correct: false },
      { text: "O(n^2)", correct: false },
      { text: "O(1)", correct: false }
    ]
  } ];
const aiMl = [ /* 2 questions here */ ];
const softwareDev = [ /* 2 questions here */ ];
const algorithms = [ /* 2 questions here */ ];
const infoSystems = [ /* 2 questions here */ ];
const erp = [ /* 2 questions here */ ];
const bi = [ /* 2 questions here */ ];

// Combine all into an object for easier access
const questions = {
  dataScience,
  aiMl,
  softwareDev,
  algorithms,
  infoSystems,
  erp,
  bi
};

// Grab DOM elements
const categorySelect = document.getElementById("category-select");
const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");

let currentQuestions = [];
let currentIndex = 0;

// Start quiz when button clicked
startBtn.addEventListener("click", () => {
  const selectedCategory = categorySelect.value;
  currentQuestions = questions[selectedCategory]; // load dataset
  currentIndex = 0;
  quizContainer.style.display = "block";
  showQuestion();
});

// Display current question and answers
function showQuestion() {
  const q = currentQuestions[currentIndex];
  questionEl.innerText = q.question;
  answerButtonsEl.innerHTML = ""; // clear old buttons

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("btn");
    btn.addEventListener("click", () => {
      if(answer.correct) alert("Correct!");
      else alert("Wrong!");
      // move to next question
      currentIndex++;
      if(currentIndex < currentQuestions.length){
        showQuestion();
      } else {
        alert("Quiz finished!");
        quizContainer.style.display = "none";
      }
    });
    answerButtonsEl.appendChild(btn);
  });
}
