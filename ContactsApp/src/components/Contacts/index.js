import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

import "./styles.css"


function Contacts() {
  const [contacts, setContacts] = useState([
    {fullName:"Ferhat",
    phone_number:1231234},
    {fullName:"Ulaş",
    phone_number:456457},
    {fullName:"Ela",
    phone_number:789786},

  ])

  useEffect(() => {
    console.log(contacts);
  }, [contacts])


  return (
    <div id="container">
      <h1>CONTACTS APP</h1>
<List contacts={contacts} /> 
<Form addContact={setContacts} contacts={contacts} />
 </div>
  );
}

export default Contacts;
