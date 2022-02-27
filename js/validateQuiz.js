let answers = [];

function validateQuiz() {
    let answer1;
    let answer2;
    let answer3;
    let answer4;
    let answer5;
    let answerList
    answerList = document.getElementsByName(0);
    for (i = 0; i < answerList.length; ++i) {
        if (answerList[i].checked) {
            answer1 = answerList[i].value;
        }
    }
    answerList = document.getElementsByName(1);
    for (i = 0; i < answerList.length; ++i) {
        if (answerList[i].checked) {
            answer2 = answerList[i].value;
        }
    }
    answerList = document.getElementsByName(2);
    for (i = 0; i < answerList.length; ++i) {
        if (answerList[i].checked) {
            answer3 = answerList[i].value;
        }
    }
    answerList = document.getElementsByName(3);
    for (i = 0; i < answerList.length; ++i) {
        if (answerList[i].checked) {
            answer4 = answerList[i].value;
        }
    }
    answerList = document.getElementsByName(4);
    for (i = 0; i < answerList.length; ++i) {
        if (answerList[i].checked) {
            answer5 = answerList[i].value;
        }
    }
    answers = [answer1, answer2, answer3, answer4, answer5];
    calculateResult(answers);
    console.log('answers', answers);
    // return answers.length > 0 ? true : false;
}

function calculateResult(answers) {
    const actualAnswers = ["false", "// This is comment", "String", "int x = 5", "length()"];
    let count = 0;
    for (i = 0; i < 5 ; ++i) {
        if (actualAnswers[i] === answers[i]) {
            count += 1;
        }
    }
    let text;
    console.log('count', count);
    text =`<div class="form-group">
               <h3>Your total score is: ${count} / ${answers.length}</h3>
           </div>`
    document.getElementById("resultSection").innerHTML = text;
    scrollTo(0,0);
}