const output = document.getElementById("output");
let current = "";
let operator = "";
let previous = "";

function updateDisplay() {
    output.textContent = current || previous || "0";
}

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value;

    
        if (value === "AC") {
            current = "";
            previous = "";
            operator = "";
            updateDisplay();
            return;
        }

        
        if (value === "C") {
            current = current.slice(0, -1);
            updateDisplay();
            return;
        }


        if (["+", "-", "*", "/", "%"].includes(value)) {
            if (current === "") return;
            operator = value;
            previous = current;
            current = "";
            updateDisplay();
            return;
        }

        
        if (value === "=") {
            if (previous && current && operator) {
                current = eval(previous + operator + current).toString();
                previous = "";
                operator = "";
                updateDisplay();
            }
            return;
        }

        
        current += value;
        updateDisplay();
    });
});
