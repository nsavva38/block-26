import React from "react"; 
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";


export default function ContactList({ setSelectedContactID }) { 
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
        const responseJSON = await response.json();
        setContacts(responseJSON);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts()
  }, []);


  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               // Map over data here
               contacts.map((contact) => {
                return <ContactRow key={contact.id} contact={contact} setSelectedContactID={setSelectedContactID}/>
               })
             }
          </tbody>
        </table>
    ); 
}