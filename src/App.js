// App.js
import React from 'react';
import Exmple from './Exmple'; // Ensure this path is correct





const company_details={
   company_name:"Gogaga Holiday",
   company_add:"Hyderabad",
   pic_code:"522264",
}

const App = () => {
  // Define the details array
  const details = [
    {
      firstname: "Noorbasha",
      lastname: "Subhani",
      qualification: "MCA"
    },
    {
      firstname: "Noorbasha2",
      lastname: "Subhani2",
      qualification: "MCA2"
    }
  ]


  const company_details=[{
    company_name:"Gogaga Holiday",
    company_add:"Hyderabad",
    pic_code:"522264",
 }]

  return (
    <div>
      <Exmple details={details}/>

      
    </div>
  );
};

export default App;
