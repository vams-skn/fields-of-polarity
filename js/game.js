var day = 1;
document.getElementById("attach-content").innerHTML = logEntries[day];

function attachContent(day) {
    document.getElementById("attach-content").innerHTML = logEntries[day];
}

function nextDay() {
    day += 1;
    attachContent(day);
    if(day == 3){
        document.getElementById("puzzles").disabled = false;
        document.getElementById("puzzles").style.backgroundColor = "#007a50";
        
        document.getElementById("nextDayBtn").disabled = true;
        document.getElementById("nextDayBtn").style.backgroundColor = "gray";
        
        dayThreeProblem();
    }

    if(day == 4){
        document.getElementById("puzzles").disabled = false;
        document.getElementById("puzzles").style.backgroundColor = "#007a50";
        
        document.getElementById("nextDayBtn").disabled = true;
        document.getElementById("nextDayBtn").style.backgroundColor = "gray";
        
        dayFourProblem();
    }

    if(day == 5){
        document.getElementById("puzzles").disabled = false;
        document.getElementById("puzzles").style.backgroundColor = "#007a50";
        
        document.getElementById("nextDayBtn").disabled = true;
        document.getElementById("nextDayBtn").style.backgroundColor = "gray";
        
        dayFiveProblem();
    }

    if(day == 6){
        document.getElementById("puzzles").disabled = false;
        document.getElementById("puzzles").style.backgroundColor = "#007a50";
        
        document.getElementById("nextDayBtn").disabled = true;
        document.getElementById("nextDayBtn").style.backgroundColor = "gray";
        
        daySixProblem();
    }

    if(day == 7){
        document.getElementById("puzzles").disabled = true;
        document.getElementById("puzzles").style.backgroundColor = "gray";
        
        daySixProblem();
    }
}

function dayThreeProblem() {
    const pDiv = document.getElementById('puzzleDiv');
    const pBtn = document.getElementById('puzzles');
    const closeBtn = document.querySelector('.close');
    const positiveNodes = document.querySelectorAll('.positive');
    const negativeNodes = document.querySelectorAll('.negative');

    let pick = null;

    pBtn.addEventListener('click', () => {
        pDiv.style.display = 'block';
        pDiv.style.zIndex = '100';
    });

    closeBtn.addEventListener('click', () => {
        pDiv.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === pDiv) {
            pDiv.style.display = 'none';
        }
    });

    positiveNodes.forEach(node => {
        node.addEventListener('dragstart', e => {
            pick = e.target;
        });
    });

    negativeNodes.forEach(node => {
        node.addEventListener('dragover', e => {
            e.preventDefault();
        });

        node.addEventListener('drop', e => {
            e.preventDefault();

            if (pick && pick.dataset.type === 'positive' && node.dataset.type === 'negative') {
                pick.classList.add('connected');
                node.classList.add('connected');
                pick.draggable = false;

                check();
            }
        });
    });

    function check() {
        const connectedPositive = document.querySelectorAll('.positive.connected').length;
        const total = 6;

        if (connectedPositive === total) {
            document.getElementById("nextDayBtn").disabled = false;
            document.getElementById("nextDayBtn").style.backgroundColor = "#007a50";
        }
    }
}

function dayFourProblem() {
    const pDiv = document.getElementById('puzzleDiv2');
    const pBtn = document.getElementById('puzzles');
    const closeBtn = document.querySelector('.close');

    pBtn.addEventListener('click', () => {
        pDiv.style.display = 'block';
        pDiv.style.zIndex = '100';
    });

    closeBtn.addEventListener('click', () => {
        pDiv.style.display = 'none';
    });
}

function checkDirections() {
    const moves = [];
    const correct = ["S", "E", "S", "W", "S", "W", "S"];

    for (let i = 1; i <= 7; i++) {
        const move = document.getElementById(`move${i}`).value;
        moves.push(move);
    }

    let right = true;
    for (let i = 0; i < correct.length; i++) {
        if (moves[i] !== correct[i]) {
            right = false;
            break;
        }
    }

    const resultP = document.getElementById('directionResult');
    if (right) {
        resultP.innerHTML = "Congratulations! <br> You can continue.";
        resultP.style.color = "green";
        document.getElementById("nextDayBtn").disabled = false;
        document.getElementById("nextDayBtn").style.backgroundColor = "#007a50";
    } else {
        resultP.innerHTML = "Incorrect. <br> Try again!";
        resultP.style.color = "red";
    }
}

