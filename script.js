function runFizzBuzz(){
    const output = document.getElementById("output");
    output.innerHTML = "";

    for (let num = 1; num <= 20; num++){
        let word = "";
        let className = "";

        if (num%3 === 0 && num%5 === 0){
            word = " FizzBuzz";
            className = "fizzbuzz";
        }
        else if (num%3 === 0){
            word = " Fizz";
            className = "fizz";
        }
        else if (num%5 === 0){
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