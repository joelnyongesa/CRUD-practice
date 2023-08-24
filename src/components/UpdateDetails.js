import { useState } from "react";

function UpdateDetails({president}){
    // setting state variables.
    const [name, setName] = useState(president.name)
    const [image, setImage] = useState(president.image)
    const [dateOfBirth, setDateOfBirth] = useState(president.birthday) //
    const [number, setNumber] = useState(president.number) 
    
    function changeName(e){
        setName(e.target.value)
    }

    function changeImage(e){
        setImage(e.target.value)
    }
    function changeDateOfBirth(e){
        setDateOfBirth(e.target.value)
    }

    function changeNumber(e){
        setNumber(e.target.value)
    }

    function handleUpdate(e){
        e.preventDefault();
        let id = president.id

        // New object to predict
        let newPresidentObj = {
            name: name,
            image: image,
            birthday: dateOfBirth,
            number: number
        }

        fetch(`http://localhost:8081/presidents/${id}`,{
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPresidentObj)
        }) ///promises
        .then(r=>r.json())
        .then(data => console.log(data))
        .catch(e=>console.log(e))
    }



    return(
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" value={name} onChange={changeName}/>
                <input value={image} type="url" onChange={changeImage}/>
                <input value={dateOfBirth} type="text" onChange={changeDateOfBirth}/>
                <input value={number} type="number" onChange={changeNumber}/>
                <button type="submit">Add President</button>
            </form>
        </div>
    )
}


export default UpdateDetails;