

// CODICE DI BASE
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');

    } else if (i % 3 == 0) {
        console.log('Fizz');

    } else if (i % 5 == 0) {
        console.log('Buzz');

    } else {
        console.log(i);
    }
}



// cardRow.innerHTML += `
//     <div class="col-3">
//         <div class="card ${classes}">
//             <h3>${result}</h3>
//         </div>
//     </div>
//     `