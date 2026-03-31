function runFizzBuzz(){
    const output = document.getElementById("output");
    output.innerHTML = "";

    //user input
    const fizzNumInput = document.getElementById("fizzNum").value;
    const buzzNumInput = document.getElementById("buzzNum").value;
    const maxNumInput = document.getElementById("maxNum").value;

    //convert to integers
    const fizzNum = Number(fizzNumInput);
    const buzzNum = Number(buzzNumInput);
    let maxNum = Number(maxNumInput);

    //user input validation
    if (isNaN(fizzNum) || fizzNum < 1 || !Number.isInteger(fizzNum)) {
        alert("Please enter a whole positive number for Fizz.");
        return;
    }
    if (isNaN(buzzNum) || buzzNum < 1 || !Number.isInteger(buzzNum)) {
        alert("Please enter a whole positive number for Buzz.");
        return;
    }
    if (isNaN(maxNum) || maxNum < 1 || !Number.isInteger(maxNum)) {
        alert("Please enter a whole positive number for Max number.");
        return;
    }

    if (maxNum > 100) maxNum = 100; //Sets limit to 100

    for (let num = 1; num <= maxNum; num++){
        let word = "";
        let className = "";

        if (num%fizzNum === 0 && num%buzzNum === 0){
            word = " FizzBuzz";
            className = "fizzbuzz";
        }
        else if (num%fizzNum === 0){
            word = " Fizz";
            className = "fizz";
        }
        else if (num%buzzNum === 0){
            word = " Buzz";
            className = "buzz";
        }

        const li = document.createElement("li");

        const numberSpan = document.createElement("span");
        numberSpan.textContent = num;
        li.appendChild(numberSpan);

        if (word){
            const wordSpan = document.createElement("span");
            wordSpan.textContent = " " + word;
            wordSpan.classList.add(className);
            li.appendChild(wordSpan);
        }

        output.appendChild(li);
    }
}