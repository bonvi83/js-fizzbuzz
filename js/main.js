// COMANDO DI MATTIA PER VISUALIZZARE TUTTE LE CARD
// let rowElement = document.querySelector(".row");

// let card = document.getElementById("output-nome").innerHTML;


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
    rowElement.innerHTML += "<div class='card'>00</div>";
}



// console.log(rowElement)




cardRow.innerHTML += `
    <div class="col-3">
        <div class="card ${classes}">
            <h3>${result}</h3>
        </div>
    </div>
    `