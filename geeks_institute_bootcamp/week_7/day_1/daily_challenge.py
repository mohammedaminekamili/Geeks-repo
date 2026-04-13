print("--- Challenge 1 ---")
try:
    number = int(input("Enter a number: "))
    length = int(input("Enter a length: "))

    # Generate a list of multiples of the number until the list length reaches the specified length
    multiples = [number * i for i in range(1, length + 1)]
    print(f"number: {number} - length {length} ➞ {multiples}")

except ValueError:
    print("Please enter valid integers for Challenge 1.")


print("\n--- Challenge 2 ---")
user_word = input("Enter a word: ")
new_word = ""

# Loop through the word and construct the new_word by excluding consecutive duplicates
if len(user_word) > 0:
    new_word += user_word[0]  # Add the first character to start
    for i in range(1, len(user_word)):
        # If the current character is not the same as the previous character, add it to new_word
        if user_word[i] != user_word[i - 1]:
            new_word += user_word[i]

print(f"user's word : \"{user_word}\" ➞ \"{new_word}\"")
