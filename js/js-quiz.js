function result()
{
	var score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
	if(document.getElementById('correct3').checked)
		{	score++;
		}
    alert("Your score is:"+score);
 // to print on browser
    document.write("Nilai mu adalah "+score);
}

const quizData = [
    {
        question: "1. Manakah bintang yang terdekat dengan Bumi?",
        a: "Matahari",
        b: "Venus",
        c: "Mars",
        d: "Neptunus",
        correct: "a",
    },
    {
        question: "2. Planet yang paling dekat dengan Matahari adalah?",
        a: "Saturnus",
        b: "Uranus",
        c: "Merkurius",
        d: "Venus",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 style="margin-right : 20px;">Jawaban kamu ${score}/${quizData.length} Pertanyaan yang benar</h2> </br>
           <button style="margin-right : 20px; border-radius: 20px; padding: 10px;" onclick="location.reload()">Reload</button>
           <button style="margin-right : 20px; border-radius: 20px; padding: 10px;" onclick="newTab()">Lanjut Materi selanjutnya</button>
           `
       }
    }
})

function newTab() {
    window.location.href = "peredaran-planet.html";
}