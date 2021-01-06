const axios=require('axios').default;

const firingNeurons=async()=>{
    const queryUrl="https://opentdb.com/api.php?amount=3&category=18&difficulty=medium";//url based api call
    const queryParam1='?amount=3';//'3' can be variable
    const queryParam2='&category=1';//'category' can be a variable instead, for dynamic value insert
    async function fetchData(){
        try{
            const fetched=await axios.get(queryUrl);
            console.log(fetched);
        }catch(detour){
            console.error(detour)
        }
    }
    fetchData();
}
firingNeurons();//logic trigger

//axios call within backend/
    //const questions=await fetch.get('https://opentdb.com/api.php?amount=3&category=18&difficulty=medium')//call to database from ui
//backend axios calls are handle with api or display routs
