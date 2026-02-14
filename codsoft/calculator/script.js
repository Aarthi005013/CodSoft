
let outputScreen = document.getElementById("output-Screen");
let buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        if (value === "AC") 
        {
            outputScreen.value = "";
        }
        else if (value === "Del")
        {
            outputScreen.value = outputScreen.value.slice(0, -1);
        }
        else if (value === "=")   
        {
            try {
                outputScreen.value = eval(outputScreen.value);
            } catch {
                alert("Invalid Expression");
            }
        }
        else 
        {
            outputScreen.value += value;
        }
    });
});

