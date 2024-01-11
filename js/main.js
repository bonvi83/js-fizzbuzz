const card = document.getElementById("row");

// CODICE DI BASE
for (var i = 1; i <= 100; i++) {
    let result; 
    if (i % 3 == 0 && i % 5 == 0) {
        result = "FizzBuzz";
        // console.log('FizzBuzz');

    } else if (i % 3 == 0) {
        result = "Fizz";
        // console.log('Fizz');

    } else if (i % 5 == 0) {
        result = "Buzz";
        // console.log('Buzz');

    } else {
        result = i;
        // console.log(i);
    }

    const box = `<div class="quad m-3 ${result}">${result}</div>`;
    card.innerHTML += box;
}