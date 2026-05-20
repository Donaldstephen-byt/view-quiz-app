const questions = [
  {
    question: "What is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Whale", correct: true },
      { text: "Tiger", correct: false },
      { text: "Bird", correct: false }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false }
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

// to be uncommented
// let currentQuestionIndex = 0;
// let userAnswers = new Array(questions.length).fill(null);

// startButton.addEventListener("click", () => {
//   startButton.style.display = "none";
//   quizContent.style.display = "block";
//   startQuiz();
// });

// endButton.addEventListener("click", () => {
//   showScore();
//   endButton.style.display = "none";
// });

// prevButton.addEventListener("click", () => {
//   if (currentQuestionIndex > 0) {
//     currentQuestionIndex--;
//     showQuiz();
//   }
// });

// backButton.addEventListener("click", () => {
//   // hide everything except Start button
//   quizContent.style.display = "none";
//   startButton.style.display = "block";
//   backButton.style.display = "none";
// });

// function startQuiz() {
//   currentQuestionIndex = 0;
//   userAnswers = new Array(questions.length).fill(null);
//   nextButton.innerHTML = "Next";
//   showQuiz();
//   endButton.style.display = "block";
//   prevButton.style.display = "none";
// }

// function showQuiz() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNO = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

//   currentQuestion.answers.forEach((answer, index) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButtons.appendChild(button);

//     // restore if user already answered
//     if (userAnswers[currentQuestionIndex] !== null) {
//       if (index === userAnswers[currentQuestionIndex].choice) {
//         button.classList.add(
//           userAnswers[currentQuestionIndex].correct ? "correct" : "incorrect"
//         );
//       }

//         if (answer.correct) {
//     button.classList.add("correct");
//   }
//       button.disabled = true;
//     }

//     button.addEventListener("click", () =>
//       selectAnswer(index, answer.correct, button)
//     );
//   });

//   // toggle prev visibility
//   prevButton.style.display = currentQuestionIndex > 0 ? "block" : "none";

//     if (userAnswers[currentQuestionIndex] !== null) {
//     nextButton.style.display = "block";
//   }else {
//   nextButton.style.display = "none";    // not answered yet → hide Next
// }
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// function selectAnswer(index, isCorrect, selectedBtn) {
//   // Save choice
//   userAnswers[currentQuestionIndex] = { choice: index, correct: isCorrect };

//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }

//   Array.from(answerButtons.children).forEach((button, idx) => {
//     if (questions[currentQuestionIndex].answers[idx].correct) {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });

//   nextButton.style.display = "block";
//   backButton.style.display = "none";
// }

// function showScore() {
//   resetState();
//   // compute fresh score (avoids double counting)
//   let score = userAnswers.filter(ans => ans && ans.correct).length;
//   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//   nextButton.innerHTML = "Play Again";
//   nextButton.style.display = "block";
//   prevButton.style.display = "none"
//   endButton.style.display = "none";
//   backButton.style.display = "block";
//    currentQuestionIndex = 0;
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuiz();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", () => {
//   if (nextButton.innerHTML === "Play Again") {
//     startQuiz();
//   } else {
//     handleNextButton();
//   }
// });

