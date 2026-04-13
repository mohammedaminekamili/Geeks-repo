import random

print("========= 🌟 Exercise 1 : Convert lists into dictionaries =========")
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
# Use zip to map keys to values, then convert to a dictionary
my_dict = dict(zip(keys, values))
print(my_dict)


print("\n========= 🌟 Exercise 2 : Cinemax #2 =========")
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

def calculate_movie_cost(family_dict):
    total_cost = 0
    for name, age in family_dict.items():
        if age < 3:
            cost = 0
        elif 3 <= age <= 12:
            cost = 10
        else:
            cost = 15
        print(f"{name.capitalize()} has to pay ${cost}.")
        total_cost += cost
    print(f"The family's total cost is ${total_cost}.")
    return total_cost

calculate_movie_cost(family)

# Bonus for Exercise 2
print("\n--- Bonus: Build your own family ---")
user_family = {}
while True:
    name_input = input("Enter a family member's name (or type 'quit' to stop): ").strip()
    if name_input.lower() == 'quit':
        break
    age_input = input(f"Enter {name_input}'s age: ").strip()
    try:
        user_family[name_input] = int(age_input)
    except ValueError:
        print("Invalid age. Skipping this member.")

if user_family:
    print("\nCalculating custom family cost:")
    calculate_movie_cost(user_family)


print("\n========= 🌟 Exercise 3 : Zara =========")
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
# 2. Change the number of stores to 2
brand["number_stores"] = 2

# 3. Print a sentence that explains who Zaras clients are
clients = ", ".join(brand["type_of_clothes"])
print(f"Zara's clients are people looking for {clients} clothes.")

# 4. Add a key called country_creation with a value of Spain
brand["country_creation"] = "Spain"

# 5. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 6. Delete the information about the date of creation
if "creation_date" in brand:
    del brand["creation_date"]

# 7. Print the last international competitor
print("Last international competitor:", brand["international_competitors"][-1])

# 8. Print the major clothes colors in the US
color_us = ", ".join(brand["major_color"]["US"])
print("Major clothes colors in the US:", color_us)

# 9. Print the amount of key value pairs
print("Amount of key-value pairs:", len(brand))

# 10. Print the keys of the dictionary
print("Keys of the dictionary:", list(brand.keys()))

# 11. Create another dictionary called more_on_zara
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12. Add the information from more_on_zara to brand
brand.update(more_on_zara)

# 13. Print the value of the key number_stores. What just happened ?
print("Number of stores is now:", brand["number_stores"])
# Explanation: The value of "number_stores" was updated from 2 to 10000 because update() overwrites existing keys.


print("\n========= 🌟 Exercise 4 : Some Geography =========")
def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}")

describe_city("Reykjavik")
describe_city("Paris", "France")


print("\n========= 🌟 Exercise 5 : Random =========")
def random_match(user_num):
    if not (1 <= user_num <= 100):
        print("Number must be between 1 and 100!")
        return

    generated_num = random.randint(1, 100)
    if user_num == generated_num:
        print("Success! Your number and the generated number are the same!")
    else:
        print(f"Fail. You picked {user_num}, but the random number was {generated_num}.")

try:
    user_val = int(input("Enter a number between 1 and 100: "))
    random_match(user_val)
except ValueError:
    print("Invalid number input.")


print("\n========= 🌟 Exercise 6 : Let's create some personalized shirts ! =========")
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()
make_shirt(size="medium")
make_shirt("small", "Keep Calm and Code On")
# Bonus: Keyword arguments
make_shirt(text="Built with Python", size="XXL")


print("\n========= 🌟 Exercise 7 : Temperature Advice =========")
def get_random_temp(season):
    # Bonus: Set limits based on season
    if season == 'winter':
        return round(random.uniform(-10.0, 16.0), 1) # Bonus: returning float
    elif season == 'spring':
        return round(random.uniform(5.0, 25.0), 1)
    elif season == 'summer':
        return round(random.uniform(20.0, 40.0), 1)
    elif season == 'autumn' or season == 'fall':
        return round(random.uniform(10.0, 22.0), 1)
    else:
        # Default fallback
        return round(random.uniform(-10.0, 40.0), 1)

def main():
    # Bonus: Determine season based on month (1 = Jan, 12 = Dec)
    try:
        month = int(input("Type in the number of the current month (1-12): "))
    except ValueError:
        month = 1 # fallback

    if month in [12, 1, 2]:
        season = 'winter'
    elif month in [3, 4, 5]:
        season = 'spring'
    elif month in [6, 7, 8]:
        season = 'summer'
    elif month in [9, 10, 11]:
        season = 'autumn'
    else:
        print("Invalid month. Defaulting to spring.")
        season = 'spring'

    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif 16 < temp <= 23:
        print("Nice and comfortable, a light jacket will do.")
    elif 24 <= temp <= 32:
        print("It's getting warm, enjoy the beautiful weather!")
    elif temp > 32:
        print("It's scorching hot! Stay hydrated and wear sunscreen.")

main()


print("\n========= 🌟 Exercise 8 : Star Wars Quiz =========")
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def run_quiz():
    while True:
        wrong_answers = []
        correct_count = 0
        incorrect_count = 0

        print("\n--- Starting Star Wars Quiz ---")
        for item in data:
            user_answer = input(item["question"] + " ")
            if user_answer.strip().lower() == item["answer"].lower():
                correct_count += 1
                print("Correct!")
            else:
                incorrect_count += 1
                print("Incorrect!")
                wrong_answers.append({
                    "question": item["question"],
                    "user_answer": user_answer,
                    "correct_answer": item["answer"]
                })

        # Inform user of results
        print("\n--- Quiz Results ---")
        print(f"Correct Answers: {correct_count}")
        print(f"Incorrect Answers: {incorrect_count}")

        # Bonus: Display wrong answers
        if incorrect_count > 0:
            print("\nHere are the ones you missed:")
            for mistake in wrong_answers:
                print(f"Q: {mistake['question']}")
                print(f"Your answer: {mistake['user_answer']} | Correct answer: {mistake['correct_answer']}\n")

        # Bonus: Play again if more than 3 wrong
        if incorrect_count > 3:
            play_again = input("You had more than 3 wrong answers. Unlearn what you have learned and try again? (yes/no): ")
            if play_again.strip().lower() != "yes":
                break
        else:
            print("The Force is strong with you. Good job!")
            break

run_quiz()
