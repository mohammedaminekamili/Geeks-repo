from Exercise4 import Familly

class TheIncredibles(Familly):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)
    def use_power(self, name):
        for i in self.members:
            if i.name == name and i.is_18:
                print(f"{name} is using {i.power}")
            elif i.name == name and not i.is_18:
                raise Exception(f"{name} is not allowed to use {i.power}")
    def incredible_presentation(self):
        print( "*Here is our powerful family **")
        super().family_presentation()

# Initial incredible members
members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

# Create instance
incredible_family = TheIncredibles("Incredibles", members)

# First presentation
incredible_family.incredible_presentation()

# Use powers
incredible_family.use_power("Michael")

# Add Baby Jack
incredible_family.born(
    name="Baby Jack",
    age=0,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="Jack-Jack"
)

# Second presentation
incredible_family.incredible_presentation()

# Try using Baby Jack power (will raise exception)
try:
    incredible_family.use_power("Baby Jack")
except Exception as e:
    print("\n❌ Exception caught:")
    print(e)