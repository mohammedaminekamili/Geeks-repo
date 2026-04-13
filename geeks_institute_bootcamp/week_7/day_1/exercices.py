
#Exercie 1
print("Hello World \n"*4)
#Exercie 2
result = 99**3*8
print(result)
#Exercie 3
my_name = "kamili"  
user_name = input("What is your name? ")
if user_name.lower() == my_name.lower():
    print("No way! We have the exact same name! We must be twins!")
else:
    print(f"Nice to meet you, {user_name}! Sadly, we don't share the same name.")
#Exercie 4
height_str = input("What is your height in centimeters? ")
height = int(height_str)
if height > 145:
    print("You are tall enough to ride!")
else:
    print("You need to grow some more to ride.")

# 🌟 Exercise 5 : Favorite Numbers
my_fav_numbers = {7, 42, 99}
my_fav_numbers.add(11)
my_fav_numbers.add(24)

# "Remove the last number." 
# Note: Sets are unordered, so they do not have a "last" element to remove.
# To strictly fulfill the task, we can remove an arbitrary element using pop() 
# or convert to a list, pop the last, and convert back.
my_list = list(my_fav_numbers)
my_list.pop()
my_fav_numbers = set(my_list)

friend_fav_numbers = {3, 15, 23}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)

# 🌟 Exercise 6: Tuple
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
print("\nExercise 6 Answer: No, it is not possible to add more integers to a tuple. Tuples are immutable.")

# 🌟 Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove Banana from the list.
basket.remove("Banana")
# Remove Blueberries from the list.
basket.remove("Blueberries")
# Add Kiwi to the end of the list.
basket.append("Kiwi")
# Add Apples to the beginning of the list.
basket.insert(0, "Apples")
# Count how many apples are in the basket.
apples_count = basket.count("Apples")
print("\nNumber of apples in the basket:", apples_count)
# Empty the basket.
basket.clear()
# Print(basket)
print("Empty basket:", basket)

# 🌟 Exercise 8 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences
print("\n--- Sandwich Orders ---")
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
while len(sandwich_orders) > 0:
    # pop(0) takes it from the start to simulate chronological orders
    current_sandwich = sandwich_orders.pop(0) 
    finished_sandwiches.append(current_sandwich)

# After all the sandwiches have been made, print a message listing each sandwich that was made
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}")
