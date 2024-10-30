import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import { useState } from "react";


function App() {
  const [selectedContactID, setSelectedContactID] = useState(null);

  return (
    <>
      {selectedContactID ? (
        <SelectedContact selectedContactID={selectedContactID} setSelectedContactID={setSelectedContactID}/>
      ) : (
        <ContactList setSelectedContactID={setSelectedContactID}/>
      )}
    </>
  )
}

export default App
