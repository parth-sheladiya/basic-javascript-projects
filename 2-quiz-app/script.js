const quiz = [
    {
        question: "What is the most used programming language in 2024?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "Java",
    },
    {
        question: "Who is the President of India?",
        ans1text: "Narendra modi",
        ans2text: "Amit Shah",
        ans3text: "Vijay rupani",
        ans4text: "Ramnath kovind",
        answer: "Ramnath kovind",
    },{
        question: "What does CSS stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Cascading Style Sheet",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },{
        question: "What does JSON stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Javascript Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Javascript Object Notation",
    },
    
    {
        question: "What year was c++ launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1994",

    },
    {
        question: "What year was Javascript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]

const question = document.getElementById("quizQuestion");
console.log(question);

const optionA = document.getElementById("option-A");
const optionB = document.getElementById("option-B");
const optionC = document.getElementById("option-C");
const optionD = document.getElementById("option-D");

console.log(optionA.textContent, optionB, optionC, optionD);

const submitBtn = document.getElementById("btnSubmit")

let currentQuestion = 0;
let scoreOfQuestion = 0;

console.log(quiz[currentQuestion].question);


question.textContent = quiz[currentQuestion].question;
optionA.textContent = quiz[currentQuestion].ans1text;
optionB.textContent = quiz[currentQuestion].ans2text;
optionC.textContent = quiz[currentQuestion].ans3text;
optionD.textContent = quiz[currentQuestion].ans4text;


submitBtn.addEventListener('click',()=>{
    const checkAns = document.querySelector('input[type="radio"]:checked');
    console.log(checkAns);
    if(checkAns === null){
        alert("please select answer")
    }else{
        if(checkAns.nextElementSibling.textContent === quiz[currentQuestion].answer ){
            scoreOfQuestion++;
        }
        
        currentQuestion++;

        if(currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            optionA.textContent = quiz[currentQuestion].ans1text;
            optionB.textContent = quiz[currentQuestion].ans2text;
            optionC.textContent = quiz[currentQuestion].ans3text;
            optionD.textContent = quiz[currentQuestion].ans4text;
            checkAns.checked = false;
        }
        else{
            alert("your score is" + scoreOfQuestion + "out of " + quiz.length );
            location.reload();
        }
    }
})