import { useState, type Dispatch, type SetStateAction, type FormEvent, type ChangeEvent } from "react";
import FormComponent from "./components/FormComponent.tsx";
type DataState = {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  destination: string;
  isLactoseFree: string;
  isVegan: string;
  isNutsFree: string;
};

function App() {
  // Initialize state as an object
  const [data, setData] = useState<DataState>({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    isLactoseFree:"",
    isVegan: "",
    isNutsFree: ""
  });

  // FormComponent expects this prop; this app uses submit-based updates in `FormGetDAta`.
  const handleChange = (_event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {};


  return (
    <>
    
    <FormGetDAta setData={setData} />
    <FormComponent data={data} handleChange={handleChange} />
 
    </>
    
  );
}


const FormGetDAta = ({
  setData,
}: {
  setData: Dispatch<SetStateAction<DataState>>;
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const test = Object.fromEntries(formData) as any
    console.log(test)
    setData((prev) => ({
      ...prev,
      firstName: test.firstName,
      lastName: test.lastName,
      age: test.age,
      gender: test.gender,
      destination: test.destination,
      isLactoseFree: test.isLactoseFree,
      isVegan: test.isVegan,
      isNutsFree: test.isNutsFree,
    }));
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input 
          name="firstName" 
         
          placeholder="First Name" 
        /><br />

        <input 
          name="lastName" 
       
          placeholder="Last Name" 
        /><br />

        <input 
          name="age" 
          placeholder="Age" 
        /><br />

        <label>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
           
          /> Male
        </label>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
           
          /> Female
        </label><br />

        <select 
          name="destination" 
        
        >
          <option value="">-- Choose Destination --</option>
          <option value="Japan">Japan</option>
          <option value="Germany">Germany</option>
          <option value="Norway">Norway</option>
        </select><br />
<label >Dietary Restriction</label>
<br />
        <label>
          <input 
            type="checkbox" 
            name="isNutsFree"
        
           
          /> Nuts Free
        </label>
        <br />
        <label>
          <input 
            type="checkbox" 
            name="isLactoseFree"
        
           
          /> Lactose Free
        </label> 
        <br /><label>
          <input 
            type="checkbox" 
            name="isVegan"
        
           
          /> Vegan
        </label>
        
        
        <br />

        <button >Submit</button>
      </form>
    </>
  );
};

export default App;
