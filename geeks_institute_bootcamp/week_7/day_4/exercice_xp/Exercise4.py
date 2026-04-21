class Familly():
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name
        
    def born(self, **kwargs):
        self.members.append(kwargs)
        name = kwargs.get("name", "Baby")

        print(f"🎉 Congratulations! A new member {name} was born in the {self.last_name} family!")


    def is_18(self, name):
        for i in self.members:
            if i.name == name and i.age >= 18:
                return True
        return False
    def family_presentation(self):
        print(f"The {self.last_name} family is composed of: {self.members}")
        
members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

# Create family instance
my_family = Familly("Kamili", members)

# Add a new child
my_family.born(name="Youssef", age=0, gender="Male", is_child=True)

# Check ages
my_family.is_18("Michael")
my_family.is_18("Youssef")

# Present family
my_family.family_presentation()