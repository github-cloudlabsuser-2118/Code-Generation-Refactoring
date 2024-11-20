def factorial(n):
    if n == 0:
        return 1
    elif n > 0:
        return n * factorial(n-1)
    else:
        raise ValueError("Input must be a non-negative integer")

choice = int(input("Enter a number to calculate its factorial: "))
print(f"The factorial of {choice} is {factorial(choice)}")
