
# Exercise 1

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'  

cat1 = Bengal("kitkat", 5)
cat2 = Chartreux("Milo", 4)
cat3 = Siamese("Snowball", 6)


all_cats = [cat1, cat2, cat3]

sara_pets = Pets(all_cats)

sara_pets.walk()


# Exercise 2

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.weight = weight
        self.age = age
    def bark(self):
        return f"{self.name} is barking!"
    def run_speed(self):
        return self.weight/10*self.age
    def fight (self, other_dog):
        if (self.run_speed()*self.weight) > (other_dog.run_speed()*other_dog.weight):
            return f"{self.name} is stronger!"
        else:
            return f"{other_dog.name} is stronger!"
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Bolt", 3, 15)

print(dog1.bark())
print(f"{dog1.name} speed: {dog1.run_speed()}")
print(dog1.fight(dog2))