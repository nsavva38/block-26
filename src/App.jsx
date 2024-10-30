import ContactList from "./components/ContactList";
import { useState } from "react";


function App() {
  const [selectedContactID, setSelectedContactID] = useState(null);
  console.log(selectedContactID);

  return (
    <>
      {selectedContactID ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList setSelectedContactID={setSelectedContactID}/>
      )}
    </>
  )
}

export default App
