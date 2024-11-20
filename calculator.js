class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }
}

// Ejemplo de uso
const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(5, 3)); // 2
console.log(calculadora.multiplicar(5, 3)); // 15
console.log(calculadora.dividir(5, 3)); // 1.666...