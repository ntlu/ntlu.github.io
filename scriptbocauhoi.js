const nameInputContainer = document.getElementById('name-input-container');
const playerNameInput = document.getElementById('playerName');
const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const optionButtons = document.querySelectorAll('.option-button');
const hintButton = document.getElementById('hint-button');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const resultMessage = document.getElementById('result-message');
const leaderboardContainer = document.getElementById('leaderboard-container');
const leaderboardList = document.getElementById('leaderboard');
const playAgainButton = document.getElementById('playAgainButton');

let playerName = '';
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 39;
let timerInterval;
let hintsUsed = 0;
let questions = [];
let usedQuestions = [];
let topScores = [];

startButton.addEventListener('click', () => {
  playerName = playerNameInput.value.trim();
  if (!playerName) return alert('Vui lòng nhập tên!');
  nameInputContainer.style.display = 'none';
  questionContainer.style.display = 'block';
  showQuestion();
  startTimer();
});

optionButtons.forEach(button => {
  button.addEventListener('click', () => checkAnswer(button.dataset.answer));
});

hintButton.addEventListener('click', useHint);

playAgainButton.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 39;
  hintsUsed = 0;
  usedQuestions = [];
  updateScore();
  hintButton.textContent = 'Gợi ý (3)';
  hintButton.disabled = false;
  leaderboardContainer.style.display = 'none';
  nameInputContainer.style.display = 'block';
});

function showQuestion() {
  resetTimer();
  let question;
  do {
    question = questions[Math.floor(Math.random() * questions.length)];
  } while (usedQuestions.includes(question));
  usedQuestions.push(question);

  questionText.textContent = question.question;
  optionButtons.forEach(btn => {
    btn.style.display = 'inline-block';
    const optionKey = btn.dataset.answer;
    btn.textContent = `${optionKey}: ${question.options[optionKey]}`;
  });

  questionContainer.dataset.answer = question.answer;
}

function checkAnswer(selected) {
    stopTimer();
    const correct = questionContainer.dataset.answer;
    const correctText = questions.find(q => q.answer === correct && q.question === questionText.textContent)?.options[correct];
  
    if (selected === correct) {
      score++;
      resultMessage.textContent = '🎉 Chúc mừng! Bé trả lời đúng!';
      updateScore();
      resultMessage.style.display = 'block';
      setTimeout(() => {
        resultMessage.style.display = 'none';
        nextQuestion();
      }, 2000);
    } else {
      resultMessage.textContent = `❌ Sai rồi! Đáp án đúng là: ${correct}: ${correctText}`;
      resultMessage.style.display = 'block';
      setTimeout(() => {
        showLeaderboard(); // ⛔ Ngưng game và hiện bảng xếp hạng
      }, 2500);
    }
  }

function updateScore() {
  scoreDisplay.textContent = `Điểm: ${score}`;
}

function startTimer() {
  timerDisplay.textContent = `Thời gian: ${timeLeft}`;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Thời gian: ${timeLeft}`;
    if (timeLeft <= 0) {
      stopTimer();
      resultMessage.textContent = 'Hết giờ!';
      resultMessage.style.display = 'block';
      setTimeout(() => {
        resultMessage.style.display = 'none';
        nextQuestion();
      }, 2000);
    }
  }, 1000);
}

function resetTimer() {
  stopTimer();
  timeLeft = 39;
  startTimer();
}

function stopTimer() {
  clearInterval(timerInterval);
}

function useHint() {
  if (hintsUsed >= 3) return;
  hintsUsed++;
  const correct = questionContainer.dataset.answer;
  let wrongOptions = Array.from(optionButtons).filter(btn => btn.dataset.answer !== correct && btn.style.display !== 'none');
  if (wrongOptions.length > 0) {
    const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
    randomWrong.style.display = 'none';
  }
  hintButton.textContent = `Gợi ý (${3 - hintsUsed})`;
  if (hintsUsed >= 3) {
    hintButton.disabled = true;
  }
}

function nextQuestion() {
  if (usedQuestions.length >= questions.length) {
    showLeaderboard();
  } else {
    showQuestion();
  }
}

function showLeaderboard() {
  questionContainer.style.display = 'none';
  leaderboardContainer.style.display = 'block';

  topScores.push({ name: playerName, score });
  topScores.sort((a, b) => b.score - a.score);
  topScores = topScores.slice(0, 10);
  localStorage.setItem('topScores', JSON.stringify(topScores));

  leaderboardList.innerHTML = '';
  topScores.forEach((entry, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${entry.name}: ${entry.score} điểm`;
    leaderboardList.appendChild(li);
  });
}

function loadLeaderboard() {
  const saved = localStorage.getItem('topScores');
  if (saved) {
    topScores = JSON.parse(saved);
  }
}

window.onload = function () {
  loadLeaderboard();
  questions = typeof questionBank !== 'undefined' ? questionBank : [];
};
