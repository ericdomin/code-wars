#Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.#
def even_or_odd(number):
     result = 'Even' if number % 2 == 0 else 'Odd'
     return result