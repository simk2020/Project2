const answerChoices = document.querySelectorAll(".answerChoices");

const quesCorrect = document.querySelector("#ques_correct")
let score = 0



for (let i = 0; i < answerChoices.length; i++) {

    answerChoices[i].addEventListener("click", function (event) {
        const button = event.target
        console.log(button.tagName)
        
        if (button.tagName !== "BUTTON") {
            return;
        }
    
        console.log(button.dataset.plain);
        
        if (button.dataset.plain === "true") { 
            //handles the if statement for the correct answer
            button.style.backgroundColor = "green";
            score ++;
            quesCorrect.textContent = score;
        } else {
            //handles the if statement for the incorrect answer
            button.style.backgroundColor = "red"
    
            //save a quiz score button and store the score in the database for future reference
        }
    
    });
}
