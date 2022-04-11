let choiceA = document.getElementById('Choice-a')
let choiceP = document.getElementById('Choice-p')
// 
let solutionOne = document.getElementById('ans-One')
let solutionTwo = document.getElementById('ans-Two')
let solutionThree = document.getElementById('ans-Three')
//
let CorrectSignOne = document.getElementById('Correct-Sign-one')
let CorrectSignTwo = document.getElementById('Correct-Sign-two')
let CorrectSignThree = document.getElementById('Correct-Sign-three')
//
let WrongSignOne = document.getElementById('WrongSign-one')
let WrongSignTwo = document.getElementById('WrongSign-two')
let WrongSignThree = document.getElementById('WrongSign-three')
//
let ResetAnswers = document.getElementById('Reset')
let ViewAnswers = document.getElementById('View-Answers')

//---------------Functionality for first word-------------//
function callTrueOne() {

    solutionOne.innerHTML = 'a'
    solutionOne.style.textDecoration = 'underline'
    CorrectSignOne.style.display = 'inline'
    
                
    resetStatus()
}

function callFalseOne() {
    
    WrongSignOne.style.display = 'inline'

    resetStatus()
}
//---------------Functionality for second word-------------//
function callTrueTwo() {

    solutionTwo.innerHTML = 'p'
    solutionTwo.style.textDecoration = 'underline'
    CorrectSignTwo.style.display = 'inline'
                
    resetStatus()
}

function callFalseTwo() {
    
    WrongSignTwo.style.display = 'inline'

    resetStatus()

}
//---------------Functionality for third word-------------//
function callTrueThree() {

    solutionThree.innerHTML = 'a'
    solutionThree.style.textDecoration = 'underline'
    CorrectSignThree.style.display = 'inline'

    resetStatus()
                
}

function callFalseThree() {
    
    WrongSignThree.style.display = 'inline'

    resetStatus()
}

function resetStatus(){
    solutionOne.removeEventListener('click', callFalseOne, true);
    solutionTwo.removeEventListener('click', callFalseTwo, true);
    solutionThree.removeEventListener('click', callFalseThree, true);

    solutionOne.removeEventListener('click', callTrueOne, true);
    solutionTwo.removeEventListener('click', callTrueTwo, true);
    solutionThree.removeEventListener('click', callTrueThree, true);
}

///////// Clicking Event Listeners ////////

choiceA.addEventListener('click', () => {

    choiceA.style.backgroundColor = '#0fa0c5'
    choiceP.style.backgroundColor = 'white'

    solutionOne.addEventListener('click', callTrueOne, true)

    solutionTwo.addEventListener('click', callFalseTwo, true)

    solutionThree.addEventListener('click', callTrueThree, true)

})

choiceP.addEventListener('click', () => {

    choiceP.style.backgroundColor = '#0fa0c5'
    choiceA.style.backgroundColor = 'white'

    solutionOne.addEventListener('click', callFalseOne, true)

    solutionTwo.addEventListener('click', callTrueTwo, true)

    solutionThree.addEventListener('click', callFalseThree, true)

})

ResetAnswers.addEventListener('click', () => {

    choiceA.style.backgroundColor = 'white'
    choiceP.style.backgroundColor = 'white'

    solutionOne.textContent = '__'
    CorrectSignOne.style.display = 'none'
    WrongSignOne.style.display = 'none'

    solutionTwo.textContent = '__'
    CorrectSignTwo.style.display = 'none'
    WrongSignTwo.style.display = 'none'

    solutionThree.textContent = '__'
    CorrectSignThree.style.display = 'none'
    WrongSignThree.style.display = 'none'

})

ViewAnswers.addEventListener('click', () =>{

    choiceA.style.backgroundColor = 'white'
    choiceP.style.backgroundColor = 'white'


    solutionOne.innerHTML = 'a'
    solutionOne.style.textDecoration = 'underline'
    CorrectSignOne.style.display = 'inline'
    WrongSignOne.style.display = 'none'

    solutionTwo.innerHTML = 'p'
    solutionTwo.style.textDecoration = 'underline'
    CorrectSignTwo.style.display = 'inline'
    WrongSignTwo.style.display = 'none'

    solutionThree.innerHTML = 'a'
    solutionThree.style.textDecoration = 'underline'
    CorrectSignThree.style.display = 'inline'
    WrongSignThree.style.display = 'none'
})