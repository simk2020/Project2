const API="https://opentdb.com/api.php?amount=5&category=12&difficulty=medium";//could help in parsing JSON response, comparing user selections to [correct answer]

const initialTease=async UX=>{
    UX.preventDefault();

    const iQuestion=document.querySelector('#uiLogic').value;//rendered question
    const iChoice=document.querySelector('#uxLogic').value;//rendered potential answers
    const submitButton=document.querySelector('#submit');//key target for use within an event listenter

    if(iChoice){
        const programmaticMagic=await fetch(API){
            correct_answer:results.correct_answer
        }//this code block is a totally different stream of thought from the one below. I just started shootin' shots...

        let userChoice;
        userChoice=iChoice.userChoice.value;
        if(!this.userChoice){
            alert('Practice always lends itself to progress');
        }else{
            alert("I would call you a genius but I don't want to inflate your false sense of self");
        }
    }
}
initialTease()
iChoice.addEventListener('click',()=>{
    // if(this===)
})//had trouble trying to target the 'correct object'

//handlebars logic
    //if question is boolean, campare for true or false
    //if question is multichoice, compare for corrrect response property
    //must account for variable question types
//upon click of submit button, configure what that action results in
//add event listeners on targeted elements
    //use psuedo classes for before/after user clicks an element