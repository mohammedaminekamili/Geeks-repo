//exercice 1
const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];
  
  for (let animal of data) {
      if (animal.type=="dog") {
          animal.age*=7
      }
  }
  
  const totalHumanAgeReduce = data.reduce((accumulator, animal) => {
    if (animal.type === 'dog') {
      return accumulator + (animal.age * 7);
    }
    return accumulator;
  }, 0)

  //exercice2
  const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '.trim()

  //exercice3
  const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}]
let obj={}
users.forEach((x)=>{
  let key=x.firstName+' '+x.lastName
obj[key]=x.role
})
//exercice 4
const letters = ['x', 'y', 'z', 'z']
let obj={}
for (const e of letters) {
  if (e in obj) {
    obj.e+=1
  }
  else{
    obj.e=1
  }
}

let result=letters.reduce((acc,curr)=>{
if (curr in acc) {
  acc[curr]+=1
} else {
  acc[curr]=1
}
return acc;
},{})

