import { useState, useEffect } from "react";


const SelectedContact = ({ selectedContactID, setSelectedContactID }) => {

  const [contact, setContact] = useState('');

  useEffect(() => {
    const selectContact = async () => {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`);
      const responseJSON = await response.json();

      console.log(responseJSON);
      
      setContact(responseJSON);
      // console.log(contact.name);

    }

    selectContact();
  }, []);

  return (
    <>
      <ul>
        <li>{contact.name}</li>
        <li>{contact.phone}</li>
        <li>{contact.email}</li>
      </ul>

      <button       onClick={() => {
      setSelectedContactID(null);
      }}>Back</button>
    </>


  )


}

export default SelectedContact