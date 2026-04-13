print("========= 🌟 Exercise 1: Cats =========")

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Whiskers", 3)
cat2 = Cat("Garfield", 8)
cat3 = Cat("Tom", 5)

def find_oldest_cat(*cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")


print("\n========= 🌟 Exercise 2: Dogs =========")

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
        
    def bark(self):
        print(f"{self.name} goes woof!")
        
    def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x} cm high!")

davids_dog = Dog("Rex", 50)
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height}cm tall.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height}cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}.")
else:
    print("Both dogs are the same size.")


print("\n========= 🌟 Exercise 3 : Who’s the song producer? =========")

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
        
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


print("\n========= 🌟 Exercise 4 : Afternoon at the Zoo =========")

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"[*] Added {new_animal} to the zoo.")
        else:
            print(f"[!] {new_animal} is already in the zoo.")
            
    def get_animals(self):
        print(f"\n--- Animals currently in {self.name} ---")
        for animal in self.animals:
            print(f"- {animal}")
            
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"[*] Sold {animal_sold}.")
        else:
            print(f"[!] {animal_sold} is not in the zoo.")
            
    def sort_animals(self):
        self.animals.sort()
        groups = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in groups:
                groups[first_letter] = animal # If there is only one, format as a string
            elif isinstance(groups[first_letter], list):
                groups[first_letter].append(animal) # Target existing lists
            else:
                groups[first_letter] = [groups[first_letter], animal] # Convert existing string item into a list block
        return groups
        
    def get_groups(self, groups=None):
        if groups is None:
            groups = self.sort_animals()
        print("\n--- Animal Groups ---")
        for key, value in groups.items():
            print(f"{key}: {value}")


new_york_zoo = Zoo("New York Zoo")

print(f"Welcome to the {new_york_zoo.name} Management System.")
while True:
    animal_to_add = input("Which animal should we add to the zoo? (type 'quit' to stop) --> ").strip()
    if animal_to_add.lower() == 'quit':
        break
    if animal_to_add:
        new_york_zoo.add_animal(animal_to_add)

new_york_zoo.get_animals()

# Remove a random animal to demonstrate deletion mapping correctly
animal_to_remove = input("\nWhich animal should we sell? ")
new_york_zoo.sell_animal(animal_to_remove)

grouped = new_york_zoo.sort_animals()
new_york_zoo.get_groups(grouped)
