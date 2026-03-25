
import type { ChangeEvent } from "react";

interface DataInterface {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  destination: string;
  isLactoseFree: string;
  isVegan:string;
  isNutsFree:string;
}

interface FormComponentProps {
  data: DataInterface;
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

function FormComponent({ data, handleChange: _handleChange }: FormComponentProps) {
  return (
    <main style={{ padding: "20px" }}>
      {/* Method "GET" (default) ensures the data appears in the URL on submit */}
      

      <hr />
      <h3>Entered Information:</h3>
      <p><b>Name:</b> {data.firstName} {data.lastName}</p>
      <p><b>Age:</b> {data.age}</p>
      <p><b>Gender:</b> {data.gender}</p>
      <p><b>Destination:</b> {data.destination}</p>
      <p><b>Dietary:</b> </p>
      <p>**Nuts free : {data.isNutsFree ? "yes" : "no"}</p>
      <p>**Lactose free : {data.isLactoseFree ? "yes" : "no"}</p>
      <p>**Vegan meal : {data.isVegan ? "yes" : "no"}</p>
    </main>
  );
}

export default FormComponent;

