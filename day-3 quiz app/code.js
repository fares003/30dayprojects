const questions = [{
        question: "In which year was Slido founded?",
        answers: [{
                text: "2012",
                correct: "true"
            },
            {
                text: "2016",
                correct: "false"
            },
            {
                text: "2020",
                correct: "false"
            }
        ]
    },
    {
        question: "Who is credited with inventing the World Wide Web?",
        answers: [{
                text: "Steve Jobs",
                correct: "false"
            },
            {
                text: "Bill Gates",
                correct: "false"
            },
            {
                text: "Tim Berners-Lee",
                correct: "true"
            }
        ]
    },
    {
        question: "What type of computer was the first laptop computer?",
        answers: [{
                text: "Apple Macintosh",
                correct: "false"
            },
            {
                text: "IBM PC",
                correct: "false"
            },
            {
                text: "Osborne 1",
                correct: "true"
            }
        ]
    },
    {
        question: "What is the largest social media network in the world?",
        answers: [{
                text: "Twitter",
                correct: "false"
            },
            {
                text: "Facebook",
                correct: "true"
            },
            {
                text: "Instagram",
                correct: "false"
            }
        ]
    },
];
const questionElement = document.getElementById("question");
const answer_buttons = document.getElementById("answer-buttons");
const next_btn = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    next_btn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetQuestions();

    let currentQuestion = questions[currentQuestionIndex];
    let currentQuestionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = currentQuestionNumber + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer");
        answer_buttons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    })
}

function resetQuestions() {
    next_btn.style.display = "none";
    while (answer_buttons.firstChild) {
        answer_buttons.removeChild(answer_buttons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correctAnswer = selectedBtn.dataset.correct === "true";
    console.log(correctAnswer);
    if (correctAnswer) {
        selectedBtn.classList.add("right");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }
    Array.from(answer_buttons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("right");
        }
        button.disabled = true;
    });
    next_btn.style.display = "block";

}

function showScore() {
    resetQuestions();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    next_btn.innerHTML="reset the quiz";
    next_btn.style.display="block";
}

function handledNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
next_btn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handledNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();