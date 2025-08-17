const questions = [
  {
    question: "What does IS stand for in computing?",
    answers: [
      { text: "Information Systems", correct: true },
      { text: "Internet Service", correct: false },
      { text: "Internal Software", correct: false },
      { text: "Input Signal", correct: false }
    ]
  },
  {
    question: "Which of these is an example of hardware?",
    answers: [
      { text: "Database", correct: false },
      { text: "Spreadsheet", correct: false },
      { text: "Monitor", correct: true },
      { text: "Operating System", correct: false }
    ]
  },
  {
    question: "Which system helps in managing business data?",
    answers: [
      { text: "Web Browser", correct: false },
      { text: "Search Engine", correct: false },
      { text: "Text Editor", correct: false },
          { text: "Database Management System", correct: true }
    ]
  },
  {
    question: "Which is an example of input device?",
    answers: [
      
      { text: "Monitor", correct: false },
      { text: "Printer", correct: false },
      { text: "Keyboard", correct: true },
      { text: "Speaker", correct: false }
    ]
  },
  {
    question: "Which is an output device?",
    answers: [
      { text: "Printer", correct: true },
      { text: "Mouse", correct: false },
      { text: "Scanner", correct: false },
      { text: "Keyboard", correct: false }
    ]
  },
  {
    question: "Which of these is system software?",
    answers: [
      { text: "Operating System", correct: true },
      { text: "Spreadsheet", correct: false },
      { text: "Word Processor", correct: false },
      { text: "Presentation Slide", correct: false }
    ]
  },
  {
    question: "What does DBMS stand for?",
    answers: [
     
      { text: "Data Backup Main Server", correct: false },
      { text: "Digital Business Machine System", correct: false },
       { text: "Database Management System", correct: true },
      { text: "Device Based Memory Storage", correct: false }
    ]
  },
  {
    question: "Which is an example of application software?",
    answers: [
    
      { text: "Linux Kernel", correct: false },
        { text: "Microsoft Word", correct: true },
      { text: "BIOS", correct: false },
      { text: "Device Driver", correct: false }
    ]
  },
  {
    question: "What does ICT stand for?",
    answers: [
      { text: "Information and Communication Technology", correct: true },
      { text: "Internal Control Tool", correct: false },
      { text: "Internet Communication Transfer", correct: false },
      { text: "Input Control Technique", correct: false }
    ]
  },
  {
    question: "Which of these is an example of storage device?",
    answers: [
    
      { text: "Keyboard", correct: false },
        { text: "Hard Disk Drive", correct: true },
      { text: "Monitor", correct: false },
      { text: "Speaker", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT an operating system?",
    answers: [
      { text: "Google Chrome", correct: true },
      { text: "Windows", correct: false },
      { text: "Linux", correct: false },
      { text: "MacOS", correct: false }
    ]
  },
  {
    question: "What is the full meaning of CPU?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Control Program Utility", correct: false },
      { text: "Central Print Unit", correct: false },
      { text: "Computer Processing Utility", correct: false }
    ]
  },
  {
    question: "Which of these is an example of networking hardware?",
    answers: [
      { text: "Router", correct: true },
      { text: "Word Processor", correct: false },
      { text: "Spreadsheet", correct: false },
      { text: "Paint Software", correct: false }
    ]
  },
  {
    question: "Which computer memory is temporary?",
    answers: [
      { text: "RAM", correct: true },
      { text: "Hard Disk", correct: false },
      { text: "SSD", correct: false },
      { text: "DVD", correct: false }
    ]
  },
  {
    question: "Which computer memory is permanent?",
    answers: [
      
      { text: "RAM", correct: false },
      { text: "Cache", correct: false },
      { text: "ROM", correct: true },
      { text: "Registers", correct: false }
    ]
  },
  {
    question: "Which one is an example of cloud storage?",
    answers: [
      { text: "Google Drive", correct: true },
      { text: "USB Flash Drive", correct: false },
      { text: "External Hard Disk", correct: false },
      { text: "DVD", correct: false }
    ]
  },
  {
    question: "What does LAN stand for?",
    answers: [
      { text: "Large Access Node", correct: false },
      { text: "Long Area Net", correct: false },
      { text: "Local Area Network", correct: true },
      { text: "Logical Access Network", correct: false }
    ]
  },
  {
    question: "Which of these is a search engine?",
    answers: [
      { text: "Facebook", correct: false },
            { text: "Google", correct: true },
      { text: "Microsoft Word", correct: false },
      { text: "WhatsApp", correct: false }
    ]
  },
  {
    question: "Which of these is an email service?",
    answers: [
      { text: "Gmail", correct: true },
      { text: "YouTube", correct: false },
      { text: "Instagram", correct: false },
      { text: "Spotify", correct: false }
    ]
  },
  {
    question: "Which is the brain of the computer?",
    answers: [
      { text: "CPU", correct: true },
      { text: "Monitor", correct: false },
      { text: "Keyboard", correct: false },
      { text: "Printer", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const quizContent = document.getElementById("quiz-content");
const endButton = document.getElementById("end-btn");
const prevButton = document.getElementById("prev-btn");
const backButton = document.getElementById("back-btn");
const displayQuiz = document.getElementsByName("display")

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  quizContent.style.display = "block";
  startQuiz();
});

endButton.addEventListener("click", () => {
  showScore();
  endButton.style.display = "none";
});

prevButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuiz();
  }
});

backButton.addEventListener("click", () => {
  // hide everything except Start button
  quizContent.style.display = "none";
  startButton.style.display = "block";
  backButton.style.display = "none";
});

function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = new Array(questions.length).fill(null);
  nextButton.innerHTML = "Next";
  showQuiz();
  endButton.style.display = "block";
  prevButton.style.display = "none";
  backButton.style.display = "none"
}

function showQuiz() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNO = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    // restore if user already answered
    if (userAnswers[currentQuestionIndex] !== null) {
      if (index === userAnswers[currentQuestionIndex].choice) {
        button.classList.add(
          userAnswers[currentQuestionIndex].correct ? "correct" : "incorrect"
        );
      }

        if (answer.correct) {
    button.classList.add("correct");
  }
      button.disabled = true;
    }

    button.addEventListener("click", () =>
      selectAnswer(index, answer.correct, button)
    );
  });

  // toggle prev visibility
  prevButton.style.display = currentQuestionIndex > 0 ? "block" : "none";

    if (userAnswers[currentQuestionIndex] !== null) {
    nextButton.style.display = "block";
  }else {
  nextButton.style.display = "none";    // not answered yet → hide Next
}
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(index, isCorrect, selectedBtn) {
  // Save choice
  userAnswers[currentQuestionIndex] = { choice: index, correct: isCorrect };

  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button, idx) => {
    if (questions[currentQuestionIndex].answers[idx].correct) {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
  backButton.style.display = "none";
}

function showScore() {
  resetState();
  // compute fresh score (avoids double counting)
  let score = userAnswers.filter(ans => ans && ans.correct).length;
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  prevButton.style.display = "none"
  endButton.style.display = "none";
  backButton.style.display = "block";
   currentQuestionIndex = 0;
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuiz();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (nextButton.innerHTML === "Play Again") {
    startQuiz();
  } else {
    handleNextButton();
  }
});

