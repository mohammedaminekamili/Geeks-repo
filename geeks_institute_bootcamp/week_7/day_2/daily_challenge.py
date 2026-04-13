def map_letters_to_indexes():
    # Ask a user for a word
    word = input("Enter a word: ")
    
    # Dictionary to store the indexes of each letter
    letter_indexes = {}
    
    # Iterate through the word using enumerate to get both the index and the letter
    for index, letter in enumerate(word):
        # Letters are the keys (strings)
        letter = str(letter)
        
        # If the letter is already in the dictionary, append the index
        if letter in letter_indexes:
            letter_indexes[letter].append(index)
        # Otherwise, create a new list with the current index
        else:
            letter_indexes[letter] = [index]
            
    print(letter_indexes)


map_letters_to_indexes()
