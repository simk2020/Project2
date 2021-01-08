const activity1=async UX=>{
    UX.preventDefault();

    const iQuestion=document.querySelector('#uiLogic').value;
    const iChoice=document.querySelector('#uxLogic').value;

    if(iQuestion&&iChoice){
        let userChoice;
        userChoice=iChoice.userChoice.value;
        if(!this.userChoice){
            alert('Practice always lends itself to progress');
        }else{
            alert("I would call you a genius but I don't want to inflate your false sense of self");
        }
    }
}


//handlebars logic
    //if question is boolean, campare for true or false
    //if question is multichoice, compare for corrrect response property
    //must account for variable question types
//upon click of submit button, configure what that action results in
//add event listeners on targeted elements