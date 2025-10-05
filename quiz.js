// Quiz Configuration
const quizConfig = {
    totalQuestions: 10,
    passingScore: 50,
    timeLimit: 10 * 60,
    questionPrefix: "q/",
    explanationPrefix: "e/",
    answers: [1, 2, 3, 4, 1, 3, 4, 3, 2, 1],
    correctMark: 4,
    incorrectPenalty: -1,
    maxMarks: 40
};

// Quiz State
const quizState = {
    currentQuestionIndex: 0,
    score: 0,
    totalMarks: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    skippedQuestions: 0,
    timeSpent: 0,
    questionTimes: [],
    startTime: null,
    endTime: null,
    answers: [],
    completed: false
};
