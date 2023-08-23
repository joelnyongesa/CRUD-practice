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

  // console.log(presidents)


  return (
    <div className="App">
      <Presidents presidents={presidents}/>
      <PresidentForm/>
    </div>
  );
}

export default App;

// Clear form
// Render automatically.
// PUT, DELETE
