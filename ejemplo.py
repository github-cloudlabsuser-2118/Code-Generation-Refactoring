def main():
    try:
        # Solicitar el primer número entero
        num1 = int(input("Enter the first integer: "))
        
        # Solicitar el segundo número entero
        num2 = int(input("Enter the second integer: "))
        
        # Calcular la suma de los dos números
        total = num1 + num2
        
        # Imprimir el resultado
        print(f"The sum of {num1} and {num2} is {total}")
    
    except ValueError:
        print("Invalid input. Please enter valid integers.")
    
    except KeyboardInterrupt:
        print("\nProgram terminated by user.")
        sys.exit(1)

if __name__ == "__main__":
    main()