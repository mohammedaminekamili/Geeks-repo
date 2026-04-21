import random
from exercice2 import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained
    def train(self):
        super().bark()
        self.trained = True
    def play(*args):
        for i in args:
            print(f"{i.name} ")
        print("All play together!")

    def do_a_trick(self):
        tricks=["does a barrel roll","stands on his back legs","shakes your hand", "plays dead"]
        print(f"{self.name} {random.choice(tricks)}")