function dayFiveProblem() {
    const sBtn = document.getElementById('puzzles');

    gDiv = document.getElementById("itemGameModal");
    closeBtn = document.getElementById("closeBtn");

    sBtn.addEventListener('click', () => {
        gDiv.style.display = 'block';
        gDiv.style.zIndex = '100';
    });

    closeBtn.addEventListener('click', () => {
        gDiv.style.display = 'none';
    });

}

function checkItems() {
    const correctAnswers = {
        item1: "mirror",
        item2: "polarising",
        item3: "remover",
        item4: "glasses"
    };

    const userSel = {
        item1: document.getElementById("item1").value,
        item2: document.getElementById("item2").value,
        item3: document.getElementById("item3").value,
        item4: document.getElementById("item4").value
    };

    let isCorrect = true;
    for (const [key, value] of Object.entries(correctAnswers)) {
        if (userSel[key] !== value) {
            isCorrect = false;
            break;
        }
    }

    const resultMessage = document.getElementById("resultMessage");
    if (isCorrect) {
        resultMessage.textContent = "All problems solved correctly! You may proceed!";
        resultMessage.style.color = "green";
        document.getElementById("nextDayBtn").disabled = false;
        document.getElementById("nextDayBtn").style.backgroundColor = "#007a50";
    } else {
        resultMessage.textContent = "Answers are incorrect. Try again!";
        resultMessage.style.color = "red";
    }
}

function daySixProblem() {
    const pBtn = document.getElementById('puzzles');
    closeBtn = document.getElementById("closeBtn");

    pBtn.addEventListener('click', () => {
        openQuiz();
    });

    closeBtn.addEventListener('click', () => {
        closeQuiz();
    });

    window.onclick = function (event) {
        if (event.target == quizModal) {
            closeQuiz();
        }
    };

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin"],
            correctIndex: 1
        },
        {
            question: "Magnetic North is attracted to the...",
            options: ["North", "South"],
            correctIndex: 0
        },
        {
            question: "What is the color of the sky during the day?",
            options: ["Blue", "Red"],
            correctIndex: 1
        },
        {
            question: "Which polarity repels a positive charge?",
            options: ["Negative", "Positive"],
            correctIndex: 1
        },
        {
            question: "To stabilize Solaria's fields, you must align the...",
            options: ["Temperature", "Polarity"],
            correctIndex: 0
        }
    ];

    let curInd = 0;

    const quizModal = document.getElementById("quiz-modal");
    const questionEl = document.getElementById("question");
    const feedback = document.getElementById("feedback");
    const nextQ = document.getElementById("next-question-btn");
    const answerButtons = document.querySelectorAll(".answer-btn");

    function openQuiz() {
        quizModal.style.display = "block";
        loadQuestion();
    }

    function closeQuiz() {
        quizModal.style.display = "none";
        curInd = 0;
    }

    function loadQuestion() {
        const curQ = questions[curInd];
        questionEl.textContent = curQ.question;
        answerButtons.forEach((button, index) => {
            button.textContent = curQ.options[index];
            button.disabled = false;
            button.classList.remove("correct", "incorrect");
        });
        feedback.textContent = "";
        nextQ.style.display = "none";
    }

    function checkAnswer(selectedIndex) {
        const curQ = questions[curInd];
        const selectedButton = answerButtons[selectedIndex];

        if (selectedIndex === curQ.correctIndex) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
            selectedButton.classList.add("correct");
            nextQ.style.display = "block";
        } else {
            feedback.textContent = "Incorrect. Try again.";
            feedback.style.color = "red";
            selectedButton.classList.add("incorrect");
            setTimeout(() => {
                selectedButton.classList.remove("incorrect");
            }, 1000);
        }
    }

    function nextQuestion() {
        curInd++;
        if (curInd < questions.length) {
            loadQuestion();
        } else {
            feedback.textContent = "Test complete! You may enter the lab.";
            feedback.style.color = "blue";
            nextQ.style.display = "none";
            document.getElementById("nextDayBtn").disabled = false;
            document.getElementById("nextDayBtn").style.backgroundColor = "#007a50";
        }
    }

    answerButtons.forEach((button, index) => {
        button.addEventListener("click", () => checkAnswer(index));
    });

    nextQ.addEventListener("click", nextQuestion);
}

function finalChoice() {
    window.location.href = "./sites/choice.html";
}