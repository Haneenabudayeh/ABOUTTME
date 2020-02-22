'use strict'

var mark = 0;
var name = prompt('what is your name ?');
console.log('Name', name);
alert('welcome' + name);

var Q1 = prompt('Do you think my age is 24?')
switch (Q1.toLocaleLowerCase()) {

    case 'yes':
    case 'y':
        alert('yes, thats true');
        mark++
        console.log('do you think my age is 24?');
        break;
    case 'no':
    case 'n':
        alert('no , thats fulse')
    default:
        break;
}



var Q2 = prompt('Do you think i love coffe?')
switch (Q2.toLocaleLowerCase()) {

    case 'yes':
    case 'y':
        alert('yes, thats true');
        mark++
        console.log('Do you think i love coffe?');
        break;
    case 'no':
    case 'n':
        alert('no , thats fulse')
    default:
        break;
}

var Q3 = prompt('do you think the best food is potato?')
switch (Q3.toLocaleLowerCase()) {

    case 'yes':
    case 'y':
        alert('no , thats fulse')
        mark++
        console.log('Do you think the best food is potato?');
        break;
    case 'no':
    case 'n':
        alert('yes, thats true');
    default:
        break;
}


var Q4 = prompt('do you think i love cat?')
switch (Q4.toLocaleLowerCase()) {

    case 'yes':
    case 'y':
        alert('no , thats fulse')
        console.log('do you think i love cat?');
        break;
    case 'no':
    case 'n':
        alert('yes, thats true');
        mark++
    default:
        break;
}


var Q5 = prompt('do you think i have a car?')
switch (Q5.toLocaleLowerCase()) {

    case 'yes':
    case 'y':
        alert('no , thats fulse')
        console.log('do you think i have a car');
        break;
    case 'no':
    case 'n':
        alert('yes, thats true');
        mark++
    default:
        break;
}

var Q6 = prompt('how much year you think i am graduated after go to university ?')
for (var trial = 0; trial < 4; trial++) {

    var Q6 = prompt("how much year you think i am graduated after go to university ?");
    console.log(Q6);
    if (Q6 == 5) {
        mark = mark + 1;
        alert('you are right');
        break;
    }
    else if (Q6 < 5) {
        alert('your answer is too low');
    }
    else if (know6 > 5) {
        alert('your answer is too high');
    }

}
if (trial === 4) {
    alert('the correct ans is 5');
}


var flowersILove = ['daisy', 'rose', 'jasmine', 'sunflower']
for (var i = 0; i < 6; i++) {
    console.log(flowersILove[i]);

    var userAnswer = prompt('one of the flowers i love is?')
    console.log(userAnswer);
    if (userAnswer === 'daisy' || userAnswer === 'rose' || userAnswer === 'jasmine' || userAnswer === 'sunflower') {
        mark = mark + 1;
        alert('you are right');
        break;
    }
    else if (userAnswer !== 'daisy' || userAnswer !== 'rose' || userAnswer !== 'jasmine' || userAnswer !== 'sunflower') {
        alert('try again');
    }
}
if (i === 6) {
    alert('flowers I Love are: daisy, rose, jasmine and sunflower');
}



alert(`your total score is: ${mark}`);




document.write("<h1>welcome in your store page !</h1><p>Have a nice day!</p>");