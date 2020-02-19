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

switch (Q6.toLocaleLowerCase()) {

    case 5:
        alert('yes, thats true');
        mark++
        console.log('do you think i have a car');

        break;
    case 4:
    case 3:
    case 3.5:

}
var i = 0
for (i = 0; i < 4; i++) {
    Q6 = prompt('wrong,try again');
    console.log(i)
    if (Q6 > 5) {
        alert('too high');

    }
    else if (Q6 < 3) {
        alert('too low');

    }

}
alert('the correct ans is 5');





var colorarray = ['red', 'blue', 'orange', 'black', 'white', 'pink'];
var Q7 = prompt('which color do you think love it?')
for (var i = 0; i < colorarray.length; i++) {
    //console.log(colorarray[i])
    if (Q7 == colorarray[0] || Q7 == colorarray[1]) {
        alert('yes, thats true');
        mark++
        break;
    }
    else {
        alert('wrong,try again');
        Q7 = prompt('wrong,try again');
    }
}

alert('the correct ans is red, blue, orange, black, white, pink ');
alert('your mark' + mark)



document.write("<h1>welcome in your store page !</h1><p>Have a nice day!</p>");
