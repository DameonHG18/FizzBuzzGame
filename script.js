function runFizzBuzz(){
    const output = document.getElementById("output");
    output.innerHTML = "";

    //user input
    const fizzNum = parseInt(document.getElementById("fizzNum").value) || 3;
    const buzzNum = parseInt(document.getElementById("buzzNum").value) || 5;
    let maxNum = parseInt(document.getElementById("maxNum").value) || 20;
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