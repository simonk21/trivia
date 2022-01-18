const triviaForm = document.getElementById('survey-form');
const submitButton = document.getElementById('submit');
var count = 0;
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    var q1 = checkQuestion1(triviaForm.name.value); // answer: aloha
    var q2 = checkQuestion2(triviaForm.beauty.value); // answer: Left
    var q3 = checkQuestion3(triviaForm.age.value); // answer: 22
    var q4 = checkQuestion4(triviaForm.role.value); // answer: date1
    var q5 = checkQuestion5(); // answer: infinite
    var q6 = checkQuestion6(triviaForm.mostLike.value); // answer: answer4
    var q7 = checkQuestion7();

    if (q1 && q2 && q3 && q4 && q5 && q6 && q7){
        alert("Yay! You've answered all 7 questions. Password=ROSE");
    }
    else{
        alert("You've answers " + count + " questions correctly. Try again.");
        count = 0;
    }
})

function checkQuestion1(name){
    if(name.toUpperCase() == 'ALOHA'){
        count += 1;
        return true;
    }
    else{
        return false;
    }
}

function checkQuestion2(mark){
    if(mark.toUpperCase() == 'LEFT'){
        count += 1;
        return true;
    }
    else{
        return false;
    }
}

function checkQuestion3(age){
    if(age == 22){
        count += 1;
        return true;
    }
    else{
        return false;
    }
}

function checkQuestion4(date){
    if(date == 'date1'){
        count += 1;
        return true;
    }
    else{
        return false;
    }
}

function checkQuestion5(){
    var yes = document.getElementById('infinite');
    if (yes.checked){
        count += 1;
        return true;
    }
    else{
        return false;
    }
}

function checkQuestion6(song){
    if (song == 'answer4'){
        count += 1;
        return true;
    }
    else{
        return false;
    }
}

function checkQuestion7(){
    var snow = document.getElementById('snowboarding');
    var cs = document.getElementById('cs');
    var oyster = document.getElementById('oyster');
    var sing = document.getElementById('sing');
    var drive = document.getElementById('drive');
    var black = document.getElementById('black');
    var anime = document.getElementById('anime');
    var proj = document.getElementById('proj');
    var kids = document.getElementById('kids');
    var japan = document.getElementById('japan');
    var career = document.getElementById('career');
    if(snow.checked && cs.checked && !oyster.checked && !sing.checked && !drive.checked &&
        !black.checked && anime.checked && proj.checked && kids.checked && japan.checked && !career.checked){
            count += 1;
            return true;
        }
    else{
        return false;
    }
}