const mcqQuestions = {
    "Question_1": {
        "question": "Java is short for JavaScript",
        "answers": ["true", "false"]
    },
    "Question_2": {
        "question": "How do you insert COMMENTS in Java code?",
        "answers": ["# This is comment", "/* This is comment", "// This is comment"]
    },
    "Question_3": {
        "question": "Which data type is used to create a variable that should store text?",
        "answers": ["string", "String", "Txt", "myString"]
    },
    "Question_4": {
        "question": "How do you create a variable with the numeric value 5?",
        "answers": ["int x = 5", "float x = 5", "num x = 5", "x = 5"]
    },
    "Question_5": {
        "question": "Which method can be used to find the length of a string?",
        "answers": ["len()", "getLength()", "getSize()", "length()"]
    }
}

const mcqQuestionsArray = Object.values(mcqQuestions);
let text;
text = ``;
mcqQuestionsArray.map((item, index) => {
    text += `<div id="${index}_${index}" name="${index}_${index}" class="form-group">`;
      text+= `<label for="${item.question}_${index}">${item.question}</label><br />
      <div class="font-weight-normal" id="${index}" name="${index}_${index}">`
      for (const answer of item.answers) {
        text += `<div class="form-check ">
        <input type="radio" name="${index}" id="${answer}" value="${answer}" />
        <label for="${answer}" class="form-check-label">${answer}</label>
        </div>`
      }
      text += `</div>`
      text += `</div>`
      return text;
})
document.getElementById("questionsBlock").innerHTML = text;
