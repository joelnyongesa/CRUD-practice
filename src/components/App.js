import { useEffect, useState } from 'react';
import '../App.css';
import Presidents from './Presidents';
import PresidentForm from './PresidentForm';

function App() {
  const [presidents, setPresidents] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8081/presidents')
    .then(r=>r.json())
    .then(data=>setPresidents(data))
    .catch(e=>console.log(e))
  }, [])

  /*
  Add - spread operator.
  Remove - filter.
  Update - map
  */
  function handleUpdatePresident(id, updatedPresidentObj){
    // New presidents object
    const updatedPresident = presidents.map((president)=>{
      if(president.id ===id){
        return{
          
        }
      }
    })
    // Loop and map
    // set to new president object
  }

  // Arrays, objects are immutable
  function handleAddPresident(newPresident){
    setPresidents([
      ...presidents,
      newPresident
    ])
  }


  return (
    <div className="App">
      <Presidents presidents={presidents}/>
      <PresidentForm onAddPresident={handleAddPresident}/>
    </div>
  );
}

export default App;

// Clear form
// Render automatically.
// PUT, DELETE
