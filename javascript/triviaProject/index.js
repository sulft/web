let start = document.querySelector('#start');
let quiz = document.querySelector('#quiz');
let answer = document.querySelector('#answer');
let arrayOfAnswer = [];
let myAnswer;
let myScore = 0;
let questionNumber = 0;

//création bouton 'submit'

start.onclick = function() {
    start.disabled = !start.disabled;

    fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&encode=url3986')
    .then(response => 
        {
            return response.json();
        }
    )
    .then(response => 
        {

            traitement(response);

            //création bouton submit
            creationSubmitButton();

            buttonSubmit = document.querySelector('#submit');

            buttonSubmit.onclick = () => {
                for() {
                    
                }
            };
    
        }
    );
}

function traitement(response) {
    let res = response.results;

    console.log(response);
    let category = document.querySelector('h3');
    category.textContent = res[0].category;

    let question = document.querySelector('#question')
    let dec = decodeURI(res[0].question);
    dec = dec.replace('%3F' ,' ?');
    question.textContent = dec;

    if(res[0].type == "multiple") {
        for(let i = 0; i < 4; i++) {
            if(i<3) {
                //je remplis le tableau de réponse des mauvaise réponse
                arrayOfAnswer.push(res[0].incorrect_answers[i]);
            } else {
                //puis de la bonne réponse
                arrayOfAnswer.push(res[0].correct_answer);
            }
        }
        console.log(arrayOfAnswer);

        arrayOfAnswer = shuffleArray(arrayOfAnswer);

        arrayOfAnswer.forEach((element,index) => {
            let input = document.createElement('input');
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'answer');
            input.setAttribute('id', 'answer' + index);
            input.setAttribute('value', element);

            let label = document.createElement('label');
            label.setAttribute('for', 'answer' + index);
            label.setAttribute('class', 'p-2');
            label.textContent = element;

            answer.appendChild(input);
            answer.appendChild(label);

        });

    }
}

//je mélange le tableau de réponse
function shuffleArray(arrayOfAnswer) {
    for (let i = arrayOfAnswer.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arrayOfAnswer[i];
        arrayOfAnswer[i] = arrayOfAnswer[j];
        arrayOfAnswer[j] = temp;
    }
    return arrayOfAnswer;
}

function creationSubmitButton() {
    let buttonSubmit = document.createElement('button');
    buttonSubmit.textContent = "submit";
    buttonSubmit.setAttribute("class", 'btn btn-primary');
    buttonSubmit.setAttribute("id", 'submit');

    quiz.appendChild(buttonSubmit);
}

function checkAnswer(myAnswer,theAnswer) {

}

                    // let input = document.createElement('input');
                    // input.setAttribute('type', 'radio');
                    // input.setAttribute('name', 'answer');
                    // input.setAttribute('id', 'answer' + i);

                    // let label = document.createElement('label');

                    // answer.appendChild(input);