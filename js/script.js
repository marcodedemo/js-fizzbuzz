
/* 

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



    creo un ciclo di creazione di sonsole.log() con numeri da 1 a 100

    

    SE il numero è divisibile per 3 && per 5 
        ° stampo FizzBuzz
    
    ALTRIMENTI SE il numero è divisibile per 3
        ° stampo Fizz
    
    ALTRIMENTI SE il numero è divisibile per 5 
        ° stampo Buzz
    
    ALTRIMENTI
        ° stampo il numero

    
*/



let counter = 0;

let containerEl = document.getElementById("container");



for(i = 1; i <= 100; i++){

    // creo un div 
    let squareEl = document.createElement("div");

    // imposto containerEl come genitore di squareEl
    containerEl.append(squareEl);


    counter++;

    // SE il numero è divisibile per 3 && per 5 stampo FizzBuzz
    if (counter % 5 == 0 && counter % 3 == 0){

        console.log("FizzBuzz");

        squareEl.innerHTML = "FizzBuzz";
        squareEl.classList.add("fizzclass","buzzclass");

    // ALTRIMENTI SE il numero è divisibile per 3 stampo Fizz
    } else if (counter % 3 == 0){

        console.log("Fizz");

        squareEl.innerHTML = "Fizz";
        squareEl.classList.add("fizzclass");



    // ALTRIMENTI SE il numero è divisibile per 5 stampo Buzz
    } else if (counter % 5 == 0 ){

        console.log("Buzz");

        squareEl.innerHTML = "Buzz";
        squareEl.classList.add("buzzclass");

    // ALTRIMENTI stampo il numero
    } else{

        console.log(counter);
        squareEl.innerHTML = counter;

    }

    
}