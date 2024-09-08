class LinkStack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(item) {
        const newNode = { value: item, next: this.top };
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Cannot pop when stack is empty.");
            return null;
        }
        const value = this.top.value;
        this.top = this.top.next;
        this.size--;
        return value;
    }
}

function dis(value) {
    document.getElementById("result").value += value;
}

function clr() {
    document.getElementById("result").value = "";
}

function solve() {
    let expression = document.getElementById("result").value;
    try {
        // Evaluate the expression using eval
        const result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
        console.error("Error evaluating expression:", error);
    }
}

function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function evaluate(operator, left, right) {
    switch (operator) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return right !== 0 ? left / right : 'Division by zero!';
        default: return 0;
    }
}

document.getElementById("result").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        event.preventDefault()
        solve()
    }
});
