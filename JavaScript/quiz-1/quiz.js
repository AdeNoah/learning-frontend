// creating the main variables 
let questionBank = [
    {
        question: 'The this keyword always refers to the global object.',
        option1: 'True',
        option2: 'False',
        answer: 2
    },
    {
        question: 'The parseInt function can convert a string to an integer.',
        option1: 'True',
        option2: 'False',
        answer: 1
    },
    {
        question: 'In JavaScript, arrays are objects',
        option1: 'True',
        option2: 'False',
        answer: 1
    },
    {
        question: 'The push method can be used to add elements to the end of an array.',
        option1: 'True',
        option2: 'False',
        answer: 1
    },
    {
        question: 'The == operator performs type coercion before comparing values.',
        option1: 'True',
        option2: 'False',
        answer: 1
    },
    {
        question: 'Question: What is the output of the following code? console.log(10 + "5");',
        option1: 15,
        option2: 105,
        option3: '15',
        option4: '105',
        answer: 2
    },
    {
        question: 'Question: What does the typeof operator return for the value null? console.log(typeof null)',
        option1: 'null',
        option2: 'undefined',
        option3: 'object',
        option4: 'string',
        answer: 3
    },
    {
        question: 'Question: What is the correct syntax to add an event listener to a button with the ID myButton?',
        option1: 'document.getElementById("myButton").addEventListener(click, function() { ... });',
        option2: 'document.getElementById("myButton").addEventListener("click", function() { ... });',
        option3: 'document.getElementById("myButton").addEvent(click, function() { ... });',
        answer: 2
    },
    {
        question: 'Question: What will the following code print?        var x = 10; function test(){var x = 20;    console.log(x);}    test();',
        option1: 10,
        option2: 20,
        option3: 'undefined',
        option4: 'null',
        answer: 2
    },
    {
        question: 'Question: What is the output of the following code?      var arr = [1, 2, 3, 4, 5];  console.log(arr.slice(1, 3));',
        option1: [1, 2],
        option2: [2, 3],
        option3: [3, 4],
        option4: [1, 2, 3],
        answer: 2
    }
];

const quizContainer = document.querySelector('#quiz-container');
const startQuizBtn = document.querySelector('#initiate');

let currentQuestion = 0;
let questionNumber = 0;
let score = 0;

// to create the question element and the answer elements and the controls element
let questionElement = document.createElement('div');
questionElement.classList.add('question-element');

let answerElement = document.createElement('div');
answerElement.classList.add('answer-element');

let controlsElement = document.createElement('div');

const previousButton = document.createElement('button');
previousButton.classList.add('previous-button');
previousButton.innerText = '\u2190';
controlsElement.appendChild(previousButton);

const nextButton = document.createElement('button');
nextButton.classList.add('next-button');
nextButton.innerText = `\u2192`;
controlsElement.appendChild(nextButton)

/* 
*/


// to display the questions
function generateQuestions() {
    // to load the first question on clicking the start quiz button
    currentQuestion = currentQuestion + 1;
    currentQuestion = questionBank[currentQuestion];
    let question = currentQuestion.question;
    questionNumber;
    let questionSentence = document.createElement('p');
    questionSentence.innerText = `${questionNumber}. ${question}`;
    questionElement.appendChild(questionSentence);
    // this one is like... bound to thw first question only 
    // to display the options or answers to the question 
    answerElement.innerHTML = '';
    for(let key in currentQuestion) {
        if(key.startsWith('option')) {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'options';
            input.id = 'key' ;
            input.value = key;
    
            const label = document.createElement('label')
            label.setAttribute('for', key);
            label.innerText = currentQuestion[key];
            answerElement.appendChild(input);
            answerElement.appendChild(label);
        }
    }

    
    // now to be able to load all other questions other than the first question only 
    function previousQuestion() {
        if(currentQuestion > 0) {
            currentQuestion--;
            questionNumber--;
        }
    }
    previousButton.addEventListener('click', previousQuestion)
    function nextQuestion() {
        if(currentQuestion < questionBank.length - 1) {
            currentQuestion++;
            questionNumber++;
        }
    }
    nextButton.addEventListener('click', nextQuestion)
}

// to start the quiz logic and its event
function startQuiz(){
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(answerElement);
    quizContainer.appendChild(controlsElement);
    
    generateQuestions();
        
    startQuizBtn.setAttribute('disabled', 'true');
    startQuizBtn.style.display = 'none';

}
startQuizBtn.addEventListener('click', startQuiz)

// to actually load the previous or next questions by using the control buttons in the controlsElement


