
        
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
    